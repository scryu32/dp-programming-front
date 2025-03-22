import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code } from "lucide-react"
import { getUserFromCookie } from "@/lib/getUserFromCookie";

export const metadata: Metadata = {
  title: "Learn Programming - Ctrl V Programming Club",
  description: "Learn programming fundamentals with Ctrl V Programming Club",
}

export default async function LearnPage() {
  const user = await getUserFromCookie();
  const programmingLanguages = [
    {
      id: "python",
      title: "Python",
      description: "Ctrl V의 기본 수업언어. 간단하고 쉬운 입문자용 언어",
      icon: "🐍",
      href: "/learn/python",
    },
    {
      id: "others",
      title: "Others",
      description: "다른 프로그래밍 언어들은 언제 배워야 할까?",
      icon: "⚙️",
      href: "/learn/others",
    }
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learn Programming</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          프로그래밍 언어의 기본 문법과 개념을 익히세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {programmingLanguages.map((language) => (
          <Card key={language.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="text-4xl mb-2">{language.icon}</div>
              <CardTitle>{language.title}</CardTitle>
              <CardDescription>{language.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={language.href} className="w-full">
                <Button variant="outline" className="w-full justify-between">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center text-center mt-16 mb-8">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Programming Concepts</h2>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          프로그래밍 언어들과 별개로 알아야하는 기본적인 지식
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/learn/variables-and-data-types" className="block">
          <Card className="h-full hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2" />
                Variables & Data Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                변수와 자료형. 컴퓨터가 데이터를 저장하는 방식
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/learn/control-flow" className="block">
          <Card className="h-full hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2" />
                Algorithm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                프로그래밍에서 사용되는 다양한 알고리즘. 사고방식 전환의 기회
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

