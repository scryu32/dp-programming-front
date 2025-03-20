import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BeginnerProblemsPage() {
  // 카테고리별 문제 데이터
  const categories = [
    {
      id: "variables",
      name: "변수와 자료형 기초",
      description: "프로그래밍의 기본이 되는 변수 선언과 자료형에 대해 학습합니다.",
      problems: [
        {
          id: 1,
          title: "변수 계산하기",
          description: "변수에 할당된 값을 계산하는 방법을 학습합니다.",
          difficulty: "Easy",
          link: "/problems/beginner/variable-1",
        },
        {
          id: 2,
          title: "자료형 기초",
          description: "자료형에 대해 이해했는지 확인합니다.",
          difficulty: "Easy",
          link: "/problems/beginner/variable-2",
        },
        {
          id: 3,
          title: "문자 입출력",
          description: "문자 입출력을 이해할수 있는지 확인합니다.",
          difficulty: "Easy",
          link: "https://codeup.kr/problem.php?id=6009",
        },
        {
          id: 4,
          title: "문자 입출력 2",
          description: "문자 입출력을 응용할수 있는지 확인합니다.",
          difficulty: "Medium",
          link: "https://codeup.kr/problem.php?id=6019",
        },
        {
          id: 5,
          title: "입출력 덧셈",
          description: "자료형과 입출력을 이해했는지 확인합니다.",
          difficulty: "Easy",
          link: "https://codeup.kr/problem.php?id=6025",
        },
      ],
    },
    {
      id: "conditionals",
      name: "조건문 (if-else)",
      description: "조건에 따라 다른 코드를 실행하는 조건문의 기본 개념을 학습합니다.",
      problems: [
        {
          id: 7,
          title: "기본 if-else 구문",
          description: "기본적인 if-else 구문을 사용하여 조건에 따라 다른 코드를 실행합니다.",
          difficulty: "Easy",
          link: "/problems/beginner/if-else-1",
        },
        {
          id: 8,
          title: "조건문 응용",
          description: "if-else문을 응용하여 복잡한 알고리즘을 이해합니다.",
          difficulty: "Medium",
          link: "/problems/beginner/if-else-2",
        },
        {
          id: 9,
          title: "조건문 응용 2",
          description: "실생활에 if-else문을 적용시킵니다.",
          difficulty: "Medium",
          link: "/problems/beginner/if-else-3",
        },
      ],
    },
    {
      id: "loops",
      name: "반복문 (for, while)",
      description: "코드를 반복적으로 실행하는 반복문의 다양한 형태를 학습합니다.",
      problems: [
        {
          id: 10,
          title: "기본 for 반복문",
          description: "기본적인 for 반복문을 사용하여 코드를 반복 실행합니다.",
          difficulty: "Easy",
          link: "https://example.com/problems/basic-for-loop",
        },
        {
          id: 11,
          title: "while 반복문",
          description: "while 반복문을 사용하여 조건이 참인 동안 코드를 반복합니다.",
          difficulty: "Easy",
          link: "https://example.com/problems/while-loop",
        },
        {
          id: 12,
          title: "중첩 반복문",
          description: "반복문 안에 반복문을 사용하는 중첩 반복문을 학습합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/nested-loops",
        },
        {
          id: 13,
          title: "break와 continue",
          description: "반복문을 제어하는 break와 continue 문을 활용합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/break-continue",
        },
        {
          id: 14,
          title: "무한 루프와 탈출 조건",
          description: "무한 루프를 만들고 적절한 탈출 조건을 설정하는 방법을 배웁니다.",
          difficulty: "Hard",
          link: "https://example.com/problems/infinite-loops",
        },
      ],
    },
    {
      id: "arrays",
      name: "배열 다루기",
      description: "여러 데이터를 하나의 변수에 저장하는 배열의 기본 개념과 조작 방법을 학습합니다.",
      problems: [
        {
          id: 15,
          title: "배열 생성과 접근",
          description: "배열을 생성하고 인덱스를 통해 요소에 접근하는 방법을 배웁니다.",
          difficulty: "Easy",
          link: "https://example.com/problems/array-creation",
        },
        {
          id: 16,
          title: "배열 메소드",
          description: "push, pop, shift, unshift 등 기본적인 배열 메소드를 활용합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/array-methods",
        },
        {
          id: 17,
          title: "배열 순회하기",
          description: "반복문을 사용하여 배열의 모든 요소를 순회하는 방법을 학습합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/array-iteration",
        },
      ],
    },
    {
      id: "functions",
      name: "함수",
      description: "코드를 재사용 가능한 블록으로 분리하는 함수의 개념과 활용법을 학습합니다.",
      problems: [
        {
          id: 15,
          title: "함수 선언과 호출",
          description: "기본적인 함수를 선언하고 호출하는 방법을 배웁니다.",
          difficulty: "Easy",
          link: "https://example.com/problems/function-basics",
        },
        {
          id: 16,
          title: "매개변수와 반환값",
          description: "함수에 매개변수를 전달하고 값을 반환받는 방법을 학습합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/parameters-return",
        },
        {
          id: 17,
          title: "화살표 함수",
          description: "간결한 화살표 함수 문법을 사용하여 함수를 작성합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/arrow-functions",
        },
        {
          id: 18,
          title: "콜백 함수",
          description: "함수를 다른 함수의 인자로 전달하는 콜백 패턴을 학습합니다.",
          difficulty: "Hard",
          link: "https://example.com/problems/callback-functions",
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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">기초 문법 연습 문제</h1>
        <p className="text-muted-foreground">
          프로그래밍 기초 문법을 연습할 수 있는 문제들입니다. 카테고리별로 문제를 풀어보세요.
        </p>
      </div>

      <Tabs defaultValue="variables" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
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

