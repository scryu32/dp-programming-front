import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdvancedProblemsPage() {
  // 카테고리별 문제 데이터
  const categories = [
    {
      id: "algorithms",
      name: "고급 알고리즘",
      description: "효율적인 문제 해결을 위한 고급 알고리즘 기법을 학습합니다.",
      problems: [
        {
          id: 1,
          title: "분할 정복",
          description: "문제를 작은 부분으로 나누어 해결하는 분할 정복 알고리즘을 구현합니다.",
          difficulty: "Hard",
          link: "https://example.com/problems/divide-and-conquer",
        },
        {
          id: 2,
          title: "동적 프로그래밍",
          description: "중복 계산을 피하고 최적해를 찾는 동적 프로그래밍 기법을 학습합니다.",
          difficulty: "Very Hard",
          link: "https://example.com/problems/dynamic-programming",
        },
      ],
    },
    {
      id: "data-structures",
      name: "자료구조",
      description: "효율적인 데이터 관리를 위한 고급 자료구조를 학습합니다.",
      problems: [
        {
          id: 3,
          title: "트리 구조",
          description: "이진 트리, 이진 검색 트리 등 트리 자료구조를 구현하고 활용합니다.",
          difficulty: "Hard",
          link: "https://example.com/problems/trees",
        },
        {
          id: 4,
          title: "그래프 알고리즘",
          description: "그래프 표현과 탐색, 최단 경로 알고리즘을 학습합니다.",
          difficulty: "Very Hard",
          link: "https://example.com/problems/graphs",
        },
        {
          id: 5,
          title: "해시 테이블",
          description: "해시 함수와 충돌 해결 방법을 이해하고 해시 테이블을 구현합니다.",
          difficulty: "Hard",
          link: "https://example.com/problems/hash-tables",
        },
      ],
    },
    {
      id: "optimization",
      name: "최적화 기법",
      description: "알고리즘과 코드의 성능을 향상시키는 다양한 최적화 기법을 학습합니다.",
      problems: [
        {
          id: 6,
          title: "시간 복잡도 분석",
          description: "알고리즘의 시간 복잡도를 분석하고 개선하는 방법을 배웁니다.",
          difficulty: "Hard",
          link: "https://example.com/problems/time-complexity",
        },
        {
          id: 7,
          title: "공간 복잡도 최적화",
          description: "메모리 사용을 최소화하는 알고리즘 설계 방법을 학습합니다.",
          difficulty: "Very Hard",
          link: "https://example.com/problems/space-complexity",
        },
        {
          id: 8,
          title: "알고리즘 성능 비교",
          description: "다양한 알고리즘의 성능을 비교하고 최적의 알고리즘을 선택하는 방법을 배웁니다.",
          difficulty: "Hard",
          link: "https://example.com/problems/algorithm-comparison",
        },
      ],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Hard":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "Very Hard":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "Expert":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">고급 프로그래밍 문제</h1>
        <p className="text-muted-foreground">
          고급 알고리즘을 이용한 고난도 응용 문제들입니다. 알고리즘적 사고력을 기를 수 있는 문제들을 풀어보세요.
        </p>
      </div>

      <Tabs defaultValue="algorithms" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p>{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.problems.map((problem) => (
                <Link href={problem.link} key={problem.id} className="block transition-transform hover:scale-105">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{problem.title}</CardTitle>
                      <CardDescription>{problem.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <Badge className={`${getDifficultyColor(problem.difficulty)}`}>{problem.difficulty}</Badge>
                      <span className="text-sm text-muted-foreground">문제 #{problem.id}</span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

