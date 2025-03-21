import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IntermediateProblemsPage() {
  // 카테고리별 문제 데이터
  const categories = [
    {
      id: "variables",
      name: "변수와 자료형 기초",
      description: "프로그래밍의 기본이 되는 변수 선언과 자료형에 대해 학습합니다.",
      problems: [
        {
          id: 1,
          title: "연월일 입력받아 순서 바꿔 출력하기",
          description: "split 문법의 개념을 이해합니다.",
          difficulty: "Medium",
          link: "https://codeup.kr/problem.php?id=6019",
        },
        {
          id: 2,
          title: "실수 합 계산",
          description: "*'부동 소수점 오류'에 대해 이해합니다.",
          difficulty: "Medium",
          link: "https://codeup.kr/problem.php?id=6026",
        },
        {
          id: 3,
          title: "정수계산 문제",
          description: "정수 계산과 소수점에 대해 이해합니다.",
          difficulty: "Easy",
          link: "https://codeup.kr/problem.php?id=6044",
        },
      ],
    },
    {
      id: "loops",
      name: "반복문 (for, while)",
      description: "코드를 반복적으로 실행하는 반복문의 다양한 형태를 학습합니다.",
      problems: [
        {
          id: 4,
          title: "언제까지 더해야 할까?",
          description: "각 상황에 어떤 반복문을 사용할지 선택해야합니다.",
          difficulty: "Medium",
          link: "https://codeup.kr/problem.php?id=6079",
        },
        {
          id: 5,
          title: "수열의 합",
          description: "반복문을 이용하여 수열의 합을 계산합니다.",
          difficulty: "Easy",
          link: "https://codeup.kr/problem.php?id=1378",
        },
        {
          id: 6,
          title: "마름모 출력하기",
          description: "배열 메소드를 활용한 반복 처리 방법을 배웁니다.",
          difficulty: "Medium",
          link: "https://codeup.kr/problem.php?id=1371",
        },
      ],
    },
    {
      id: "basic-comprehensive",
      name: "기초 종합",
      description: "기초 문법을 응용하여 복잡한 프로그램을 제작합니다.",
      problems: [
        {
          id: 7,
          title: " 3 6 9 게임",
          description: `end=""문법과 기초 문법을 응용합니다.`,
          difficulty: "Medium",
          link: "https://codeup.kr/problem.php?id=6082",
        },
        {
          id: 8,
          title: "[정올] 홀수의 합 구하기",
          description: "배열과 반복문을 응용합니다.",
          difficulty: "Medium",
          link: "https://codeup.kr/problem.php?id=4021",
        },
        {
          id: 9,
          title: "설탕과자 뽑기",
          description: "2차원 배열과 기초 문법을 이해합니다.",
          difficulty: "Hard",
          link: "https://codeup.kr/problem.php?id=6097",
        },
      ],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Hard":
        return "bg-red-100 text-red-800 hover:bg-red-200"
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
        <h1 className="text-3xl font-bold mb-2">기초 문법 연습 문제</h1>
        <p className="text-muted-foreground">
          프로그래밍 기초 문법을 연습할 수 있는 문제들입니다. 카테고리별로 문제를 풀어보세요.
        </p>
      </div>

      <Tabs defaultValue="variables" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
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

