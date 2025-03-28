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


interface IfElseProblem1Props {
  cookieData: string | JwtPayload
}

export default function IfElseProblem1({ cookieData }: IfElseProblem1Props) {
  const [answers, setAnswers] = useState(["", "", "", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const correctAnswers = ["13", "65", "else", "150", "else", "and"]

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
          problemName: "if-else-3",
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
            <CardTitle className="text-2xl">조건문 활용 #3</CardTitle>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
              Medium
            </Badge>
          </div>
          <CardDescription>다음 코드의 출력값을 예측해보세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 p-4 rounded-md font-mono text-sm">
            <pre>{`age = int(input("나이를 입력하세요: "))
height = int(input("키를 입력하세요: "))

age_jogun = False
height_jogun = False

if age < [   ]:
  age_jogun = False
elif age > [   ]:
  age_jogun = False
[   ]:
  age_jogun = True

if height < [   ]:
  height_jogun = False
[   ]:
  height_jogun = True

if height_jogun == True [   ] age_jogun == True:
  print("탑승 가능")
else:
  print("탑승 불가능")

`}</pre>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">문제 설명</h3>
            <p>
              어떤 롤러코스터는 키 150cm, 나이가 13 이상 65 이하인 사람만 탑승 가능합니다. 이때 빈칸에 들어갈 말로 올바른것은?
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
                "첫번째 빈칸에 들어갈 단어로 알맞은것은?",
                "두번째 빈칸에 들어갈 단어로 알맞은것은?",
                "세번째 빈칸에 들어갈 단어로 알맞은것은?",
                "네번째 빈칸에 들어갈 단어로 알맞은것은?",
                "다섯번째 빈칸에 들어갈 단어로 알맞은것은?",
                "여섯번째 빈칸에 들어갈 단어로 알맞은것은?",
              ].map((label, index) => (
                <div key={index} className="grid gap-2">
                  <Label htmlFor={`answer-${index}`}>{label}</Label>
                  <Input
                    id={`answer-${index}`}
                    value={answers[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder="정답을 입력하세요"
                    autoComplete="off"
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
                  <p className="text-sm text-gray-600">힌트: if문과 else문이 언제 어떻게 작동하는지 다시한번 생각해보세요.</p>
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
