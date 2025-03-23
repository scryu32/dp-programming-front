"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, ThumbsUp } from "lucide-react"
import Link from "next/link"

// 샘플 데이터
const SAMPLE_QUESTIONS = [
  {
    id: 1,
    name: "김학생",
    title: "JavaScript에서 비동기 함수 사용 방법",
    content:
      "JavaScript에서 async/await를 사용할 때 try/catch 구문은 어떻게 활용하는 것이 좋을까요? 예제 코드와 함께 설명해주시면 감사하겠습니다.",
    date: "2023-05-15",
    status: "answered",
    answers: 2,
  },
  {
    id: 2,
    name: "이코딩",
    title: "Python 리스트 컴프리헨션 문법 질문",
    content:
      "Python에서 리스트 컴프리헨션을 사용할 때 중첩 for문을 어떻게 작성하나요? 간단한 예제가 있으면 이해하기 쉬울 것 같습니다.",
    date: "2023-05-10",
    status: "pending",
    answers: 0,
  },
  {
    id: 3,
    name: "박개발",
    title: "HTML/CSS 반응형 레이아웃 구현 방법",
    content:
      "모바일과 데스크톱에서 모두 잘 보이는 반응형 웹사이트를 만들고 싶습니다. 미디어 쿼리를 사용하는 기본적인 방법을 알려주세요.",
    date: "2023-05-05",
    status: "answered",
    answers: 3,
  },
]

export default function QuestionList() {
  const [questions, setQuestions] = useState(SAMPLE_QUESTIONS)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">최근 질문</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            최신순
          </Button>
          <Button variant="outline" size="sm">
            인기순
          </Button>
        </div>
      </div>

      {questions.map((question) => (
        <Card key={question.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{question.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>{question.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{question.name}</span>
                  <span>•</span>
                  <span>{question.date}</span>
                </CardDescription>
              </div>
              <Badge variant={question.status === "answered" ? "default" : "outline"}>
                {question.status === "answered" ? "답변 완료" : "답변 대기중"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">{question.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>{question.answers}</span>
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Link href={`/questions/${question.id}`}>
                답변 보기
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

