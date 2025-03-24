import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Code, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Python 학습 - Ctrl V Programming Club",
  description: "파이썬 프로그래밍 언어의 기초부터 고급 문법까지 배워보세요",
}

// 난이도 표시를 위한 컴포넌트
function DifficultyBadge({ level }: { level: number }) {
  const colors = {
    1: "bg-green-100 text-green-800 hover:bg-green-100",
    2: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    3: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    4: "bg-orange-100 text-orange-800 hover:bg-orange-100",
    5: "bg-red-100 text-red-800 hover:bg-red-100",
  }

  const labels = {
    1: "입문",
    2: "초급",
    3: "중급",
    4: "고급",
    5: "전문가",
  }

  return (
    <div className="flex items-center gap-1.5">
      <Badge variant="outline" className={colors[level as keyof typeof colors]}>
        난이도 {level}
      </Badge>
      <span className="text-xs text-muted-foreground">{labels[level as keyof typeof labels]}</span>
    </div>
  )
}

export default function PythonLearningPage() {
  // 파이썬 문법 주제들
  const pythonTopics = [
    {
      id: "variables",
      title: "변수와 데이터 타입",
      description: "파이썬의 기본 변수 선언 및 데이터 타입에 대해 배웁니다.",
      difficulty: 1,
      lessons: ["변수 선언하기", "숫자형 데이터", "문자열 데이터", "불리언 데이터"],
      href: "/learn/python/variables",
    },
    {
      id: "file-io",
      title: "파일 입출력",
      description: "파일을 읽고 쓰는 방법, 다양한 파일 형식 처리에 대해 배웁니다.",
      difficulty: 2,
      lessons: ["파일 열기와 닫기", "텍스트 파일 읽기", "텍스트 파일 쓰기", "CSV 파일 다루기", "JSON 파일 다루기"],
      href: "/learn/python/file-io",
    },
    {
        id: "data-structures",
        title: "데이터 구조",
        description: "리스트, 튜플, 딕셔너리, 집합 등 파이썬의 기본 데이터 구조를 배웁니다.",
        difficulty: 2,
        lessons: ["리스트", "튜플", "딕셔너리"],
        href: "/learn/python/data-structures",
    },
    {
      id: "control-flow",
      title: "제어 흐름",
      description: "조건문과 반복문을 사용하여 프로그램의 흐름을 제어하는 방법을 배웁니다.",
      difficulty: 2,
      lessons: ["if-else 조건문", "for 반복문", "while 반복문", "break와 continue"],
      href: "/learn/python/control-flow",
    },
    {
      id: "functions",
      title: "함수",
      description: "함수를 정의하고 사용하는 방법, 매개변수와 반환값에 대해 배웁니다.",
      difficulty: 2,
      lessons: ["함수 정의하기", "매개변수와 인자", "반환값", "기본 매개변수", "재귀함수"],
      href: "/learn/python/functions",
    },
    {
      id: "modules",
      title: "모듈과 패키지",
      description: "파이썬의 모듈과 패키지를 사용하여 코드를 구조화하는 방법을 배웁니다.",
      difficulty: 3,
      lessons: ["모듈 임포트하기", "패키지 만들기", "표준 라이브러리", "pip로 패키지 설치하기"],
      href: "/learn/python/modules",
    },
    {
      id: "exceptions",
      title: "예외 처리",
      description: "try-except 블록을 사용하여 오류를 처리하는 방법을 배웁니다.",
      difficulty: 3,
      lessons: ["예외의 개념", "try-except 구문", "여러 예외 처리하기", "finally 블록", "사용자 정의 예외"],
      href: "/learn/python/exceptions",
    },
    {
      id: "oop",
      title: "객체 지향 프로그래밍",
      description: "클래스와 객체를 사용한 객체 지향 프로그래밍의 개념을 배웁니다.",
      difficulty: 4,
      lessons: ["클래스와 객체", "생성자와 소멸자", "상속", "다형성", "캡슐화", "추상 클래스"],
      href: "/learn/python/oop",
    },
    {
      id: "decorators",
      title: "데코레이터",
      description: "함수와 메서드의 동작을 수정하는 데코레이터에 대해 배웁니다.",
      difficulty: 4,
      lessons: ["함수 데코레이터", "클래스 데코레이터", "내장 데코레이터", "데코레이터 체이닝"],
      href: "/learn/python/decorators",
    },
    {
      id: "generators",
      title: "제너레이터와 이터레이터",
      description: "메모리 효율적인 데이터 처리를 위한 제너레이터와 이터레이터를 배웁니다.",
      difficulty: 4,
      lessons: ["이터레이터 프로토콜", "제너레이터 함수", "yield 키워드", "제너레이터 표현식"],
      href: "/learn/python/generators",
    },
    {
      id: "async",
      title: "비동기 프로그래밍",
      description: "async/await를 사용한 비동기 프로그래밍에 대해 배웁니다.",
      difficulty: 5,
      lessons: ["비동기 프로그래밍 개념", "코루틴", "async와 await", "asyncio 라이브러리"],
      href: "/learn/python/async",
    },
    {
      id: "advanced",
      title: "고급 주제",
      description: "메타클래스, 디스크립터, 컨텍스트 매니저 등 고급 파이썬 기능을 배웁니다.",
      difficulty: 5,
      lessons: ["메타클래스", "디스크립터", "컨텍스트 매니저", "함수형 프로그래밍", "멀티프로세싱"],
      href: "/learn/python/advanced",
    },
  ]

  // 난이도별로 주제 그룹화
  const topicsByDifficulty = pythonTopics.reduce(
    (acc, topic) => {
      const difficulty = topic.difficulty
      if (!acc[difficulty]) {
        acc[difficulty] = []
      }
      acc[difficulty].push(topic)
      return acc
    },
    {} as Record<number, typeof pythonTopics>,
  )

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">파이썬 학습</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          파이썬의 기초부터 고급 주제까지 단계별로 배워보세요
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">학습 경로</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          파이썬 학습은 난이도에 따라 5단계로 구성되어 있습니다. 각 단계를 순서대로 학습하는 것을 권장합니다.
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            난이도 1: 입문
          </Badge>
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            난이도 2: 초급
          </Badge>
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            난이도 3: 중급
          </Badge>
          <Badge variant="outline" className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            난이도 4: 고급
          </Badge>
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            난이도 5: 전문가
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="all">전체 보기</TabsTrigger>
          <TabsTrigger value="1">난이도 1</TabsTrigger>
          <TabsTrigger value="2">난이도 2</TabsTrigger>
          <TabsTrigger value="3">난이도 3</TabsTrigger>
          <TabsTrigger value="4">난이도 4</TabsTrigger>
          <TabsTrigger value="5">난이도 5</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pythonTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </TabsContent>

        {[1, 2, 3, 4, 5].map((level) => (
          <TabsContent key={level} value={level.toString()}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicsByDifficulty[level]?.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <FileCode className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">학습 자료</h2>
        </div>
        <p className="mb-4">파이썬 학습에 도움이 되는 추가 자료들을 확인해보세요.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">공식 문서</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">파이썬 공식 문서와 튜토리얼</p>
            </CardContent>
            <CardFooter>
              <a href="https://docs.python.org/ko/3/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  방문하기
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">연습 문제</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">파이썬 실력을 향상시키는 연습 문제</p>
            </CardContent>
            <CardFooter>
              <Link href="/problems/python" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  문제 풀기
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">프로젝트</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">파이썬으로 만드는 실제 프로젝트</p>
            </CardContent>
            <CardFooter>
              <Link href="/projects/python" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  프로젝트 보기
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

// 주제 카드 컴포넌트
function TopicCard({ topic }: { topic: any }) {
  return (
    <Card className="flex flex-col h-full hover:border-primary transition-colors">
      <CardHeader>
        <div className="mb-2">
          <DifficultyBadge level={topic.difficulty} />
        </div>
        <CardTitle>{topic.title}</CardTitle>
        <CardDescription>{topic.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="text-sm font-medium mb-2">학습 내용:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          {topic.lessons.slice(0, 3).map((lesson: string, index: number) => (
            <li key={index} className="flex items-start">
              <Code className="h-4 w-4 mr-2 mt-0.5 text-primary" />
              {lesson}
            </li>
          ))}
          {topic.lessons.length > 3 && (
            <li className="text-xs text-muted-foreground">+ {topic.lessons.length - 3}개 더...</li>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={topic.href} className="w-full">
          <Button variant="outline" className="w-full justify-between">
            학습하기 <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

