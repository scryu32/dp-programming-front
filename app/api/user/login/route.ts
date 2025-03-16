import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import { verifyPassword } from "@/lib/auth";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { userId, password } = await req.json();

    if (!userId || !password) {
      return NextResponse.json(
        { error: "아이디와 비밀번호를 입력하세요." },
        { status: 400 }
      );
    }

    const db = (await connectToDatabase()).db("forum");
    const user = await db.collection("users").findOne({ userId });
    if (!user) {
      return NextResponse.json(
        { error: "아이디 또는 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "아이디 또는 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) throw new Error("JWT_SECRET is not defined in .env");

    // JWT 생성 (예: 1시간 유효)
    const token = jwt.sign(
      { userId: user.userId, email: user.email, id: user._id },
      jwtSecret,
      { expiresIn: "1h" }
    );

    // NextResponse 객체를 만들어 쿠키를 설정
    const response = NextResponse.json(
      { message: "로그인 성공", token },
      { status: 200 }
    );

    // HTTP-only 쿠키로 토큰 설정 (클라이언트 자바스크립트에서 접근 불가)
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 3600, // 1시간
    });

    return response;
  } catch (error) {
    console.error("로그인 오류:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
