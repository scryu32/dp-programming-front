// app/variable-problem-1/VariableProblem1.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { JwtPayload } from "jsonwebtoken";


interface VariableProblem1Props {
  cookieData: string | JwtPayload
}

export default function VariableProblem1({ cookieData }: VariableProblem1Props) {
  const [answers, setAnswers] = useState(["", "", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const correctAnswers = ["8", "15", "1", "2", "125"]

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 정답 체크
      const allCorrect = answers.every((answer, index) => answer.trim() === correctAnswers[index])
      setIsCorrect(allCorrect)
      setShowFeedback(true)

      // API 호출
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemName: "variable-1",
          answers: answers,
          cookieData, // 쿠키 데이터를 함께 전송할 수도 있음
        }),
      })

      if (!response.ok) {
        throw new Error("제출 중 오류가 발생했습니다.")
      }

      setSubmitStatus("success")
      setStatusMessage("정답이 성공적으로 제출되었습니다.")
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("제출 중 문제가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">변수 연산 문제 #1</CardTitle>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Easy
            </Badge>
          </div>
          <CardDescription>다음 코드의 출력값을 예측해보세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 p-4 rounded-md font-mono text-sm">
            <pre>{`x = 5
y = 3
z = x + y
print(z)
print(x * y)
print(x // y)
print(x % y)
print(x ** y)`}</pre>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">문제 설명</h3>
            <p>
              위 코드는 변수 x와 y를 선언하고 다양한 산술 연산을 수행합니다. 각 print 문의 출력값을 순서대로 예측해보세요.
            </p>
          </div>

          {submitStatus !== "idle" && (
            <Alert
              className={`mt-4 ${submitStatus === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}
            >
              {submitStatus === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <AlertTitle>{submitStatus === "success" ? "성공!" : "오류!"}</AlertTitle>
              <AlertDescription>{statusMessage}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-4">
              {[
                "print(z)의 출력값",
                "print(x * y)의 출력값",
                "print(x // y)의 출력값",
                "print(x % y)의 출력값",
                "print(x ** y)의 출력값",
              ].map((label, index) => (
                <div key={index} className="grid gap-2">
                  <Label htmlFor={`answer-${index}`}>{label}</Label>
                  <Input
                    id={`answer-${index}`}
                    value={answers[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder="정답을 입력하세요"
                  />
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "제출 중..." : "정답 제출하기"}
            </Button>
          </form>

          {showFeedback && (
            <div
              className={`mt-6 p-4 rounded-md ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
            >
              <h3 className={`font-semibold mb-2 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                {isCorrect ? "정답입니다! 🎉" : "틀렸습니다. 다시 시도해보세요."}
              </h3>
              {!isCorrect && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600">힌트: 파이썬의 기본 산술 연산자를 생각해보세요.</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center w-full mt-1">
          <Button
            asChild
            className="px-4 py-2 rounded-md border text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            <a href="/problems/beginner">돌아가기</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
