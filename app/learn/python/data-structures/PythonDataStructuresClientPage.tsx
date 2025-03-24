"use client"

import Link from "next/link"
import { ArrowLeft, FileCode, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PythonDataStructuresClientPage() {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/learn/python">
          <Button variant="ghost" className="pl-0 flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            파이썬 학습으로 돌아가기
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            난이도 2: 초급
          </Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">데이터 구조</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          리스트, 튜플, 딕셔너리, 집합 등 파이썬의 기본 데이터 구조를 배웁니다.
        </p>
      </div>

      <Tabs defaultValue="intro" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="intro">소개</TabsTrigger>
          <TabsTrigger value="lists">리스트</TabsTrigger>
          <TabsTrigger value="tuples">튜플</TabsTrigger>
          <TabsTrigger value="dictionaries">딕셔너리</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>데이터 구조 소개</CardTitle>
              <CardDescription>파이썬의 기본 데이터 구조와 그 특징</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">데이터 구조란?</h3>
                <p className="text-muted-foreground">
                  데이터 구조는 데이터를 효율적으로 저장하고 접근하기 위한 방법입니다. 파이썬은 다양한 내장 데이터
                  구조를 제공하여 프로그래밍을 더 쉽고 효율적으로 만들어 줍니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파이썬의 주요 데이터 구조</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>리스트(List)</strong>: 순서가 있는 변경 가능한 컬렉션 (대괄호 [] 사용)
                  </li>
                  <li>
                    <strong>튜플(Tuple)</strong>: 순서가 있는 변경 불가능한 컬렉션 (소괄호 () 사용)
                  </li>
                  <li>
                    <strong>딕셔너리(Dictionary)</strong>: 키-값 쌍으로 이루어진 변경 가능한 컬렉션 (중괄호 {} 사용)
                  </li>
                  <li>
                    <strong>집합(Set)</strong>: 순서가 없고 중복을 허용하지 않는 컬렉션 (중괄호 {} 사용)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">데이터 구조 선택 기준</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>리스트</strong>: 순서가 중요하고, 내용이 변경될 수 있는 경우
                  </li>
                  <li>
                    <strong>튜플</strong>: 순서가 중요하고, 내용이 변경되지 않아야 하는 경우
                  </li>
                  <li>
                    <strong>딕셔너리</strong>: 키를 통해 빠르게 값을 찾아야 하는 경우
                  </li>
                  <li>
                    <strong>집합</strong>: 중복을 제거하거나 집합 연산이 필요한 경우
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  학습 목표
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>파이썬의 주요 데이터 구조의 특징과 차이점 이해하기</li>
                  <li>각 데이터 구조의 생성, 접근, 수정 방법 익히기</li>
                  <li>상황에 맞는 적절한 데이터 구조 선택하는 방법 배우기</li>
                  <li>데이터 구조를 활용한 문제 해결 능력 향상하기</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lists">
          <Card>
            <CardHeader>
              <CardTitle>리스트 (Lists)</CardTitle>
              <CardDescription>순서가 있는 변경 가능한 데이터 컬렉션</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">리스트 생성</h3>
                <p className="text-muted-foreground mb-2">
                  리스트는 대괄호 []를 사용하여 생성하며, 쉼표로 항목을 구분합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 빈 리스트 생성
empty_list = []
print(empty_list)  # 출력: []

# 값이 있는 리스트 생성
numbers = [1, 2, 3, 4, 5]
print(numbers)  # 출력: [1, 2, 3, 4, 5]

# 다양한 데이터 타입을 포함하는 리스트
mixed = [1, "Hello", 3.14, True]
print(mixed)  # 출력: [1, 'Hello', 3.14, True]

# list() 함수를 사용한 리스트 생성
chars = list("Python")
print(chars)  # 출력: ['P', 'y', 't', 'h', 'o', 'n']`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">리스트 접근 및 슬라이싱</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 인덱스로 접근 (0부터 시작)
fruits = ["사과", "바나나", "체리", "딸기", "오렌지"]
print(fruits[0])  # 출력: 사과
print(fruits[2])  # 출력: 체리

# 음수 인덱스 (뒤에서부터 접근)
print(fruits[-1])  # 출력: 오렌지 (마지막 항목)
print(fruits[-2])  # 출력: 딸기 (뒤에서 두 번째 항목)

# 슬라이싱 [시작:끝:단계]
print(fruits[1:4])    # 출력: ['바나나', '체리', '딸기'] (인덱스 1부터 3까지)
print(fruits[:3])     # 출력: ['사과', '바나나', '체리'] (처음부터 인덱스 2까지)
print(fruits[2:])     # 출력: ['체리', '딸기', '오렌지'] (인덱스 2부터 끝까지)
print(fruits[::2])    # 출력: ['사과', '체리', '오렌지'] (처음부터 끝까지 2단계씩)
print(fruits[::-1])   # 출력: ['오렌지', '딸기', '체리', '바나나', '사과'] (역순)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">리스트 수정</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 항목 변경
fruits = ["사과", "바나나", "체리"]
fruits[1] = "블루베리"
print(fruits)  # 출력: ['사과', '블루베리', '체리']

# 항목 추가
fruits.append("딸기")
print(fruits)  # 출력: ['사과', '블루베리', '체리', '딸기']

# 특정 위치에 항목 삽입
fruits.insert(1, "오렌지")
print(fruits)  # 출력: ['사과', '오렌지', '블루베리', '체리', '딸기']

# 리스트 확장
more_fruits = ["키위", "망고"]
fruits.extend(more_fruits)
print(fruits)  # 출력: ['사과', '오렌지', '블루베리', '체리', '딸기', '키위', '망고']

# + 연산자로 리스트 연결
fruits = fruits + ["파인애플"]
print(fruits)  # 출력: ['사과', '오렌지', '블루베리', '체리', '딸기', '키위', '망고', '파인애플']`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">리스트 항목 제거</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 값으로 항목 제거
fruits = ["사과", "바나나", "체리", "바나나", "딸기"]
fruits.remove("바나나")  # 첫 번째 "바나나"만 제거
print(fruits)  # 출력: ['사과', '체리', '바나나', '딸기']

# 인덱스로 항목 제거
removed = fruits.pop(1)  # 인덱스 1의 항목 제거하고 반환
print(removed)  # 출력: 체리
print(fruits)  # 출력: ['사과', '바나나', '딸기']

# 마지막 항목 제거
last = fruits.pop()
print(last)  # 출력: 딸기
print(fruits)  # 출력: ['사과', '바나나']

# del 키워드로 제거
del fruits[0]
print(fruits)  # 출력: ['바나나']

# 리스트 비우기
fruits.clear()
print(fruits)  # 출력: []`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">리스트 메서드</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 리스트 길이
numbers = [1, 2, 3, 4, 5]
print(len(numbers))  # 출력: 5

# 항목 개수 세기
numbers = [1, 2, 2, 3, 4, 2, 5]
print(numbers.count(2))  # 출력: 3 (2가 3번 등장)

# 항목 위치 찾기
print(numbers.index(4))  # 출력: 4 (4의 인덱스는 4)

# 리스트 정렬
numbers.sort()
print(numbers)  # 출력: [1, 2, 2, 2, 3, 4, 5]

# 내림차순 정렬
numbers.sort(reverse=True)
print(numbers)  # 출력: [5, 4, 3, 2, 2, 2, 1]

# 리스트 복사
numbers_copy = numbers.copy()
print(numbers_copy)  # 출력: [5, 4, 3, 2, 2, 2, 1]

# 리스트 뒤집기
numbers.reverse()
print(numbers)  # 출력: [1, 2, 2, 2, 3, 4, 5]`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">리스트 컴프리헨션</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 기본 리스트 컴프리헨션
squares = [x**2 for x in range(1, 6)]
print(squares)  # 출력: [1, 4, 9, 16, 25]

# 조건부 리스트 컴프리헨션
even_numbers = [x for x in range(1, 11) if x % 2 == 0]
print(even_numbers)  # 출력: [2, 4, 6, 8, 10]

# 중첩 리스트 컴프리헨션
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)  # 출력: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# 문자열 처리
words = ["apple", "banana", "cherry"]
upper_words = [word.upper() for word in words]
print(upper_words)  # 출력: ['APPLE', 'BANANA', 'CHERRY']`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">중첩 리스트 (2차원 리스트)</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 2차원 리스트 생성
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(matrix)

# 특정 요소 접근
print(matrix[1][2])  # 출력: 6 (2행 3열의 요소)

# 행 접근
print(matrix[0])  # 출력: [1, 2, 3] (첫 번째 행)

# 모든 요소 순회
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()
# 출력:
# 1 2 3
# 4 5 6
# 7 8 9`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tuples">
          <Card>
            <CardHeader>
              <CardTitle>튜플 (Tuples)</CardTitle>
              <CardDescription>순서가 있는 변경 불가능한 데이터 컬렉션</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">튜플 생성</h3>
                <p className="text-muted-foreground mb-2">
                  튜플은 소괄호 ()를 사용하여 생성하며, 쉼표로 항목을 구분합니다. 튜플은 한 번 생성되면 변경할 수
                  없습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 빈 튜플 생성
empty_tuple = ()
print(empty_tuple)  # 출력: ()

# 값이 있는 튜플 생성
numbers = (1, 2, 3, 4, 5)
print(numbers)  # 출력: (1, 2, 3, 4, 5)

# 다양한 데이터 타입을 포함하는 튜플
mixed = (1, "Hello", 3.14, True)
print(mixed)  # 출력: (1, 'Hello', 3.14, True)

# 단일 항목 튜플 (쉼표 필수)
single_item = (42,)  # 쉼표가 없으면 정수로 인식됨
print(single_item)  # 출력: (42,)
print(type(single_item))  # 출력: <class 'tuple'>

# 괄호 없이 튜플 생성 (쉼표로 구분)
another_tuple = 1, 2, 3, 4, 5
print(another_tuple)  # 출력: (1, 2, 3, 4, 5)
print(type(another_tuple))  # 출력: <class 'tuple'>

# tuple() 함수를 사용한 튜플 생성
chars = tuple("Python")
print(chars)  # 출력: ('P', 'y', 't', 'h', 'o', 'n')`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">튜플 접근 및 슬라이싱</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 인덱스로 접근 (0부터 시작)
fruits = ("사과", "바나나", "체리", "딸기", "오렌지")
print(fruits[0])  # 출력: 사과
print(fruits[2])  # 출력: 체리

# 음수 인덱스 (뒤에서부터 접근)
print(fruits[-1])  # 출력: 오렌지 (마지막 항목)
print(fruits[-2])  # 출력: 딸기 (뒤에서 두 번째 항목)

# 슬라이싱 [시작:끝:단계]
print(fruits[1:4])    # 출력: ('바나나', '체리', '딸기') (인덱스 1부터 3까지)
print(fruits[:3])     # 출력: ('사과', '바나나', '체리') (처음부터 인덱스 2까지)
print(fruits[2:])     # 출력: ('체리', '딸기', '오렌지') (인덱스 2부터 끝까지)
print(fruits[::2])    # 출력: ('사과', '체리', '오렌지') (처음부터 끝까지 2단계씩)
print(fruits[::-1])   # 출력: ('오렌지', '딸기', '체리', '바나나', '사과') (역순)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">튜플의 불변성</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 튜플은 변경 불가능
fruits = ("사과", "바나나", "체리")

# 다음 코드는 오류 발생
# fruits[0] = "오렌지"  # TypeError: 'tuple' object does not support item assignment

# 튜플 전체를 재할당하는 것은 가능
fruits = ("오렌지", "키위", "망고")
print(fruits)  # 출력: ('오렌지', '키위', '망고')

# 튜플 연결
fruits1 = ("사과", "바나나")
fruits2 = ("체리", "딸기")
all_fruits = fruits1 + fruits2
print(all_fruits)  # 출력: ('사과', '바나나', '체리', '딸기')

# 튜플 반복
repeated = fruits1 * 3
print(repeated)  # 출력: ('사과', '바나나', '사과', '바나나', '사과', '바나나')`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">튜플 메서드와 함수</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 튜플 길이
numbers = (1, 2, 3, 4, 5)
print(len(numbers))  # 출력: 5

# 항목 개수 세기
numbers = (1, 2, 2, 3, 4, 2, 5)
print(numbers.count(2))  # 출력: 3 (2가 3번 등장)

# 항목 위치 찾기
print(numbers.index(4))  # 출력: 4 (4의 인덱스는 4)

# 최대/최소값 찾기
print(max(numbers))  # 출력: 5
print(min(numbers))  # 출력: 1

# 튜플 정렬 (새 튜플 반환)
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # 출력: [1, 2, 2, 2, 3, 4, 5] (리스트로 반환)
print(tuple(sorted_numbers))  # 출력: (1, 2, 2, 2, 3, 4, 5) (튜플로 변환)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">튜플 언패킹</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 튜플 언패킹
coordinates = (10, 20)
x, y = coordinates
print(x)  # 출력: 10
print(y)  # 출력: 20

# 여러 값 언패킹
person = ("홍길동", 30, "서울")
name, age, city = person
print(name)  # 출력: 홍길동
print(age)   # 출력: 30
print(city)  # 출력: 서울

# 일부 값만 언패킹 (나머지는 *로 수집)
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(first)   # 출력: 1
print(middle)  # 출력: [2, 3, 4]
print(last)    # 출력: 5

# 함수에서 여러 값 반환
def get_user_info():
    return "홍길동", 25, "서울"

name, age, city = get_user_info()
print(f"{name}은 {age}살이고 {city}에 살고 있습니다.")
# 출력: 홍길동은 25살이고 서울에 살고 있습니다.`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">튜플과 리스트 변환</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 리스트를 튜플로 변환
my_list = [1, 2, 3, 4, 5]
my_tuple = tuple(my_list)
print(my_tuple)  # 출력: (1, 2, 3, 4, 5)

# 튜플을 리스트로 변환
my_tuple = (1, 2, 3, 4, 5)
my_list = list(my_tuple)
print(my_list)  # 출력: [1, 2, 3, 4, 5]

# 리스트로 변환하여 수정 후 다시 튜플로 변환
my_tuple = (1, 2, 3, 4, 5)
my_list = list(my_tuple)
my_list[0] = 99
my_tuple = tuple(my_list)
print(my_tuple)  # 출력: (99, 2, 3, 4, 5)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">튜플의 활용</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 딕셔너리 키로 사용
locations = {
    (35.6895, 139.6917): "도쿄",
    (37.5665, 126.9780): "서울",
    (40.7128, -74.0060): "뉴욕"
}
print(locations[(37.5665, 126.9780)])  # 출력: 서울

# 함수에서 여러 값 반환
def get_min_max(numbers):
    return min(numbers), max(numbers)

result = get_min_max([5, 3, 8, 1, 9, 2])
print(result)  # 출력: (1, 9)
min_val, max_val = result
print(f"최소값: {min_val}, 최대값: {max_val}")  # 출력: 최소값: 1, 최대값: 9`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">튜플 vs 리스트</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>
                    <strong>불변성</strong>: 튜플은 생성 후 변경할 수 없어 데이터 무결성을 보장합니다. 리스트는 변경
                    가능합니다.
                  </li>
                  <li>
                    <strong>성능</strong>: 튜플은 불변성으로 인해 리스트보다 약간 더 빠르고 메모리 효율적입니다.
                  </li>
                  <li>
                    <strong>용도</strong>: 튜플은 변경되지 않아야 하는 데이터(좌표, 날짜 등)에 적합하고, 리스트는 항목을
                    추가/제거해야 하는 경우에 적합합니다.
                  </li>
                  <li>
                    <strong>해시 가능성</strong>: 튜플은 불변이므로 딕셔너리 키나 집합의 요소로 사용할 수 있지만,
                    리스트는 불가능합니다.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dictionaries">
          <Card>
            <CardHeader>
              <CardTitle>딕셔너리 (Dictionaries)</CardTitle>
              <CardDescription>키-값 쌍으로 이루어진 변경 가능한 데이터 컬렉션</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">딕셔너리 생성</h3>
                <p className="text-muted-foreground mb-2">
                  딕셔너리는 중괄호 {}를 사용하여 생성하며, 키와 값은 콜론(:)으로 구분합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 빈 딕셔너리 생성
empty_dict = {}
print(empty_dict)  # 출력: {}

# 값이 있는 딕셔너리 생성
person = {
    "name": "홍길동",
    "age": 30,
    "city": "서울"
}
print(person)  # 출력: {'name': '홍길동', 'age': 30, 'city': '서울'}

# dict() 함수를 사용한 딕셔너리 생성
person = dict(name="홍길동", age=30, city="서울")
print(person)  # 출력: {'name': '홍길동', 'age': 30, 'city': '서울'}

# 튜플 리스트로 딕셔너리 생성
items = [("name", "홍길동"), ("age", 30), ("city", "서울")]
person = dict(items)
print(person)  # 출력: {'name': '홍길동', 'age': 30, 'city': '서울'}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">딕셔너리 접근 및 수정</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 키를 사용하여 값 접근
person = {"name": "홍길동", "age": 30, "city": "서울"}
print(person["name"])  # 출력: 홍길동

# get() 메서드로 안전하게 접근
print(person.get("age"))  # 출력: 30
print(person.get("email"))  # 출력: None (키가 없을 때)
print(person.get("email", "없음"))  # 출력: 없음 (기본값 지정)

# 값 수정
person["age"] = 31
print(person)  # 출력: {'name': '홍길동', 'age': 31, 'city': '서울'}

# 새 키-값 쌍 추가
person["email"] = "hong@example.com"
print(person)  # 출력: {'name': '홍길동', 'age': 31, 'city': '서울', 'email': 'hong@example.com'}

# update() 메서드로 여러 키-값 쌍 추가/수정
person.update({"age": 32, "phone": "010-1234-5678"})
print(person)  # 출력: {'name': '홍길동', 'age': 32, 'city': '서울', 'email': 'hong@example.com', 'phone': '010-1234-5678'}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">딕셔너리 항목 제거</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# pop() 메서드로 항목 제거 (값 반환)
person = {"name": "홍길동", "age": 30, "city": "서울", "email": "hong@example.com"}
email = person.pop("email")
print(email)  # 출력: hong@example.com
print(person)  # 출력: {'name': '홍길동', 'age': 30, 'city': '서울'}

# popitem() 메서드로 마지막 항목 제거 (키-값 쌍 반환)
last_item = person.popitem()
print(last_item)  # 출력: ('city', '서울')
print(person)  # 출력: {'name': '홍길동', 'age': 30}

# del 키워드로 항목 제거
del person["age"]
print(person)  # 출력: {'name': '홍길동'}

# 딕셔너리 비우기
person.clear()
print(person)  # 출력: {}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">딕셔너리 순회</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 딕셔너리 순회
person = {"name": "홍길동", "age": 30, "city": "서울"}

# 키 순회
for key in person:
    print(key)
# 출력:
# name
# age
# city

# 값 순회
for value in person.values():
    print(value)
# 출력:
# 홍길동
# 30
# 서울

# 키-값 쌍 순회
for key, value in person.items():
    print(f"{key}: {value}")
# 출력:
# name: 홍길동
# age: 30
# city: 서울`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">딕셔너리 메서드</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 딕셔너리 길이
person = {"name": "홍길동", "age": 30, "city": "서울"}
print(len(person))  # 출력: 3

# 키 목록 가져오기
print(list(person.keys()))  # 출력: ['name', 'age', 'city']

# 값 목록 가져오기
print(list(person.values()))  # 출력: ['홍길동', 30, '서울']

# 키-값 쌍 목록 가져오기
print(list(person.items()))  # 출력: [('name', '홍길동'), ('age', 30), ('city', '서울')]

# 키 존재 여부 확인
print("name" in person)  # 출력: True
print("email" in person)  # 출력: False

# 딕셔너리 복사
person_copy = person.copy()
print(person_copy)  # 출력: {'name': '홍길동', 'age': 30, 'city': '서울'}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">딕셔너리 컴프리헨션</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 딕셔너리 컴프리헨션
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # 출력: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# 조건부 딕셔너리 컴프리헨션
even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(even_squares)  # 출력: {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# 기존 딕셔너리 변환
prices = {"apple": 1000, "banana": 2000, "orange": 1500}
sale_prices = {item: price * 0.8 for item, price in prices.items()}
print(sale_prices)  # 출력: {'apple': 800.0, 'banana': 1600.0, 'orange': 1200.0}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">중첩 딕셔너리</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 중첩 딕셔너리
users = {
    "user1": {
        "name": "홍길동",
        "age": 30,
        "email": "hong@example.com"
    },
    "user2": {
        "name": "김철수",
        "age": 25,
        "email": "kim@example.com"
    }
}

# 중첩 딕셔너리 접근
print(users["user1"]["name"])  # 출력: 홍길동
print(users["user2"]["email"])  # 출력: kim@example.com

# 중첩 딕셔너리 수정
users["user1"]["age"] = 31
print(users["user1"])  # 출력: {'name': '홍길동', 'age': 31, 'email': 'hong@example.com'}

# 새 사용자 추가
users["user3"] = {"name": "이영희", "age": 28, "email": "lee@example.com"}
print(len(users))  # 출력: 3`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">딕셔너리 활용 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 단어 빈도수 계산
text = "apple banana apple cherry banana apple"
words = text.split()

word_count = {}
for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

print(word_count)  # 출력: {'apple': 3, 'banana': 2, 'cherry': 1}

# 더 간단한 방법 (defaultdict 사용)
from collections import defaultdict

word_count = defaultdict(int)
for word in words:
    word_count[word] += 1

print(dict(word_count))  # 출력: {'apple': 3, 'banana': 2, 'cherry': 1}

# Counter 사용 (가장 간단한 방법)
from collections import Counter

word_count = Counter(words)
print(dict(word_count))  # 출력: {'apple': 3, 'banana': 2, 'cherry': 1}
print(word_count.most_common(2))  # 출력: [('apple', 3), ('banana', 2)]`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>
                    <strong>키 제약</strong>: 딕셔너리의 키는 불변(immutable) 타입만 가능합니다. 문자열, 숫자, 튜플은
                    키로 사용할 수 있지만, 리스트는 사용할 수 없습니다.
                  </li>
                  <li>
                    <strong>키 중복</strong>: 딕셔너리에서 키는 중복될 수 없습니다. 같은 키로 값을 할당하면 이전 값이
                    덮어씌워집니다.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

