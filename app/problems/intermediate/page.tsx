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
          title: "복합 자료형 활용",
          description: "객체와 배열을 조합한 복합 자료형을 다루는 방법을 배웁니다.",
          difficulty: "Easy",
          link: "https://example.com/problems/complex-data-types",
        },
        {
          id: 2,
          title: "형변환 심화",
          description: "다양한 상황에서의 형변환과 주의사항을 학습합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/type-conversion-advanced",
        },
        {
          id: 3,
          title: "스코프와 호이스팅",
          description: "변수의 스코프와 호이스팅 개념을 이해하고 활용합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/scope-hoisting",
        },
      ],
    },
    {
      id: "conditionals",
      name: "조건문 (if-else)",
      description: "조건에 따라 다른 코드를 실행하는 조건문의 기본 개념을 학습합니다.",
      problems: [
        {
          id: 4,
          title: "중첩 조건문 최적화",
          description: "복잡한 중첩 조건문을 간결하게 작성하는 방법을 배웁니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/nested-conditionals",
        },
        {
          id: 5,
          title: "스위치 케이스 활용",
          description: "switch-case 구문을 효과적으로 활용하는 방법을 학습합니다.",
          difficulty: "Easy",
          link: "https://example.com/problems/switch-case",
        },
        {
          id: 6,
          title: "조건부 연산자 체이닝",
          description: "여러 조건부 연산자를 연결하여 복잡한 조건을 처리합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/ternary-chaining",
        },
      ],
    },
    {
      id: "loops",
      name: "반복문 (for, while)",
      description: "코드를 반복적으로 실행하는 반복문의 다양한 형태를 학습합니다.",
      problems: [
        {
          id: 7,
          title: "반복문 최적화",
          description: "반복문의 성능을 개선하는 다양한 기법을 배웁니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/loop-optimization",
        },
        {
          id: 8,
          title: "복잡한 중첩 반복문",
          description: "여러 단계의 중첩 반복문을 활용한 문제 해결 방법을 학습합니다.",
          difficulty: "Hard",
          link: "https://example.com/problems/complex-nested-loops",
        },
        {
          id: 9,
          title: "forEach와 map 활용",
          description: "배열 메소드를 활용한 반복 처리 방법을 배웁니다.",
          difficulty: "Easy",
          link: "https://example.com/problems/foreach-map",
        },
      ],
    },
    {
      id: "arrays",
      name: "배열 다루기",
      description: "여러 데이터를 하나의 변수에 저장하는 배열의 기본 개념과 조작 방법을 학습합니다.",
      problems: [
        {
          id: 10,
          title: "배열 메소드 체이닝",
          description: "여러 배열 메소드를 연결하여 복잡한 데이터 처리를 수행합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/array-method-chaining",
        },
        {
          id: 11,
          title: "다차원 배열",
          description: "2차원 이상의 배열을 생성하고 조작하는 방법을 학습합니다.",
          difficulty: "Medium",
          link: "https://example.com/problems/multidimensional-arrays",
        },
        {
          id: 12,
          title: "배열 구조 분해",
          description: "배열 구조 분해 할당을 활용한 효율적인 코드 작성법을 배웁니다.",
          difficulty: "Easy",
          link: "https://example.com/problems/array-destructuring",
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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">중급 프로그래밍 문제</h1>
        <p className="text-muted-foreground">
          배운 내용을 토대로 문법을 응용하는 중난도 문제들입니다. 카테고리별로 문제를 풀어보세요.
        </p>
      </div>

      <Tabs defaultValue="variables" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
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

