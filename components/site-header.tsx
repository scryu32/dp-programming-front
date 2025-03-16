import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"
import { LogIn, UserPlus } from "lucide-react"
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

// JWT 토큰을 쿠키에서 검사하는 함수
export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  try {
    // JWT 검증 및 디코딩
    if (token) {
      const user = jwt.verify(token, jwtSecret) as JwtPayload;
      return user; // 인증된 사용자 반환
    }
    return null; // 토큰 없으면 로그인 안 된 상태
  } catch (error) {
    return null; // 오류 발생 시 로그인 안 된 상태
  }
}

export default async function SiteHeader() {
  const user = await getUserFromCookie(); // 로그인 상태 체크

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Ctrl V</span>
          </Link>
          <div className="hidden md:flex">
            <MainNav />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* 로그인 상태에 따라 버튼을 다르게 표시 */}
          {user ? (
            <Link href="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link href="/login">
                <Button variant="outline" size="sm" className="gap-1">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="gap-1">
                  <UserPlus className="h-4 w-4" />
                  Register
                </Button>
              </Link>
            </div>
          )}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
