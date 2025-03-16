import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in .env");
  }

  try {
    // JWT 검증 및 디코딩
    const user = jwt.verify(token, jwtSecret);
    return user;
  } catch (error) {
    redirect("/login");
  }
}
