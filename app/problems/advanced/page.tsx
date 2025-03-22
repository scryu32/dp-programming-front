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
          title: "팩토리얼 계산",
          description: "재귀 함수를 이용한 팩토리얼 계산",
          difficulty: "Hard",
          link: "https://codeup.kr/problem.php?id=1912",
        },
        {
          id: 2,
          title: "N-Queen 문제",
          description: "백트래킹 알고리즘을 이용한 고급 문제 풀이",
          difficulty: "Very Hard",
          link: "https://codeup.kr/problem.php?id=3520",
        },
      ],
    },
    {
      id: "math-algorithm",
      name: "수학 알고리즘",
      description: "다양한 수학 알고리즘과 접목해 응용합니다.",
      problems: [
        {
          id: 3,
          title: "피보나치 수열",
          description: "재귀 함수를 이용해 피보나치 수열을 구합니다.",
          difficulty: "Hard",
          link: "https://codeup.kr/problem.php?id=1915",
        },
        {
          id: 4,
          title: "올바른 괄호",
          description: "카탈란 수를 이용한 조합론 문제",
          difficulty: "Very Hard",
          link: "https://codeup.kr/problem.php?id=3129",
        },
        {
          id: 5,
          title: "전자레인지 ",
          description: "고급 조합론 개념 없는 단순한 수학 계산문제",
          difficulty: "Hard",
          link: "https://codeup.kr/problem.php?id=4816",
        },
      ],
    },
    {
      id: "algorithms-2",
      name: "고급 알고리즘 응용",
      description: "효율적인 문제 해결을 위한 고급 알고리즘 기법을 응용합니다.",
      problems: [
        {
          id: 6,
          title: "배낭 문제",
          description: "백트래킹 알고리즘을 응용합니다.",
          difficulty: "Very Hard",
          link: "https://codeup.kr/problem.php?id=3740",
        },
        {
          id: 7,
          title: "성실한 개미",
          description: "2차원 배열을 이용하여 경로를 탐색합니다.",
          difficulty: "Hard",
          link: "https://codeup.kr/problem.php?id=6098",
        },
        {
          id: 8,
          title: "투표",
          description: "난 일단 틀림",
          difficulty: "Very Hard",
          link: "https://codeup.kr/problem.php?id=4721",
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

  const isCodeUpLink = (link: string) => {
    return link.toLowerCase().includes("codeup")
  }

  const isJunOl = (title: string) => {
    return title.toLowerCase().includes("[정올]")
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
                      <div className="flex gap-2">
                        <Badge className={`${getDifficultyColor(problem.difficulty)}`}>{problem.difficulty}</Badge>
                        {isCodeUpLink(problem.link) && (
                          <Badge className="bg-sky-100 text-blue-700 border border-blue-500 hover:bg-sky-200">
                            CodeUp
                          </Badge>
                        )}
                        {isJunOl(problem.title) && (
                          <Badge className="bg-yellow-300 text-yellow-800 border border-yellow-500 hover:bg-yellow-400">
                            정올
                          </Badge>
                        )}
                      </div>
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

