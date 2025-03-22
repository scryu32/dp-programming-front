import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { InfoIcon, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react"
import { getUserFromCookie } from "@/lib/getUserFromCookie";

export default async function AlgorithmPage() {
  const user = await getUserFromCookie();
  return (
    <div className="container py-10 max-w-5xl">
      <h1 className="text-4xl font-bold mb-6">알고리즘 (Algorithm)</h1>
      <p className="text-lg text-muted-foreground mb-8">
        문제 해결을 위한 단계적 절차인 알고리즘에 대해 심층적으로 알아봅시다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">알고리즘이란?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              알고리즘은 문제를 해결하기 위한 명확하게 정의된 단계적 절차입니다. 컴퓨터 과학에서 알고리즘은 컴퓨터가
              특정 작업을 수행하기 위해 따라야 하는 명령어의 집합입니다.
            </p>
            <p className="mb-4">좋은 알고리즘은 다음과 같은 특성을 가집니다:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>입력</strong>: 0개 이상의 입력을 가짐
              </li>
              <li>
                <strong>출력</strong>: 1개 이상의 출력을 생성
              </li>
              <li>
                <strong>명확성</strong>: 각 단계가 명확하고 모호하지 않음
              </li>
              <li>
                <strong>유한성</strong>: 유한한 수의 단계 후에 종료됨
              </li>
              <li>
                <strong>효율성</strong>: 시간과 공간 자원을 효율적으로 사용
              </li>
              <li>
                <strong>일반성</strong>: 특정 입력에만 적용되는 것이 아니라 일반적인 문제 해결에 적용 가능
              </li>
            </ul>
            <div className="bg-muted p-4 rounded-md mb-4">
              <h4 className="font-medium mb-2">알고리즘 표현 방법:</h4>
              <ol className="list-decimal pl-6 space-y-1">
                <li>
                  <strong>자연어</strong>: 일상 언어로 알고리즘 설명 (예: 한국어, 영어)
                </li>
                <li>
                  <strong>의사 코드(Pseudocode)</strong>: 프로그래밍 언어와 유사하지만 더 자유로운 형태
                </li>
                <li>
                  <strong>순서도(Flowchart)</strong>: 그래픽 기호를 사용한 시각적 표현
                </li>
                <li>
                  <strong>프로그래밍 언어</strong>: Python, JavaScript, Java 등의 실제 코드
                </li>
              </ol>
            </div>
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>알고리즘과 프로그래밍</AlertTitle>
              <AlertDescription>
                알고리즘은 문제 해결 방법이고, 프로그래밍은 그 알고리즘을 컴퓨터가 이해할 수 있는 언어로 구현하는
                과정입니다. 좋은 프로그래머가 되기 위해서는 효율적인 알고리즘을 설계하고 구현하는 능력이 필수적입니다.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">알고리즘 복잡도 분석</h2>
        <Card>
          <CardHeader>
            <CardTitle>시간 복잡도와 공간 복잡도</CardTitle>
            <CardDescription>알고리즘의 효율성을 평가하는 두 가지 주요 지표</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-2">시간 복잡도 (Time Complexity)</h3>
              <p className="mb-4">
                알고리즘이 실행되는 데 걸리는 시간을 입력 크기의 함수로 표현합니다. 일반적으로 빅오(Big-O) 표기법을
                사용하여 나타냅니다.
              </p>
              <div className="mb-4">
                <h4 className="font-medium mb-2">빅오 표기법이란?</h4>
                <p>
                  빅오 표기법은 알고리즘의 최악의 경우 시간 복잡도를 나타내는 방법입니다. 입력 크기가 증가함에 따라
                  알고리즘의 실행 시간이 어떻게 증가하는지를 표현합니다. 상수 계수와 낮은 차수의 항은 무시하고, 가장
                  빠르게 증가하는 항만 고려합니다.
                </p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>표기법</TableHead>
                    <TableHead>이름</TableHead>
                    <TableHead>설명</TableHead>
                    <TableHead>예시</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>O(1)</TableCell>
                    <TableCell>상수 시간</TableCell>
                    <TableCell>입력 크기와 관계없이 일정한 시간 소요</TableCell>
                    <TableCell>배열의 첫 번째 요소 접근, 해시 테이블 조회</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>O(log n)</TableCell>
                    <TableCell>로그 시간</TableCell>
                    <TableCell>입력 크기가 증가할수록 시간이 로그 비율로 증가</TableCell>
                    <TableCell>이진 검색, 균형 이진 트리 검색</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>O(n)</TableCell>
                    <TableCell>선형 시간</TableCell>
                    <TableCell>입력 크기에 비례하여 시간 증가</TableCell>
                    <TableCell>배열 순회, 선형 검색</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>O(n log n)</TableCell>
                    <TableCell>로그 선형 시간</TableCell>
                    <TableCell>n과 log n의 곱에 비례하여 시간 증가</TableCell>
                    <TableCell>병합 정렬, 퀵 정렬, 힙 정렬</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>O(n²)</TableCell>
                    <TableCell>이차 시간</TableCell>
                    <TableCell>입력 크기의 제곱에 비례하여 시간 증가</TableCell>
                    <TableCell>버블 정렬, 삽입 정렬, 선택 정렬</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>O(n³)</TableCell>
                    <TableCell>삼차 시간</TableCell>
                    <TableCell>입력 크기의 세제곱에 비례하여 시간 증가</TableCell>
                    <TableCell>일부 행렬 연산, 플로이드-워셜 알고리즘</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>O(2ⁿ)</TableCell>
                    <TableCell>지수 시간</TableCell>
                    <TableCell>입력 크기에 대한 2의 거듭제곱에 비례</TableCell>
                    <TableCell>피보나치 수열(재귀), 부분집합 생성</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>O(n!)</TableCell>
                    <TableCell>계승 시간</TableCell>
                    <TableCell>입력 크기의 계승에 비례하여 시간 증가</TableCell>
                    <TableCell>외판원 문제(완전 탐색), 순열 생성</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-4 mb-6">
                <h4 className="font-medium mb-2">시간 복잡도 비교 차트</h4>
                <div className="bg-muted p-4 rounded-md">
                  <p className="mb-2">알고리즘 효율성 순위 (가장 효율적 → 가장 비효율적):</p>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium">O(1)</span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-medium">O(log n)</span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-medium">O(n)</span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-medium">O(n log n)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">O(n log n)</span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-medium">O(n²)</span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-medium">O(2ⁿ)</span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-medium">O(n!)</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">공간 복잡도 (Space Complexity)</h3>
              <p className="mb-4">
                알고리즘이 실행되는 동안 사용하는 메모리 공간의 양을 입력 크기의 함수로 표현합니다. 시간 복잡도와
                마찬가지로 빅오 표기법을 사용합니다.
              </p>
              <div className="bg-muted p-4 rounded-md mb-4">
                <p className="font-medium mb-2">공간 복잡도 고려 사항:</p>
                <ul className="list-disc pl-6">
                  <li>입력 데이터 저장 공간</li>
                  <li>알고리즘 실행 중 사용되는 임시 변수 공간</li>
                  <li>재귀 호출 시 스택 공간</li>
                  <li>출력 데이터 저장 공간</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-medium mb-2">공간 복잡도 예시:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>O(1)</strong> - 상수 공간: 입력 크기와 관계없이 고정된 양의 메모리 사용
                    <div className="bg-muted p-2 rounded-md mt-1">
                      <pre className="text-xs">
                        {`def sum_array(arr):
    total = 0  # 상수 공간 사용
    for num in arr:
        total += num
    return total

# 예시
print(sum_array([1, 2, 3, 4, 5]))  # 출력: 15
`}
                      </pre>
                    </div>
                  </li>
                  <li>
                    <strong>O(n)</strong> - 선형 공간: 입력 크기에 비례하는 메모리 사용
                    <div className="bg-muted p-2 rounded-md mt-1">
                      <pre className="text-xs">
                        {`def copy_array(arr):
    copy = []  # 입력 크기에 비례하는 공간 사용
    for item in arr:
        copy.append(item)
    return copy

# 예시
print(copy_array([1, 2, 3, 4, 5]))  # 출력: [1, 2, 3, 4, 5]
`}
                      </pre>
                    </div>
                  </li>
                  <li>
                    <strong>O(n²)</strong> - 이차 공간: 입력 크기의 제곱에 비례하는 메모리 사용
                    <div className="bg-muted p-2 rounded-md mt-1">
                      <pre className="text-xs">
                        {`def create_matrix(n):
matrix = []  # n x n 크기의 행렬 생성
for i in range(n):
    row = []
    for j in range(n):
        row.append(i * j)
    matrix.append(row)
return matrix

# 예시
matrix = create_matrix(3)
for row in matrix:
    print(row)
# 출력:
# [0, 0, 0]
# [0, 1, 2]
# [0, 2, 4]
`}
                      </pre>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Alert className="w-full">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>중요</AlertTitle>
              <AlertDescription>
                실제 알고리즘 설계 시에는 시간 복잡도와 공간 복잡도 사이의 균형을 고려해야 합니다. 때로는 더 많은
                메모리를 사용하여 실행 시간을 단축하는 방법(시간-공간 트레이드오프)이 효과적일 수 있습니다. 예를 들어,
                동적 프로그래밍은 중간 결과를 저장하여 재계산을 피함으로써 시간을 절약합니다.
              </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">기본 제어 구조</h2>
        <p className="text-muted-foreground mb-4">알고리즘은 다음과 같은 기본 제어 구조를 사용하여 구현됩니다.</p>

        <Tabs defaultValue="sequence">
          <TabsList className="mb-4">
            <TabsTrigger value="sequence">순차 구조</TabsTrigger>
            <TabsTrigger value="selection">선택 구조</TabsTrigger>
            <TabsTrigger value="iteration">반복 구조</TabsTrigger>
            <TabsTrigger value="recursion">재귀 구조</TabsTrigger>
          </TabsList>

          <TabsContent value="sequence">
            <Card>
              <CardHeader>
                <CardTitle>순차 구조 (Sequence)</CardTitle>
                <CardDescription>명령어가 순서대로 실행되는 구조</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  순차 구조는 가장 기본적인 제어 구조로, 명령어가 위에서 아래로 순서대로 실행됩니다.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`# 순차 구조 예시
x = 5           # 첫 번째 명령
y = 10          # 두 번째 명령
sum = x + y     # 세 번째 명령
print(sum)    # 네 번째 명령`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="selection">
            <Card>
              <CardHeader>
                <CardTitle>선택 구조 (Selection)</CardTitle>
                <CardDescription>조건에 따라 다른 명령어를 실행하는 구조</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  선택 구조는 조건에 따라 다른 코드 블록을 실행하는 구조입니다. 주로 if-else 문과 switch 문을
                  사용합니다.
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">if-else 문</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`// if-else 문 예시
score = 85
grade

if score >= 90:
  grade = 'A'
elif score >= 80:
  grade = 'B'
elif score >= 70:
  grade = 'C'
elif score >= 60:
  grade = 'D'
else:
  grade = 'F'


print(f"점수: {score}, 학점: {grade}");  # 출력: 점수: 85, 학점: B`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="iteration">
            <Card>
              <CardHeader>
                <CardTitle>반복 구조 (Iteration)</CardTitle>
                <CardDescription>특정 조건이 만족될 때까지 코드 블록을 반복 실행하는 구조</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  반복 구조는 특정 조건이 만족될 때까지 코드 블록을 반복적으로 실행하는 구조입니다. 주로 for 문, while
                  문을 사용합니다.
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">for 문</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`# for 문 예시
sum = 0

for i in range(1, 11):
    sum += i

print(f"1부터 10까지의 합: {sum}");  # 출력: 1부터 10까지의 합: 55`}
                  </pre>
                </div>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">while 문</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`# while 문 예시
count = 0
factorial = 1

while count < 5:
  count += 1
  factorial *= count


print(f"5! = {factorial}");  # 출력: 5! = 120`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recursion">
            <Card>
              <CardHeader>
                <CardTitle>재귀 구조 (Recursion)</CardTitle>
                <CardDescription>함수가 자기 자신을 호출하는 구조</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  재귀 구조는 함수가 자기 자신을 호출하는 구조입니다. 복잡한 문제를 더 작은 동일한 형태의 하위 문제로
                  나누어 해결하는 데 유용합니다.
                </p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">재귀 함수의 구성 요소:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>기저 조건(Base Case)</strong>: 재귀 호출을 중단하는 조건
                    </li>
                    <li>
                      <strong>재귀 호출(Recursive Call)</strong>: 함수가 자기 자신을 호출하는 부분
                    </li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">팩토리얼 계산</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`def factorial(n):
    # 기저 조건: n이 0 또는 1이면 1을 반환
    if n == 0 or n == 1:
        return 1
    # 재귀 호출
    return n * factorial(n - 1)

print(factorial(5))  # 출력: 120
`}
                  </pre>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">피보나치 수열</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`def fibonacci(n):
    # 기저 조건: n이 0 또는 1이면 n을 반환
    if n <= 1:
        return n
    # 재귀 호출
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))  # 출력: 8
`}
                  </pre>
                </div>
                <Alert className="mt-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>주의</AlertTitle>
                  <AlertDescription>
                    재귀 함수는 직관적이고 우아한 해결책을 제공할 수 있지만, 깊은 재귀 호출은 스택 오버플로우를 일으킬
                    수 있습니다. 또한, 단순 재귀는 중복 계산으로 인해 비효율적일 수 있으므로 메모이제이션과 같은 최적화
                    기법을 함께 사용하는 것이 좋습니다.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">주요 알고리즘 패러다임</h2>
        <p className="text-muted-foreground mb-4">
          알고리즘 패러다임은 알고리즘을 설계하는 일반적인 방법이나 접근 방식을 의미합니다. 다양한 문제를 해결하기 위한
          전략적 프레임워크를 제공합니다.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="divide-conquer">
            <AccordionTrigger>분할 정복 (Divide and Conquer)</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    분할 정복은 문제를 더 작은 하위 문제로 나누고, 각 하위 문제를 해결한 다음 결과를 결합하는
                    방법입니다.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">단계:</h4>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>
                        <strong>분할(Divide)</strong>: 문제를 더 작은 하위 문제로 나눕니다.
                      </li>
                      <li>
                        <strong>정복(Conquer)</strong>: 하위 문제를 재귀적으로 해결합니다.
                      </li>
                      <li>
                        <strong>결합(Combine)</strong>: 하위 문제의 해결책을 결합하여 원래 문제의 해결책을 만듭니다.
                      </li>
                    </ol>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">예시 알고리즘:</h4>
                    <ul className="list-disc pl-6">
                      <li>병합 정렬 (Merge Sort)</li>
                      <li>퀵 정렬 (Quick Sort)</li>
                      <li>이진 검색 (Binary Search)</li>
                      <li>스트라센 행렬 곱셈 (Strassen's Matrix Multiplication)</li>
                      <li>가장 가까운 점의 쌍 찾기 (Closest Pair of Points)</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-medium mb-2">병합 정렬 예시</h4>
                    <pre className="text-sm overflow-x-auto">
                      {`def merge_sort(arr):
    # 기저 조건: 배열의 길이가 1 이하이면 이미 정렬된 상태로 간주
    if len(arr) <= 1:
        return arr

    # 분할 단계: 배열을 중간을 기준으로 두 개의 부분 배열로 분할
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    # 결합 단계: 두 정렬된 배열을 병합하여 하나의 정렬된 배열로 만듦
    return merge(left, right)

def merge(left, right):
    result = []
    left_index = right_index = 0

    # 두 배열의 요소를 비교하며 작은 값부터 결과 배열에 추가
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1

    # 남은 요소들 추가
    result.extend(left[left_index:])
    result.extend(right[right_index:])
    return result

# 예시
arr = [5, 2, 4, 6, 1, 3]
print(merge_sort(arr))  # 출력: [1, 2, 3, 4, 5, 6]
`}
                    </pre>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">이진 검색 예시</h4>
                    <pre className="text-sm overflow-x-auto">
                      {`def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        # 중간 지점 계산
        mid = (left + right) // 2

        # 정복 단계: 중간 요소와 타겟 비교
        if arr[mid] == target:
            return mid  # 타겟을 찾으면 인덱스 반환
        elif arr[mid] < target:
            left = mid + 1  # 오른쪽 절반 검색
        else:
            right = mid - 1  # 왼쪽 절반 검색

    return -1  # 타겟을 찾지 못함

# 예시
sorted_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(binary_search(sorted_arr, 4))   # 출력: 3
print(binary_search(sorted_arr, 10))  # 출력: -1
`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dynamic-programming">
            <AccordionTrigger>동적 계획법 (Dynamic Programming)</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    동적 계획법은 복잡한 문제를 더 작은 하위 문제로 나누고, 하위 문제의 해결책을 저장하여 중복 계산을
                    피하는 방법입니다.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">특징:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        <strong>최적 부분 구조(Optimal Substructure)</strong>: 문제의 최적해가 하위 문제의 최적해로
                        구성됨
                      </li>
                      <li>
                        <strong>중복되는 하위 문제(Overlapping Subproblems)</strong>: 동일한 하위 문제가 반복적으로 발생
                      </li>
                      <li>
                        <strong>메모이제이션(Memoization)</strong>: 하위 문제의 해결책을 저장하여 재사용
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">구현 방법:</h4>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>
                        <strong>하향식(Top-down)</strong>: 재귀 + 메모이제이션
                      </li>
                      <li>
                        <strong>상향식(Bottom-up)</strong>: 반복문 + 테이블
                      </li>
                    </ol>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">예시 문제:</h4>
                    <ul className="list-disc pl-6">
                      <li>피보나치 수열</li>
                      <li>최장 공통 부분 수열 (LCS)</li>
                      <li>배낭 문제 (Knapsack Problem)</li>
                      <li>최단 경로 문제</li>
                      <li>행렬 연쇄 곱셈</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-md mb-4">
                    <h4 className="font-medium mb-2">피보나치 수열 예시</h4>
                    <pre className="text-sm overflow-x-auto">
                      {`// 하향식 접근법 (메모이제이션)
def fibonacci_top_down(n, memo=None):
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_top_down(n - 1, memo) + fibonacci_top_down(n - 2, memo)
    return memo[n]

# 예시
print(fibonacci_top_down(10))  # 출력: 55


// 상향식 접근법 (테이블)
def fibonacci_bottom_up(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

# 예시
print(fibonacci_bottom_up(10))  # 출력: 55
`}
                    </pre>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">최장 증가 부분 수열(LIS) 예시</h4>
                    <pre className="text-sm overflow-x-auto">
                      {`def longest_increasing_subsequence(arr):
    n = len(arr)
    if n == 0:
        return 0

    # dp[i]는 arr[i]를 마지막 원소로 하는 LIS의 길이
    dp = [1] * n

    for i in range(1, n):
        for j in range(i):
            if arr[i] > arr[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)

# 예시
arr = [10, 22, 9, 33, 21, 50, 41, 60]
print(longest_increasing_subsequence(arr))  # 출력: 5 (예: 10, 22, 33, 50, 60)
`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="greedy">
            <AccordionTrigger>탐욕 알고리즘 (Greedy Algorithm)</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    탐욕 알고리즘은 각 단계에서 지역적으로 최적인 선택을 함으로써 전역적으로 최적인 해결책을 찾는
                    방법입니다.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">특징:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>각 단계에서 현재 상황에서 가장 좋아 보이는 선택을 함</li>
                      <li>한 번 선택한 것은 다시 고려하지 않음</li>
                      <li>모든 문제에 적용할 수 없으며, 특정 조건을 만족해야 함</li>
                      <li>일반적으로 구현이 간단하고 효율적</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">적용 조건:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        <strong>탐욕적 선택 속성(Greedy Choice Property)</strong>: 지역적으로 최적인 선택이 전역적으로
                        최적인 해결책으로 이어짐
                      </li>
                      <li>
                        <strong>최적 부분 구조(Optimal Substructure)</strong>: 문제의 최적해가 하위 문제의 최적해를
                        포함함
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">예시 문제:</h4>
                    <ul className="list-disc pl-6">
                      <li>동전 거스름돈 문제</li>
                      <li>활동 선택 문제</li>
                      <li>허프만 코딩</li>
                      <li>최소 신장 트리 (Kruskal, Prim 알고리즘)</li>
                      <li>다익스트라 최단 경로 알고리즘</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">동전 거스름돈 문제</h4>
                    <pre className="text-sm overflow-x-auto">
                      {`def coin_change(coins, amount):
    # 내림차순으로 동전 정렬
    coins.sort(reverse=True)
    
    total_coins = 0
    remaining_amount = amount
    
    # 가장 큰 동전부터 사용
    for coin in coins:
        count = remaining_amount // coin  # 현재 동전으로 거슬러 줄 수 있는 최대 개수
        total_coins += count
        remaining_amount -= count * coin
        
        # 거스름돈을 다 거슬러 주었으면 종료
        if remaining_amount == 0:
            break
    
    # 거스름돈을 다 거슬러 주지 못한 경우 -1 반환
    return total_coins if remaining_amount == 0 else -1

# 예시
coins = [500, 100, 50, 10]
amount = 1260
print(coin_change(coins, amount))  # 출력: 6 (500원 2개, 100원 2개, 50원 1개, 10원 1개)
`}
                    </pre>
                  </div>
                  <Alert className="mt-4">
                    <InfoIcon className="h-4 w-4" />
                    <AlertTitle>참고</AlertTitle>
                    <AlertDescription>
                      탐욕 알고리즘은 항상 최적해를 보장하지는 않습니다. 예를 들어, 동전 거스름돈 문제에서 동전의 단위가
                      [1, 3, 4]이고 거슬러 줄 금액이 6인 경우, 탐욕 알고리즘은 4원 1개와 1원 2개로 총 3개의 동전을
                      사용하지만, 최적해는 3원 2개로 총 2개의 동전입니다. 따라서 탐욕 알고리즘을 적용하기 전에 해당
                      문제가 탐욕적 접근으로 최적해를 구할 수 있는지 확인해야 합니다.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="backtracking">
            <AccordionTrigger>백트래킹 (Backtracking)</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    백트래킹은 가능한 모든 해결책을 탐색하는 알고리즘으로, 현재 해결책이 유효하지 않으면 이전 단계로
                    돌아가(백트래킹) 다른 가능성을 탐색합니다.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">특징:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>깊이 우선 탐색(DFS)을 기반으로 함</li>
                      <li>가지치기(Pruning)를 통해 불필요한 탐색을 줄임</li>
                      <li>조합 최적화 문제에 주로 사용됨</li>
                      <li>최악의 경우 지수 시간 복잡도를 가짐</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">예시 문제:</h4>
                    <ul className="list-disc pl-6">
                      <li>N-Queens 문제</li>
                      <li>스도쿠 풀이</li>
                      <li>부분집합의 합 문제</li>
                      <li>해밀턴 경로/순환</li>
                      <li>그래프 색칠 문제</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">N-Queens 문제</h4>
                    <pre className="text-sm overflow-x-auto">
                      {`def solve_n_queens(n):
    result = []
    board = [["."] * n for _ in range(n)]
    
    def is_safe(row, col):
        # 같은 열에 퀸이 있는지 확인 (위쪽만 확인)
        for i in range(row):
            if board[i][col] == "Q":
                return False
        
        # 왼쪽 위 대각선 확인
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == "Q":
                return False
            i -= 1
            j -= 1
        
        # 오른쪽 위 대각선 확인
        i, j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == "Q":
                return False
            i -= 1
            j += 1
        
        return True

    def backtrack(row):
        # 모든 행에 퀸을 배치했다면, 현재 보드를 결과에 추가
        if row == n:
            solution = ["".join(r) for r in board]
            result.append(solution)
            return
        
        # 현재 행의 각 열에 퀸 배치 시도
        for col in range(n):
            if is_safe(row, col):
                board[row][col] = "Q"  # 퀸 배치
                backtrack(row + 1)     # 다음 행으로 진행
                board[row][col] = "."  # 백트래킹

    backtrack(0)
    return result

# 예시
if __name__ == "__main__":
    solutions = solve_n_queens(4)
    for sol in solutions:
        print(sol)
    # 출력:
    # ['.Q..', '...Q', 'Q...', '..Q.']
    # ['..Q.', 'Q...', '...Q', '.Q..']
`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="branch-bound">
            <AccordionTrigger>분기 한정법 (Branch and Bound)</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    분기 한정법은 최적화 문제를 해결하기 위한 알고리즘으로, 가능한 해결책의 집합을 체계적으로 열거하고
                    한계값(bound)을 사용하여 유망하지 않은 부분집합을 제거합니다.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">특징:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>상태 공간 트리를 사용하여 해결책 탐색</li>
                      <li>한계값(bound)을 통해 불필요한 탐색 제거</li>
                      <li>최적해를 보장함</li>
                      <li>BFS(너비 우선 탐색) 또는 최선 우선 탐색(Best-First Search) 사용</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">백트래킹과의 차이점:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>백트래킹은 DFS 기반, 분기 한정법은 BFS 또는 최선 우선 탐색 기반</li>
                      <li>백트래킹은 가능한 해결책 찾기, 분기 한정법은 최적해 찾기</li>
                      <li>분기 한정법은 더 정교한 한계값 계산을 사용</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">예시 문제:</h4>
                    <ul className="list-disc pl-6">
                      <li>외판원 문제 (TSP)</li>
                      <li>0/1 배낭 문제</li>
                      <li>작업 할당 문제</li>
                      <li>그래프 색칠 문제</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">0/1 배낭 문제</h4>
                    <pre className="text-sm overflow-x-auto">
                      {`class Item:
    def __init__(self, weight, value):
        self.weight = weight
        self.value = value
        self.ratio = value / weight


def knapsack_branch_and_bound(items, capacity):
    # 가치/무게 비율로 내림차순 정렬
    items.sort(key=lambda item: item.ratio, reverse=True)

    max_value = 0
    best_solution = [0] * len(items)

    # 노드 클래스 정의
    class Node:
        def __init__(self, level, weight, value, bound, solution):
            self.level = level      # 현재 아이템 인덱스
            self.weight = weight    # 현재까지의 무게
            self.value = value      # 현재까지의 가치
            self.bound = bound      # 상한값
            self.solution = solution[:]  # 현재 해결책 (복사)

    # 상한값 계산 함수
    def calculate_bound(node):
        if node.weight >= capacity:
            return 0

        bound = node.value
        j = node.level + 1
        total_weight = node.weight

        # 남은 아이템을 가치/무게 비율이 높은 순서대로 완전히 담을 수 있으면 담기
        while j < len(items) and total_weight + items[j].weight <= capacity:
            total_weight += items[j].weight
            bound += items[j].value
            j += 1

        # 용량이 남으면 분수 아이템 추가
        if j < len(items):
            bound += (capacity - total_weight) * items[j].ratio

        return bound

    # 큐 초기화 (노드들을 저장)
    queue = []

    # 루트 노드 생성: 아직 어떤 아이템도 고려하지 않음
    root = Node(level=-1, weight=0, value=0, bound=0, solution=[0] * len(items))
    root.bound = calculate_bound(root)
    queue.append(root)

    # 분기 한정법 수행
    while queue:
        # 가장 유망한 노드를 선택 (bound가 큰 순)
        queue.sort(key=lambda node: node.bound, reverse=True)
        node = queue.pop(0)

        # 현재 노드의 상한값이 최대 가치보다 작으면 가지치기
        if node.bound <= max_value:
            continue

        # 다음 아이템 인덱스
        level = node.level + 1
        if level >= len(items):
            continue

        # 1) 현재 아이템을 포함하지 않는 경우
        solution1 = node.solution[:]  # 복사
        node1 = Node(level, node.weight, node.value, 0, solution1)
        node1.bound = calculate_bound(node1)
        if node1.bound > max_value:
            queue.append(node1)

        # 2) 현재 아이템을 포함하는 경우 (단, 용량 초과 여부 확인)
        new_weight = node.weight + items[level].weight
        if new_weight <= capacity:
            solution2 = node.solution[:]  # 복사
            solution2[level] = 1
            node2 = Node(level, new_weight, node.value + items[level].value, 0, solution2)
            node2.bound = calculate_bound(node2)
            if node2.bound > max_value:
                queue.append(node2)
                # 최대 가치 업데이트 (실제 가치)
                if node2.value > max_value:
                    max_value = node2.value
                    best_solution = node2.solution[:]

    return {
        'maxValue': max_value,
        'solution': best_solution
    }


# 예시
if __name__ == "__main__":
    items = [Item(10, 60), Item(20, 100), Item(30, 120)]
    capacity = 50

    result = knapsack_branch_and_bound(items, capacity)
    print(f"최대 가치: {result['maxValue']}")
    print(f"해결책: {result['solution']}")
    # 예상 출력: 최대 가치: 220, 해결책: [0, 1, 1]
`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">검색 알고리즘</h2>
        <p className="text-muted-foreground mb-4">검색 알고리즘은 데이터 집합에서 특정 항목을 찾는 알고리즘입니다.</p>

        <Tabs defaultValue="linear">
          <TabsList className="mb-4">
            <TabsTrigger value="linear">선형 검색</TabsTrigger>
            <TabsTrigger value="binary">이진 검색</TabsTrigger>
            <TabsTrigger value="hash">해시 검색</TabsTrigger>
          </TabsList>

          <TabsContent value="linear">
            <Card>
              <CardHeader>
                <CardTitle>선형 검색 (Linear Search)</CardTitle>
                <CardDescription>배열의 각 요소를 순차적으로 확인하는 가장 단순한 검색 알고리즘</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">특징:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>구현이 간단함</li>
                    <li>정렬되지 않은 배열에서도 사용 가능</li>
                    <li>시간 복잡도: O(n)</li>
                    <li>공간 복잡도: O(1)</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">선형 검색 구현</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i  # 타겟의 인덱스 반환
    return -1  # 타겟을 찾지 못함

# 예시
arr = [5, 2, 9, 1, 5, 6]
print(linear_search(arr, 9))  # 출력: 2
print(linear_search(arr, 7))  # 출력: -1
`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="binary">
            <Card>
              <CardHeader>
                <CardTitle>이진 검색 (Binary Search)</CardTitle>
                <CardDescription>
                  정렬된 배열에서 중간 값을 기준으로 검색 범위를 절반씩 줄여가는 알고리즘
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">특징:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>정렬된 배열에서만 사용 가능</li>
                    <li>분할 정복 알고리즘의 일종</li>
                    <li>시간 복잡도: O(log n)</li>
                    <li>공간 복잡도: O(1) (반복), O(log n) (재귀)</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">반복적 이진 검색</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid  # 타겟의 인덱스 반환
        elif arr[mid] < target:
            left = mid + 1  # 오른쪽 절반 검색
        else:
            right = mid - 1  # 왼쪽 절반 검색

    return -1  # 타겟을 찾지 못함

# 예시
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(binary_search(arr, 5))   # 출력: 4
print(binary_search(arr, 10))  # 출력: -1
`}
                  </pre>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">재귀적 이진 검색</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    if left > right:
        return -1  # 검색 범위가 없는 경우

    mid = (left + right) // 2
    if arr[mid] == target:
        return mid  # 타겟의 인덱스 반환
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)  # 오른쪽 절반 검색
    else:
        return binary_search_recursive(arr, target, left, mid - 1)  # 왼쪽 절반 검색

# 예시
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(binary_search_recursive(arr, 7))  # 출력: 6
`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hash">
            <Card>
              <CardHeader>
                <CardTitle>해시 검색 (Hash Search)</CardTitle>
                <CardDescription>해시 함수를 사용하여 데이터를 저장하고 검색하는 알고리즘</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">특징:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>해시 테이블 자료구조 사용</li>
                    <li>평균 시간 복잡도: O(1) (최악의 경우 O(n))</li>
                    <li>공간 복잡도: O(n)</li>
                    <li>충돌 처리 방법이 필요함</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">해시 충돌 해결 방법:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>체이닝(Chaining)</strong>: 같은 버킷에 여러 항목을 연결 리스트로 저장
                    </li>
                    <li>
                      <strong>개방 주소법(Open Addressing)</strong>: 충돌 시 다른 버킷에 저장 (선형 탐사, 이차 탐사,
                      이중 해싱)
                    </li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">해시 테이블 구현</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`class HashTable:
    def __init__(self, size=53):
        self.key_map = [None] * size
        self.size = size

    def _hash(self, key):
        total = 0
        PRIME = 31
        # key의 길이가 100을 초과하지 않도록 처리
        for i in range(min(len(key), 100)):
            char = key[i]
            # 소문자 알파벳일 경우 'a'의 아스키 코드 값은 97이므로, 96을 빼서 1부터 시작하도록 함
            value = ord(char) - 96
            total = (total * PRIME + value) % self.size
        return total

    def set(self, key, value):
        index = self._hash(key)
        if self.key_map[index] is None:
            self.key_map[index] = []
        self.key_map[index].append((key, value))
        return self

    def get(self, key):
        index = self._hash(key)
        if self.key_map[index] is not None:
            for k, v in self.key_map[index]:
                if k == key:
                    return v
        return None

    def keys(self):
        keys_arr = []
        for bucket in self.key_map:
            if bucket:
                for k, _ in bucket:
                    if k not in keys_arr:
                        keys_arr.append(k)
        return keys_arr

    def values(self):
        values_arr = []
        for bucket in self.key_map:
            if bucket:
                for _, v in bucket:
                    if v not in values_arr:
                        values_arr.append(v)
        return values_arr

# 예시
ht = HashTable()
ht.set("name", "홍길동")
ht.set("age", 25)
ht.set("city", "서울")

print(ht.get("name"))  # 출력: 홍길동
print(ht.get("age"))   # 출력: 25
print(ht.keys())       # 출력: ["name", "age", "city"]
`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">정렬 알고리즘</h2>
        <p className="text-muted-foreground mb-4">
          정렬 알고리즘은 데이터 요소를 특정 순서(오름차순, 내림차순)로 재배열하는 알고리즘입니다.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>주요 정렬 알고리즘 비교</CardTitle>
            <CardDescription>다양한 정렬 알고리즘의 시간 복잡도와 특징</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>알고리즘</TableHead>
                  <TableHead>최선</TableHead>
                  <TableHead>평균</TableHead>
                  <TableHead>최악</TableHead>
                  <TableHead>공간</TableHead>
                  <TableHead>안정성</TableHead>
                  <TableHead>특징</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>버블 정렬</TableCell>
                  <TableCell>O(n)</TableCell>
                  <TableCell>O(n²)</TableCell>
                  <TableCell>O(n²)</TableCell>
                  <TableCell>O(1)</TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>인접한 두 요소를 비교하여 교환</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>선택 정렬</TableCell>
                  <TableCell>O(n²)</TableCell>
                  <TableCell>O(n²)</TableCell>
                  <TableCell>O(n²)</TableCell>
                  <TableCell>O(1)</TableCell>
                  <TableCell>✗</TableCell>
                  <TableCell>최소값을 찾아 맨 앞으로 이동</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>삽입 정렬</TableCell>
                  <TableCell>O(n)</TableCell>
                  <TableCell>O(n²)</TableCell>
                  <TableCell>O(n²)</TableCell>
                  <TableCell>O(1)</TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>정렬된 부분에 새 요소를 삽입</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>병합 정렬</TableCell>
                  <TableCell>O(n log n)</TableCell>
                  <TableCell>O(n log n)</TableCell>
                  <TableCell>O(n log n)</TableCell>
                  <TableCell>O(n)</TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>분할 정복 방식, 안정적</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>퀵 정렬</TableCell>
                  <TableCell>O(n log n)</TableCell>
                  <TableCell>O(n log n)</TableCell>
                  <TableCell>O(n²)</TableCell>
                  <TableCell>O(log n)</TableCell>
                  <TableCell>✗</TableCell>
                  <TableCell>피벗을 기준으로 분할, 빠름</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>힙 정렬</TableCell>
                  <TableCell>O(n log n)</TableCell>
                  <TableCell>O(n log n)</TableCell>
                  <TableCell>O(n log n)</TableCell>
                  <TableCell>O(1)</TableCell>
                  <TableCell>✗</TableCell>
                  <TableCell>이진 힙 자료구조 사용</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>계수 정렬</TableCell>
                  <TableCell>O(n+k)</TableCell>
                  <TableCell>O(n+k)</TableCell>
                  <TableCell>O(n+k)</TableCell>
                  <TableCell>O(k)</TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>값의 범위가 작을 때 효율적</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>기수 정렬</TableCell>
                  <TableCell>O(nk)</TableCell>
                  <TableCell>O(nk)</TableCell>
                  <TableCell>O(nk)</TableCell>
                  <TableCell>O(n+k)</TableCell>
                  <TableCell>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>자릿수별로 정렬, 비교 없음</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                * n: 입력 크기, k: 최대값 또는 자릿수, 안정성: 동일한 값의 상대적 순서가 유지되는지 여부
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="bubble-sort">
              <AccordionTrigger>버블 정렬 (Bubble Sort)</AccordionTrigger>
              <AccordionContent>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        # 마지막 i개는 이미 정렬되었으므로 비교 대상에서 제외
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # 두 요소 교환
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # 교환이 한 번도 일어나지 않으면 이미 정렬된 상태
        if not swapped:
            break
    return arr

# 예시
arr = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(arr))  # 출력: [11, 12, 22, 25, 34, 64, 90]
`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quick-sort">
              <AccordionTrigger>퀵 정렬 (Quick Sort)</AccordionTrigger>
              <AccordionContent>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`def partition(arr, left, right):
    pivot = arr[right]  # 마지막 요소를 피벗으로 선택
    i = left - 1        # 피벗보다 작은 요소들의 경계
    for j in range(left, right):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]  # 교환
    # 피벗을 올바른 위치로 이동
    arr[i + 1], arr[right] = arr[right], arr[i + 1]
    return i + 1

def quick_sort(arr, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    if left < right:
        pivot_index = partition(arr, left, right)
        # 피벗을 기준으로 왼쪽과 오른쪽 부분 배열 정렬
        quick_sort(arr, left, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, right)
    return arr

# 예시
arr = [10, 7, 8, 9, 1, 5]
print(quick_sort(arr))  # 출력: [1, 5, 7, 8, 9, 10]
`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="merge-sort">
              <AccordionTrigger>병합 정렬 (Merge Sort)</AccordionTrigger>
              <AccordionContent>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`def merge_sort(arr):
    # 기저 조건: 배열 길이가 1 이하이면 이미 정렬된 것으로 간주
    if len(arr) <= 1:
        return arr
    
    # 분할 단계
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    # 결합 단계: 두 개의 정렬된 배열 병합
    return merge(left, right)

def merge(left, right):
    result = []
    left_index = right_index = 0
    
    # 두 배열의 요소를 비교하여 작은 값부터 결과 배열에 추가
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1
            
    # 남은 요소들 추가
    result.extend(left[left_index:])
    result.extend(right[right_index:])
    
    return result

# 예시
arr = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(arr))  # 출력: [3, 9, 10, 27, 38, 43, 82]
`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">그래프 알고리즘</h2>
        <p className="text-muted-foreground mb-4">
          그래프 알고리즘은 노드(정점)와 간선으로 구성된 그래프 자료구조에서 다양한 문제를 해결하는 알고리즘입니다.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>주요 그래프 알고리즘</CardTitle>
            <CardDescription>그래프 탐색, 최단 경로, 최소 신장 트리 등</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">그래프 탐색 알고리즘</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>깊이 우선 탐색(DFS)</strong>: 가능한 한 깊이 들어가면서 탐색
                  </li>
                  <li>
                    <strong>너비 우선 탐색(BFS)</strong>: 현재 정점과 인접한 정점을 먼저 탐색
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">최단 경로 알고리즘</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>다익스트라(Dijkstra)</strong>: 음이 아닌 가중치 그래프에서 한 정점에서 다른 모든 정점까지의
                    최단 경로
                  </li>
                  <li>
                    <strong>벨만-포드(Bellman-Ford)</strong>: 음의 가중치가 있는 그래프에서도 사용 가능한 최단 경로
                    알고리즘
                  </li>
                  <li>
                    <strong>플로이드-워셜(Floyd-Warshall)</strong>: 모든 정점 쌍 사이의 최단 경로
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">최소 신장 트리 알고리즘</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>크루스칼(Kruskal)</strong>: 간선을 가중치 순으로 정렬하여 사이클을 형성하지 않는 간선을 선택
                  </li>
                  <li>
                    <strong>프림(Prim)</strong>: 시작 정점에서 출발하여 트리를 확장해 나가는 방식
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">기타 그래프 알고리즘</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>위상 정렬(Topological Sort)</strong>: 방향 그래프에서 정점을 선형으로 정렬
                  </li>
                  <li>
                    <strong>강한 연결 요소(SCC)</strong>: 방향 그래프에서 서로 도달 가능한 정점들의 집합
                  </li>
                  <li>
                    <strong>단절점과 단절선</strong>: 그래프의 연결성을 깨는 정점과 간선
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-medium mb-2">그래프 표현 방법</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">인접 행렬 (Adjacency Matrix)</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`# 인접 행렬 표현
graph = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 1, 1, 0]
]

# 0번 정점과 연결된 정점 찾기
for i in range(len(graph)):
    if graph[0][i] == 1:
        print(f"0번 정점과 연결된 정점: {i}")`}
                  </pre>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">인접 리스트 (Adjacency List)</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`# 인접 리스트 표현
graph = [
    [1, 3],     # 0번 정점과 연결된 정점들
    [0, 2, 3],  # 1번 정점과 연결된 정점들
    [1, 4],     # 2번 정점과 연결된 정점들
    [0, 1, 4],  # 3번 정점과 연결된 정점들
    [2, 3]      # 4번 정점과 연결된 정점들
]

# 0번 정점과 연결된 정점 찾기
for vertex in graph[0]:
    print(f"0번 정점과 연결된 정점: {vertex}")`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="dfs">
              <AccordionTrigger>깊이 우선 탐색 (DFS)</AccordionTrigger>
              <AccordionContent>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`def dfs(graph, start):
    visited = set()
    result = []

    def dfs_helper(vertex):
        # 현재 정점을 방문 처리
        visited.add(vertex)
        result.append(vertex)
        # 인접한 정점들을 재귀적으로 방문
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                dfs_helper(neighbor)

    dfs_helper(start)
    return result

# 예시
graph = [
    [1, 3],     # 0번 정점과 연결된 정점들
    [0, 2, 3],  # 1번 정점과 연결된 정점들
    [1, 4],     # 2번 정점과 연결된 정점들
    [0, 1, 4],  # 3번 정점과 연결된 정점들
    [2, 3]      # 4번 정점과 연결된 정점들
]

print(dfs(graph, 0))  # 출력: [0, 1, 2, 4, 3]`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bfs">
              <AccordionTrigger>너비 우선 탐색 (BFS)</AccordionTrigger>
              <AccordionContent>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    result = []

    while queue:
        vertex = queue.popleft()
        result.append(vertex)
        # 인접한 정점들을 큐에 추가
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return result

# 예시
graph = [
    [1, 3],     # 0번 정점과 연결된 정점들
    [0, 2, 3],  # 1번 정점과 연결된 정점들
    [1, 4],     # 2번 정점과 연결된 정점들
    [0, 1, 4],  # 3번 정점과 연결된 정점들
    [2, 3]      # 4번 정점과 연결된 정점들
]

print(bfs(graph, 0))  # 출력: [0, 1, 3, 2, 4]
`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dijkstra">
              <AccordionTrigger>다익스트라 알고리즘 (Dijkstra's Algorithm)</AccordionTrigger>
              <AccordionContent>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`def dijkstra(graph, start):
    n = len(graph)
    distances = [float('inf')] * n
    visited = [False] * n

    distances[start] = 0

    for _ in range(n - 1):
        # 방문하지 않은 정점 중 최소 거리를 가진 정점 찾기
        min_index = -1
        min_distance = float('inf')
        for j in range(n):
            if not visited[j] and distances[j] < min_distance:
                min_distance = distances[j]
                min_index = j

        if min_index == -1:
            break

        # 최소 거리 정점을 방문 처리
        visited[min_index] = True

        # 인접한 정점들의 거리 업데이트
        for j in range(n):
            if not visited[j] and graph[min_index][j] != 0:
                new_distance = distances[min_index] + graph[min_index][j]
                if new_distance < distances[j]:
                    distances[j] = new_distance

    return distances

# 예시 (인접 행렬, 0은 연결되지 않음을 의미)
graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
]

