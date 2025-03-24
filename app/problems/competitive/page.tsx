import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompetitiveProblemsPage() {
  // 카테고리별 문제 데이터
  const categories = [
    {
      id: "graph-algorithms",
      name: "그래프 알고리즘",
      description: "복잡한 그래프 문제를 해결하기 위한 고급 알고리즘을 학습합니다.",
      problems: [
        {
          id: 1,
          title: "최단 경로 알고리즘",
          description: "다익스트라, 벨만-포드, 플로이드-워셜 알고리즘을 구현하고 비교합니다.",
          difficulty: "Expert",
          link: "https://chatgpt.com/",
        },
        {
          id: 2,
          title: "최소 신장 트리",
          description: "크루스칼과 프림 알고리즘을 이용한 최소 신장 트리 구현 방법을 배웁니다.",
          difficulty: "Expert",
          link: "https://chatgpt.com/",
        },
        {
          id: 3,
          title: "네트워크 플로우",
          description: "포드-풀커슨, 에드몬드-카프 알고리즘을 이용한 최대 유량 문제를 해결합니다.",
          difficulty: "Expert+",
          link: "https://chatgpt.com/",
        },
      ],
    },
    {
      id: "advanced-techniques",
      name: "고급 기법",
      description: "경쟁 프로그래밍에서 자주 사용되는 고급 알고리즘 기법을 학습합니다.",
      problems: [
        {
          id: 4,
          title: "세그먼트 트리",
          description: "구간 쿼리를 효율적으로 처리하는 세그먼트 트리를 구현합니다.",
          difficulty: "Expert",
          link: "https://chatgpt.com/",
        },
        {
          id: 5,
          title: "트라이 자료구조",
          description: "문자열 검색을 위한 트라이 자료구조를 구현하고 활용합니다.",
          difficulty: "Expert",
          link: "https://chatgpt.com/",
        },
        {
          id: 6,
          title: "분할 정복 최적화",
          description: "분할 정복 알고리즘의 최적화 기법과 응용 방법을 학습합니다.",
          difficulty: "Expert",
          link: "https://chatgpt.com/",
        },
        {
          id: 7,
          title: "동적 계획법 최적화",
          description: "Knuth 최적화, 컨벡스 헐 트릭 등 고급 DP 최적화 기법을 배웁니다.",
          difficulty: "Expert+",
          link: "https://chatgpt.com/",
        },
      ],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Hard":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "Very Hard":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "Expert":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Expert+":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">경쟁 프로그래밍 문제</h1>
        <p className="text-muted-foreground">
          심화 알고리즘과 연산을 이용한 초고난도 문제들입니다. 알고리즘 대회와 코딩 테스트 준비에 도움이 됩니다.
        </p>
      </div>

      <Tabs defaultValue="graph-algorithms" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
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

