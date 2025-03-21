import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export default async function HeroSection() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  let user = null;
  try {
    if (token) {
      user = jwt.verify(token, jwtSecret) as JwtPayload;
    }
  } catch (error) {
    // Handle error if JWT verification fails
    user = null;
  }
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to <span className="text-primary">Ctrl V</span> Programming Club
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl pt-2">
              대평고등학교 최고의 프로그래밍 동아리, Ctrl V에 오신것을 환영합니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {user?(
            <Link href="/dashboard">
              <Button size="lg">Dashboard</Button>
            </Link>):(
              <Link href="/register">
              <Button size="lg">Register</Button>
            </Link>)}
            
            {user?(
            <Link href="/learn">
              <Button size="lg" variant="outline">
                Start Learning
              </Button>
            </Link>):(
            <Link href="/login">
              <Button size="lg" variant="outline">Login</Button>
            </Link>)}
          </div>
        </div>
      </div>
    </section>
  )
}

