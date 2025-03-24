"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { QuestionDetail } from "@/components/question-detail"
import { JwtPayload } from "jsonwebtoken";

interface Answer {
  id: number
  author: string
  content: string
  date: string
}

interface Question {
  id: number
  title: string
  author: string
  date: string
  content: string
  answers: Answer[]
}

interface QuestionDetailClientProps {
  id: string
  initialQuestion: Question
  cookieData: string | JwtPayload
}


export default function QuestionDetailClient({ id, initialQuestion, cookieData }: QuestionDetailClientProps) {
  const router = useRouter()
  const [question, setQuestion] = useState(initialQuestion)

  const handleBack = () => {
    router.push("/questions")
  }

  return (
    <QuestionDetail
      id={question.id}
      title={question.title}
      author={question.author}
      date={question.date}
      content={question.content}
      answers={question.answers}
      onBack={handleBack}
      cookieData={cookieData}
    />
  )
}

