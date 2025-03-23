"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

interface QuestionItem {
  question: {
    qId: number
    name: string
    title: string
    content: string
  }
}

export default function QuestionList() {
  const [questions, setQuestions] = useState<QuestionItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/question/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setQuestions(data.data)
        } else {
          throw new Error("질문 데이터를 불러오지 못했습니다.")
        }
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p>로딩중...</p>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">최근 질문</h2>
      </div>

      {questions.map((item) => {
        const { qId, name, title, content } = item.question
        return (
          <Card key={qId}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>{name ? name.charAt(0) : "?"}</AvatarFallback>
                    </Avatar>
                    <span>{name}</span>
                    <span>•</span>
                    {/* 날짜가 없는 경우 기본 텍스트 사용 */}
                    <span>날짜 없음</span>
                  </CardDescription>
                </div>
                {/* 상태가 없으므로 기본적으로 답변 대기중 처리 */}
                <Badge variant="outline">답변 대기중</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {/* 답변 수가 없으므로 0 기본값 */}
                  <span>0</span>
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Link href={`/questions/${qId}`}>
                  답변 보기
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