print(dijkstra(graph, 0))
# 출력: [0, 4, 12, 19, 21, 11, 9, 8, 14]
`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">알고리즘 문제 해결 전략</h2>
        <Card>
          <CardHeader>
            <CardTitle>효과적인 알고리즘 문제 해결 방법</CardTitle>
            <CardDescription>알고리즘 문제를 접근하고 해결하는 체계적인 방법</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>문제 이해</strong>
                <p className="text-muted-foreground mt-1">
                  문제를 정확히 이해하고, 입력과 출력, 제약 조건을 명확히 파악합니다. 예제 입력과 출력을 통해 문제의
                  요구사항을 확인합니다.
                </p>
              </li>
              <li>
                <strong>문제 분석</strong>
                <p className="text-muted-foreground mt-1">
                  문제의 핵심 개념과 패턴을 파악하고, 유사한 문제와 비교합니다. 문제의 크기와 복잡도를 고려하여 적절한
                  알고리즘을 선택합니다.
                </p>
              </li>
              <li>
                <strong>알고리즘 설계</strong>
                <p className="text-muted-foreground mt-1">
                  문제 해결을 위한 알고리즘을 설계합니다. 필요한 자료구조와 알고리즘 패러다임을 선택합니다. 의사 코드나
                  순서도를 작성하여 알고리즘의 흐름을 정리합니다.
                </p>
              </li>
              <li>
                <strong>구현</strong>
                <p className="text-muted-foreground mt-1">
                  설계한 알고리즘을 프로그래밍 언어로 구현합니다. 코드의 가독성과 효율성을 고려하며 작성합니다.
                </p>
              </li>
              <li>
                <strong>테스트 및 디버깅</strong>
                <p className="text-muted-foreground mt-1">
                  예제 입력과 출력을 통해 구현한 알고리즘을 테스트합니다. 경계 조건과 예외 상황을 고려하여 추가 테스트를
                  수행합니다.
                </p>
              </li>
              <li>
                <strong>최적화</strong>
                <p className="text-muted-foreground mt-1">
                  알고리즘의 시간 복잡도와 공간 복잡도를 분석하고, 필요한 경우 최적화합니다. 불필요한 연산이나 중복
                  계산을 제거하여 효율성을 높입니다.
                </p>
              </li>
            </ol>

            <div className="mt-6">
              <h3 className="text-xl font-medium mb-2">문제 해결 팁</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>단순화</strong>: 복잡한 문제는 더 작고 단순한 하위 문제로 나누어 해결합니다.
                </li>
                <li>
                  <strong>패턴 인식</strong>: 유사한 문제의 패턴을 파악하고 적용합니다.
                </li>
                <li>
                  <strong>시각화</strong>: 문제와 알고리즘을 그림이나 다이어그램으로 시각화합니다.
                </li>
                <li>
                  <strong>예제 활용</strong>: 작은 예제를 통해 알고리즘의 동작을 검증합니다.
                </li>
                <li>
                  <strong>역방향 사고</strong>: 출력에서 입력으로 거꾸로 생각해보는 접근법도 유용합니다.
                </li>
                <li>
                  <strong>알고리즘 패러다임 적용</strong>: 분할 정복, 동적 계획법, 탐욕 알고리즘 등의 패러다임을 적절히
                  활용합니다.
                </li>
              </ul>
            </div>

            <Alert className="mt-6">
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>알고리즘 학습 자원</AlertTitle>
              <AlertDescription>
                <p className="mb-2">알고리즘 학습과 문제 해결 능력을 향상시키기 위한 추천 자원:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>알고리즘 문제 해결 사이트: LeetCode, 백준 온라인 저지, 프로그래머스</li>
                  <li>알고리즘 시각화 도구: VisuAlgo, Algorithm Visualizer</li>
                  <li>알고리즘 책: "Introduction to Algorithms"(CLRS), "Algorithms"(Robert Sedgewick)</li>
                  <li>온라인 강의: Coursera의 "Algorithms" 강좌, edX의 "Algorithm Design and Analysis"</li>
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

