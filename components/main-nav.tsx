"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Code, BookOpen, Brain, Trophy, Home } from "lucide-react"

export default function MainNav() {
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
      href: "/ranking",
      label: "Ranking",
      icon: <Trophy className="h-4 w-4 mr-2" />,
      active: pathname === "/ranking",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          {route.icon}
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

