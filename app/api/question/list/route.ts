import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";

export async function GET() {
  try {
    const db = (await connectToDatabase()).db("forum");
    const questionsCollection = db.collection("questions");

    // score 기준 내림차순 정렬 후 상위 10명 조회
    const Questions = await questionsCollection
      .find({})
      .toArray();

    const results = await Promise.all(
      Questions.map(async (question) => {
        return {
          question: {
            qId: question.qId,
            name: question.name,
            title: question.title,
            content: question.content,
          }
        };
      })
    );
    return NextResponse.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error("질문 조회 중 오류 발생:", error);
    return NextResponse.json(
      { success: false, message: "랭킹 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
