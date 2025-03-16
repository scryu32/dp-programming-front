import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";

export async function GET() {
  try {
    const db = (await connectToDatabase()).db("forum");
    const rankingCollection = db.collection("ranking");
    const usersCollection = db.collection("users");

    // score 기준 내림차순 정렬 후 상위 10명 조회
    const topRankings = await rankingCollection
      .find({})
      .sort({ score: -1 })
      .limit(10)
      .toArray();

    // 각 ranking 항목에 대해 사용자 정보를 찾아 딕셔너리로 합치기
    const results = await Promise.all(
      topRankings.map(async (ranking) => {
        const user = await usersCollection.findOne({ userId: ranking.userId });
        return {
          ranking: {
            userId: ranking.userId,
            score: ranking.score,
            solvedProblems: ranking.solvedProblems,
            // 필요한 다른 ranking 정보 추가 가능
          },
          user: user
            ? {
                name: user.name,
                userId: user.userId,
                grade: user.grade,
              }
            : null,
        };
      })
    );

    return NextResponse.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error("랭킹 조회 중 오류 발생:", error);
    return NextResponse.json(
      { success: false, message: "랭킹 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
