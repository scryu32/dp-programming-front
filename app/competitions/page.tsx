"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal, Award } from "lucide-react"

interface RankingItem {
  ranking: {
    userId: string
    score: number
    solvedProblems: string[]
  }
  user: {
    name: string
    userId: string
    email?: string
    grade?: string
    studentId?: string
  } | null
}

export default function CompetitionsPage() {
  const [rankingData, setRankingData] = useState<RankingItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/ranking")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRankingData(data.data)
        } else {
          setError("데이터 로드 실패")
        }
      })
      .catch((err) => {
        console.error(err)
        setError("데이터 로드 중 오류 발생")
      })
      .finally(() => setLoading(false))
  }, [])

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />
      default:
        return <span className="font-medium">{rank}</span>
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-2xl">문제풀이 순위</CardTitle>
          <CardDescription className="text-primary-foreground/80">상위 10명의 코딩점수 순위입니다</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-16 text-center">순위</TableHead>
                <TableHead>이름</TableHead>
                <TableHead className="text-right">점수</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rankingData.map((item, index) => {
                const userName = item.user ? item.user.name : "익명"
                const score = item.ranking.score
                return (
                  <TableRow key={item.ranking.userId} className={index < 3 ? "font-medium" : ""}>
                    <TableCell className="text-center">
                      <div className="flex justify-center items-center">{getRankIcon(index + 1)}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {userName}
                        {index === 0 && <Award className="h-4 w-4 text-yellow-500" />}
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono">{score}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
