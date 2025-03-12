import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Bot, Database, LineChart } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Concepts - Ctrl V Programming Club",
  description: "Learn about artificial intelligence concepts with Ctrl V Programming Club",
}

export default function AIPage() {
  const aiTopics = [
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "머신러닝을 이용한 자체 인공지능 제작.",
      icon: <LineChart className="h-10 w-10" />,
      href: "/ai/machine-learning",
    },
    {
      id: "ai-math",
      title: "AI Math",
      description: "인공지능에 활용되는 기술의 원리와 수학.",
      icon: <Brain className="h-10 w-10" />,
      href: "/ai/ai-math",
    },
    {
      id: "llm",
      title: "Large Language Model",
      description: "LLM을 이용한 챗봇 제작하기.",
      icon: <Bot className="h-10 w-10" />,
      href: "/ai/llm",
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "데이터를 저장하기위한 데이터베이스 강의.",
      icon: <Database className="h-10 w-10" />,
      href: "/ai/data-science",
    },
  ]


  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Artificial Intelligence Concepts
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          현시대 최고의 기술, 인공지능.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {aiTopics.map((topic) => (
          <Card key={topic.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="mb-2 text-primary">{topic.icon}</div>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={topic.href} className="w-full">
                <Button variant="outline" className="w-full justify-between">
                  Explore <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

