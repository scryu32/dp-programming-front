import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

interface SolvedProblemsProps {
  solvedProblems: string[]
}

const ALL_PROBLEMS = [
  { id: "variable-1", name: "변수 기초 1" },
  { id: "variable-2", name: "변수 기초 2" },
  { id: "if-else-1", name: "조건문 기초 1" },
  { id: "if-else-2", name: "조건문 기초 2" },
  { id: "if-else-3", name: "조건문 기초 3" },
  { id: "loops-1", name: "반복문 기초 1" },
  { id: "loops-2", name: "반복문 기초 2" },
  { id: "loops-3", name: "중첩 반복문" }
]

export function SolvedProblems({ solvedProblems }: SolvedProblemsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">해결한 문제</CardTitle>
        <CardDescription>지금까지 해결한 프로그래밍 문제 목록입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[400px] overflow-y-auto pr-2">
          <div className="space-y-4">
            {ALL_PROBLEMS.map((problem) => {
              const isSolved = solvedProblems.includes(problem.id)

              return (
                <div
                  key={problem.id}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    isSolved
                      ? "border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900"
                      : "border-muted bg-muted/20"
                  }`}
                >
                  <span className="font-medium">{problem.name}</span>
                  {isSolved ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              )
            })}

            {solvedProblems.length === 0 && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <XCircle className="h-12 w-12 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">아직 해결한 문제가 없습니다</h3>
                <p className="text-sm text-muted-foreground mt-1">문제를 풀고 실력을 향상시켜 보세요!</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}