import { type NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { problemName, answers, cookieData } = body;

    const userId = cookieData.userId;
    const db = (await connectToDatabase()).db("forum");
    const user = await db.collection("users").findOne({ userId });
    
    if (!answers) {
      return NextResponse.json(
        { success: false, message: "정답이 없는데요" },
        { status: 500 }
      ); 
    }

    if (user) {
      // 문제별 점수 설정
      const fivePointProblems = ["variable-1", "variable-2"];
      const tenPointProblems = ["algorithm-1", "algorithm-2"];

      let points = 0;
      if (fivePointProblems.includes(problemName)) {
        points = 5;
      } else if (tenPointProblems.includes(problemName)) {
        points = 10;
      }

      if (problemName == "variable-1") {
        if ( JSON.stringify(answers) !== JSON.stringify(["8", "15", "1", "2", "125"]) ) {
          return NextResponse.json(
            { success: false, message: "넌 이문제 풀 단계가 아니다.." },
            { status: 500 }
          ); 
        }
      } else if (problemName == "variable-2") {
        if ( JSON.stringify(answers) !== JSON.stringify(["int", "str", "float", "error"]) ) {
          return NextResponse.json(
            { success: false, message: "넌 이문제 풀 단계가 아니다.." },
            { status: 500 }
          ); 
        }
      }


      // 점수가 0이 아니면(즉, 점수를 부여할 문제라면)
      if (points > 0) {
        const rankingCollection = db.collection("ranking");
        // solvedProblems 배열에 이미 해당 문제명이 포함되어 있지 않은 경우에만 업데이트
        const updateResult = await rankingCollection.updateOne(
          { userId, solvedProblems: { $ne: problemName } },
          {
            $inc: { score: points },
            $addToSet: { solvedProblems: problemName },
          }
        );
        console.log("업데이트 결과:", updateResult);
        if (updateResult.matchedCount === 0) {
          console.log(`사용자 ${userId}의 solvedProblems에 이미 ${problemName}이 존재하여 점수가 추가되지 않았습니다.`);
        }
      } else {
        console.log(`문제 ${problemName}은 점수를 부여하지 않는 문제로 처리합니다.`);
      }
    } else {
      console.log(`forum에 등록된 사용자가 아닙니다: ${userId}`);
    }

    return NextResponse.json({
      success: true,
      message: "정답이 성공적으로 제출되었습니다.",
    });
  } catch (error) {
    console.error("제출 처리 중 오류 발생:", error);
    return NextResponse.json(
      { success: false, message: "제출 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
