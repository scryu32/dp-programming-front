import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code } from "lucide-react"

export const metadata: Metadata = {
  title: "Programming Problems - Ctrl V Programming Club",
  description: "Practice programming with curated problems from Ctrl V Programming Club",
}

export default function ProblemsPage() {
  const problemCategories = [
    {
      id: "beginner",
      title: "Beginner Problems",
      description: "문법 연습을 위한 기초문제",
      count: 15,
      href: "/problems/beginner",
    },
    {
      id: "intermediate",
      title: "Intermediate Problems",
      description: "배운 내용을 토대로 문법을 응용하는 중난도 문제",
      count: 12,
      href: "/problems/intermediate",
    },
    {
      id: "advanced",
      title: "Advanced Problems",
      description: "고급 알고리즘을 이용한 고난도 응용 문제",
      count: 8,
      href: "/problems/advanced",
    },
    {
      id: "competitive",
      title: "Competitive Programming",
      description: "심화 알고리즘과 연산을 이용한 초고난도 문제.",
      count: 10,
      href: "/problems/competitive",
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Programming Problems</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          프로그래밍 문제를 풀고 자신의 실력을 키워나가세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {problemCategories.map((category) => (
          <Card key={category.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline">{category.count} Problems</Badge>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={category.href} className="w-full">
                <Button variant="outline" className="w-full justify-between">
                  View Problems <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

