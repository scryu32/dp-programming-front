"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { QuestionDetail } from "@/components/question-detail"

interface Answer {
  id: number
  author: string
  content: string
  date: string
  likes: number
}

interface Question {
  id: number
  title: string
  author: string
  content: string
  date: string
  status: "pending" | "answered"
  answers: Answer[]
}

interface QuestionDetailClientProps {
  id: string
  initialQuestion: Question
}

export default function QuestionDetailClient({ id, initialQuestion }: QuestionDetailClientProps) {
  const router = useRouter()
  const [question, setQuestion] = useState(initialQuestion)

  // 필요한 경우 추가 데이터 로딩
  useEffect(() => {
    // 예: fetchAdditionalData(id).then(data => updateQuestion(data))
    console.log(`질문 ID: ${id} 클라이언트 컴포넌트에서 로딩됨`)
  }, [id])

  const handleBack = () => {
    router.push("/questions")
  }

  return (
    <QuestionDetail
      id={question.id}
      title={question.title}
      author={question.author}
      content={question.content}
      date={question.date}
      status={question.status}
      answers={question.answers}
      onBack={handleBack}
    />
  )
}

