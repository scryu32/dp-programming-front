"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, BookOpen, Code, Brain, Trophy, LogIn, UserPlus } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="h-4 w-4 mr-2" />,
      active: pathname === "/",
    },
    {
      href: "/learn",
      label: "Learn",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
      active: pathname === "/learn" || pathname.startsWith("/learn/"),
    },
    {
      href: "/problems",
      label: "Problems",
      icon: <Code className="h-4 w-4 mr-2" />,
      active: pathname === "/problems" || pathname.startsWith("/problems/"),
    },
    {
      href: "/ai",
      label: "AI Concepts",
      icon: <Brain className="h-4 w-4 mr-2" />,
      active: pathname === "/ai" || pathname.startsWith("/ai/"),
    },
    {
      href: "/competitions",
      label: "Competitions",
      icon: <Trophy className="h-4 w-4 mr-2" />,
      active: pathname === "/competitions",
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col gap-6 py-6">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="font-bold text-xl">Ctrl V</span>
          </Link>
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {route.icon}
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 mt-auto">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full justify-start gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link href="/register" onClick={() => setOpen(false)}>
              <Button className="w-full justify-start gap-2">
                <UserPlus className="h-4 w-4" />
                Register
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

