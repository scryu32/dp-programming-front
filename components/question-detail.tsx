"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

interface Answer {
  id: number
  author: string
  content: string
}

interface QuestionDetailProps {
  id: number
  title: string
  author: string
  content: string
  answers: Answer[]
  onBack: () => void
}

export function QuestionDetail({
  id,
  title,
  author,
  content,
  answers,
  onBack,
}: QuestionDetailProps) {
  const { toast } = useToast()
  const [answerText, setAnswerText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [answersList, setAnswersList] = useState<Answer[]>(answers)

  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!answerText.trim()) return

    setIsSubmitting(true)

    // 제출 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newAnswer: Answer = {
      id: Date.now(),
      author: "현재 사용자",
      content: answerText,
    }

    setAnswersList([...answersList, newAnswer])
    setAnswerText("")
    setIsSubmitting(false)

    toast({
      title: "답변이 등록되었습니다",
      description: "질문자에게 알림이 전송됩니다.",
    })
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" className="flex items-center gap-2" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
        <span>질문 목록으로</span>
      </Button>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Avatar className="h-6 w-6">
                  <AvatarFallback>{author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{author}</span>
                <span>•</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{content}</p>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <span>답변 {answersList.length}개</span>
        </h3>

        {answersList.length > 0 ? (
          answersList.map((answer) => (
            <Card key={answer.id}>
              <CardHeader>
                <CardDescription className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>{answer.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{answer.author}</span>
                  <span>•</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{answer.content}</p>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="py-6">
              <p className="text-center text-muted-foreground">아직 답변이 없습니다. 첫 번째 답변을 작성해보세요!</p>
            </CardContent>
          </Card>
        )}
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">답변 작성하기</h3>
        <form onSubmit={handleSubmitAnswer}>
          <Textarea
            placeholder="답변을 작성해주세요..."
            rows={5}
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            required
          />
          <div className="flex justify-end mt-4">
            <Button type="submit" disabled={isSubmitting || !answerText.trim()}>
              {isSubmitting ? "제출 중..." : "답변 등록하기"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

