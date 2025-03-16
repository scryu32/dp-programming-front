import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import { hashPassword } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { name, userId, email, grade, studentId, password } = await req.json();
    
    if (!userId || !password) {
      return NextResponse.json({ error: "아이디와 비밀번호는 필수입니다." }, { status: 400 });
    }

    const db = (await connectToDatabase()).db("forum");
    const usersCollection = db.collection("users");

    // 아이디 중복 체크
    const existingUser = await usersCollection.findOne({ userId });
    if (existingUser) {
      return NextResponse.json({ error: "이미 존재하는 아이디입니다." }, { status: 400 });
    }

    // 비밀번호 해싱
    const hashedPassword = await hashPassword(password);

    // 데이터 저장
    await usersCollection.insertOne({
      name,
      userId,
      email,
      grade,
      studentId,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "회원가입 성공" }, { status: 201 });

  } catch (error) {
    console.error("회원가입 오류:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
