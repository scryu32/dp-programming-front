"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { JwtPayload } from "jsonwebtoken";

interface IfElseProblem1Props {
  cookieData: string | JwtPayload
}
export function QuestionForm({ cookieData }: IfElseProblem1Props) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, cookieData }),
      })

      if (res.ok) {
        toast({
          title: "질문이 등록되었습니다",
        })
        setFormData({ title: "", content: "" })
      } else {
        toast({
          title: "오류 발생",
          description: "질문 등록에 실패했습니다.",
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "오류 발생",
        description: "네트워크 오류가 발생했습니다.",
      })
    } finally {
      setIsSubmitting(false)
      window.location.href = `/questions`;
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>질문하기</CardTitle>
        <CardDescription>프로그래밍에 관한 질문을 자유롭게 작성해주세요.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">제목</Label>
            <Input
              id="title"
              name="title"
              placeholder="질문 제목을 입력하세요"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">내용</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="질문 내용을 자세히 작성해주세요"
              rows={5}
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "제출 중..." : "질문 등록하기"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
