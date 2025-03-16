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
          link: "https://example.com/problems/shortest-path",
        },
        {
          id: 2,
          title: "최소 신장 트리",
          description: "크루스칼과 프림 알고리즘을 이용한 최소 신장 트리 구현 방법을 배웁니다.",
          difficulty: "Expert",
          link: "https://example.com/problems/minimum-spanning-tree",
        },
        {
          id: 3,
          title: "네트워크 플로우",
          description: "포드-풀커슨, 에드몬드-카프 알고리즘을 이용한 최대 유량 문제를 해결합니다.",
          difficulty: "Expert+",
          link: "https://example.com/problems/network-flow",
        },
      ],
    },
    {
      id: "mathematical-algorithms",
      name: "수학적 알고리즘",
      description: "수학적 개념을 활용한 고급 알고리즘을 학습합니다.",
      problems: [
        {
          id: 4,
          title: "정수론 알고리즘",
          description: "소수 판별, 최대공약수, 모듈러 연산 등 정수론 알고리즘을 구현합니다.",
          difficulty: "Expert",
          link: "https://example.com/problems/number-theory",
        },
        {
          id: 5,
          title: "조합론 문제",
          description: "순열, 조합, 카탈란 수 등 조합론적 문제를 해결하는 알고리즘을 배웁니다.",
          difficulty: "Expert",
          link: "https://example.com/problems/combinatorics",
        },
        {
          id: 6,
          title: "기하 알고리즘",
          description: "컨벡스 헐, 선분 교차 판정 등 계산 기하학 알고리즘을 구현합니다.",
          difficulty: "Expert+",
          link: "https://example.com/problems/computational-geometry",
        },
      ],
    },
    {
      id: "advanced-techniques",
      name: "고급 기법",
      description: "경쟁 프로그래밍에서 자주 사용되는 고급 알고리즘 기법을 학습합니다.",
      problems: [
        {
          id: 7,
          title: "세그먼트 트리",
          description: "구간 쿼리를 효율적으로 처리하는 세그먼트 트리를 구현합니다.",
          difficulty: "Expert",
          link: "https://example.com/problems/segment-tree",
        },
        {
          id: 8,
          title: "트라이 자료구조",
          description: "문자열 검색을 위한 트라이 자료구조를 구현하고 활용합니다.",
          difficulty: "Expert",
          link: "https://example.com/problems/trie",
        },
        {
          id: 9,
          title: "분할 정복 최적화",
          description: "분할 정복 알고리즘의 최적화 기법과 응용 방법을 학습합니다.",
          difficulty: "Expert",
          link: "https://example.com/problems/divide-conquer-optimization",
        },
        {
          id: 10,
          title: "동적 계획법 최적화",
          description: "Knuth 최적화, 컨벡스 헐 트릭 등 고급 DP 최적화 기법을 배웁니다.",
          difficulty: "Expert+",
          link: "https://example.com/problems/dp-optimization",
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
                  {category.id === "graph-algorithms" &&
                    "그래프 알고리즘은 노드와 간선으로 구성된 그래프 구조에서 다양한 문제를 해결하는 알고리즘입니다. 최단 경로, 최소 신장 트리, 네트워크 플로우 등 다양한 그래프 알고리즘을 이해하고 구현하는 능력이 필요합니다."}
                  {category.id === "mathematical-algorithms" &&
                    "수학적 알고리즘은 정수론, 조합론, 기하학 등 수학적 개념을 활용한 알고리즘입니다. 이러한 알고리즘은 암호학, 최적화 문제, 컴퓨터 그래픽스 등 다양한 분야에서 활용됩니다."}
                  {category.id === "advanced-techniques" &&
                    "고급 알고리즘 기법은 복잡한 문제를 효율적으로 해결하기 위한 특수한 자료구조와 알고리즘 최적화 방법입니다. 세그먼트 트리, 트라이, 동적 계획법 최적화 등의 기법을 이해하고 적용하는 능력이 중요합니다."}
                </p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto mt-4">
                  <code>
                    {category.id === "graph-algorithms" &&
                      `// 다익스트라 알고리즘 구현 예시\nfunction dijkstra(graph, start) {\n  const distances = {};\n  const visited = {};\n  const previous = {};\n  const nodes = Object.keys(graph);\n  \n  // 초기화\n  for (let node of nodes) {\n    distances[node] = Infinity;\n    previous[node] = null;\n  }\n  distances[start] = 0;\n  \n  while (nodes.length) {\n    // 가장 가까운 노드 찾기\n    nodes.sort((a, b) => distances[a] - distances[b]);\n    const closest = nodes.shift();\n    \n    if (distances[closest] === Infinity) break;\n    visited[closest] = true;\n    \n    // 인접 노드 확인\n    for (let neighbor in graph[closest]) {\n      if (visited[neighbor]) continue;\n      \n      const newDistance = distances[closest] + graph[closest][neighbor];\n      if (newDistance < distances[neighbor]) {\n        distances[neighbor] = newDistance;\n        previous[neighbor] = closest;\n      }\n    }\n  }\n  \n  return { distances, previous };\n}`}
                    {category.id === "mathematical-algorithms" &&
                      `// 에라토스테네스의 체 - 소수 찾기 알고리즘\nfunction sieveOfEratosthenes(n) {\n  const primes = new Array(n + 1).fill(true);\n  primes[0] = primes[1] = false;\n  \n  for (let i = 2; i * i <= n; i++) {\n    if (primes[i]) {\n      for (let j = i * i; j <= n; j += i) {\n        primes[j] = false;\n      }\n    }\n  }\n  \n  const result = [];\n  for (let i = 2; i <= n; i++) {\n    if (primes[i]) result.push(i);\n  }\n  \n  return result;\n}\n\nconsole.log(sieveOfEratosthenes(100)); // 2부터 100까지의 소수 목록`}
                    {category.id === "advanced-techniques" &&
                      `// 세그먼트 트리 구현 예시\nclass SegmentTree {\n  constructor(arr) {\n    this.n = arr.length;\n    this.tree = new Array(4 * this.n).fill(0);\n    this.build(arr, 1, 0, this.n - 1);\n  }\n  \n  build(arr, node, start, end) {\n    if (start === end) {\n      this.tree[node] = arr[start];\n      return;\n    }\n    \n    const mid = Math.floor((start + end) / 2);\n    this.build(arr, 2 * node, start, mid);\n    this.build(arr, 2 * node + 1, mid + 1, end);\n    \n    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];\n  }\n  \n  query(node, start, end, left, right) {\n    if (left > end || right < start) return 0;\n    if (left <= start && end <= right) return this.tree[node];\n    \n    const mid = Math.floor((start + end) / 2);\n    const leftSum = this.query(2 * node, start, mid, left, right);\n    const rightSum = this.query(2 * node + 1, mid + 1, end, left, right);\n    \n    return leftSum + rightSum;\n  }\n  \n  update(node, start, end, idx, val) {\n    if (start === end) {\n      this.tree[node] = val;\n      return;\n    }\n    \n    const mid = Math.floor((start + end) / 2);\n    if (idx <= mid) {\n      this.update(2 * node, start, mid, idx, val);\n    } else {\n      this.update(2 * node + 1, mid + 1, end, idx, val);\n    }\n    \n    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];\n  }\n}`}
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

