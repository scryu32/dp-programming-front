"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface QuestionItem {
  question: {
    qId: number
    name: string
    title: string
    content: string
    date: string // 날짜 필드 추가 (ISO 문자열 등)
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
      .finally(() => {
        setLoading(false)
      })
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
        const { qId, name, title, content, date } = item.question
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
                    <span className="inline-flex items-center text-xs text-gray-500 ml-2 before:content-['•'] before:mr-2 before:text-gray-300">
                      {new Date(date).toLocaleDateString()}
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Link href={`/questions/${qId}`}>답변 보기</Link>
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

