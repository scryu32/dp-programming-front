"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"
import { LogIn, UserPlus } from "lucide-react"
import { JwtPayload } from "jsonwebtoken";

export default function HeadCSR({ user }: { user: JwtPayload | null }) {
  return (
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
  )
}
