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

            <div className="mt-8 p-6 border rounded-lg">
              <h3 className="text-lg font-medium mb-4">문제 풀이 설명</h3>
              <p className="text-muted-foreground mb-4">
                이 섹션에서는 {category.name} 관련 문제를 풀 때 알아야 할 핵심 개념과 팁을 제공합니다.
              </p>
              <div className="prose max-w-none">
                <p>
                  {category.id === "algorithms" &&
                    "고급 알고리즘은 복잡한 문제를 효율적으로 해결하기 위한 전략입니다. 분할 정복, 동적 프로그래밍, 그리디 알고리즘 등 다양한 패러다임을 이해하고 적용하는 능력이 중요합니다."}
                  {category.id === "data-structures" &&
                    "자료구조는 데이터를 효율적으로 저장하고 접근하기 위한 특별한 형태의 구조입니다. 트리, 그래프, 해시 테이블 등의 고급 자료구조를 이해하면 복잡한 문제를 더 효율적으로 해결할 수 있습니다."}
                  {category.id === "optimization" &&
                    "최적화는 알고리즘의 시간 및 공간 복잡도를 개선하는 과정입니다. 효율적인 알고리즘 설계는 대규모 데이터를 처리하는 데 필수적입니다."}
                </p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto mt-4">
                  <code>
                    {category.id === "algorithms" &&
                      `// 동적 프로그래밍 예시 - 피보나치 수열\n// 일반적인 재귀 구현 (비효율적)\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\n// 동적 프로그래밍 구현 (메모이제이션)\nfunction fibonacciDP(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  \n  memo[n] = fibonacciDP(n - 1, memo) + fibonacciDP(n - 2, memo);\n  return memo[n];\n}\n\nconsole.log(fibonacciDP(40)); // 빠르게 계산됨`}
                    {category.id === "data-structures" &&
                      `// 이진 검색 트리 구현\nclass Node {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinarySearchTree {\n  constructor() {\n    this.root = null;\n  }\n\n  insert(value) {\n    const newNode = new Node(value);\n    \n    if (!this.root) {\n      this.root = newNode;\n      return this;\n    }\n    \n    let current = this.root;\n    \n    while (true) {\n      if (value === current.value) return this;\n      \n      if (value < current.value) {\n        if (!current.left) {\n          current.left = newNode;\n          return this;\n        }\n        current = current.left;\n      } else {\n        if (!current.right) {\n          current.right = newNode;\n          return this;\n        }\n        current = current.right;\n      }\n    }\n  }\n}`}
                    {category.id === "optimization" &&
                      `// 시간 복잡도 개선 예시\n// O(n²) 시간 복잡도\nfunction hasDuplicates(array) {\n  for (let i = 0; i < array.length; i++) {\n    for (let j = i + 1; j < array.length; j++) {\n      if (array[i] === array[j]) return true;\n    }\n  }\n  return false;\n}\n\n// O(n) 시간 복잡도로 개선\nfunction hasDuplicatesOptimized(array) {\n  const seen = new Set();\n  \n  for (const item of array) {\n    if (seen.has(item)) return true;\n    seen.add(item);\n  }\n  \n  return false;\n}`}
                  </code>
                </pre>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

