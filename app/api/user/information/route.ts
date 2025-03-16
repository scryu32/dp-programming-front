import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "userId가 필요합니다." }, { status: 400 });
    }

    const db = (await connectToDatabase()).db("forum");
    const usersCollection = db.collection("users");
    const rankingCollection = db.collection("ranking");

    // 유저 정보 조회
    const user = await usersCollection.findOne({ userId });
    if (!user) {
      return NextResponse.json({ error: "유저를 찾을 수 없습니다." }, { status: 404 });
    }

    // 랭킹 정보 조회
    const ranking = await rankingCollection.findOne({ userId }) || { score: 0, solvedProblems: [] };

    // 결과 구성
    const userInfo = {
      name: user.name,
      id: user.userId,
      email: user.email,
      isStudent: !!user.grade, // 학년 정보가 있으면 학생으로 판단
      grade: user.grade || null,
      studentNumber: user.studentId || null,
      score: ranking.score,
      solvedProblems: ranking.solvedProblems,
    };

    return NextResponse.json(userInfo);
  } catch (error) {
    console.error("유저 정보 조회 오류:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
