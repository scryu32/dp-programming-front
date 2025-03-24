"use client"

import Link from "next/link"
import { ArrowLeft, FileCode, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PythonFunctionsClientPage() {
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">함수</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          함수를 정의하고 사용하는 방법, 매개변수와 반환값에 대해 배웁니다.
        </p>
      </div>

      <Tabs defaultValue="intro" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="intro">소개</TabsTrigger>
          <TabsTrigger value="define">함수 정의하기</TabsTrigger>
          <TabsTrigger value="params">매개변수와 인자</TabsTrigger>
          <TabsTrigger value="return">반환값</TabsTrigger>
          <TabsTrigger value="default">기본 매개변수</TabsTrigger>
          <TabsTrigger value="recursion">재귀함수</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>함수 소개</CardTitle>
              <CardDescription>프로그래밍에서 함수의 중요성과 파이썬에서의 특징</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">함수란 무엇인가?</h3>
                <p className="text-muted-foreground">
                  함수는 특정 작업을 수행하는 코드 블록으로, 이름을 가지고 있으며 필요할 때마다 호출하여 사용할 수
                  있습니다. 함수를 사용하면 코드의 재사용성을 높이고, 프로그램을 더 모듈화하여 유지보수가 쉬워집니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">함수의 장점</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>코드 재사용</strong>: 같은 코드를 여러 번 작성할 필요 없이 함수로 정의하고 호출하여 사용
                  </li>
                  <li>
                    <strong>모듈화</strong>: 프로그램을 기능별로 나누어 관리하기 쉽게 함
                  </li>
                  <li>
                    <strong>추상화</strong>: 복잡한 코드를 함수로 감추고 간단한 인터페이스만 제공
                  </li>
                  <li>
                    <strong>유지보수</strong>: 코드 수정이 필요할 때 해당 함수만 수정하면 됨
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  학습 목표
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>파이썬에서 함수를 정의하고 호출하는 방법 이해하기</li>
                  <li>매개변수와 인자의 개념과 사용법 익히기</li>
                  <li>함수의 반환값 활용하기</li>
                  <li>기본 매개변수와 가변 인자 사용법 배우기</li>
                  <li>재귀 함수의 개념과 활용법 이해하기</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="define">
          <Card>
            <CardHeader>
              <CardTitle>함수 정의하기</CardTitle>
              <CardDescription>파이썬에서 함수를 정의하고 호출하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">함수 정의 문법</h3>
                <p className="text-muted-foreground mb-2">파이썬에서 함수는 다음과 같이 정의합니다:</p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def 함수이름(매개변수1, 매개변수2, ...):
    # 함수 본문
    # 실행할 코드
    return 반환값  # 선택사항`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">간단한 함수 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 인사말을 출력하는 함수
def say_hello():
    print("안녕하세요!")

# 함수 호출하기
say_hello()  # 출력: 안녕하세요!

# 이름을 받아 인사하는 함수
def greet(name):
    print(f"{name}님, 안녕하세요!")

# 함수 호출하기
greet("홍길동")  # 출력: 홍길동님, 안녕하세요!`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">함수 호출 과정</h3>
                <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                  <li>함수 이름과 괄호를 사용하여 함수를 호출합니다.</li>
                  <li>필요한 경우 인자(arguments)를 괄호 안에 전달합니다.</li>
                  <li>함수 본문의 코드가 실행됩니다.</li>
                  <li>return 문을 만나면 값을 반환하고 함수 실행을 종료합니다.</li>
                  <li>return 문이 없거나 값 없이 return만 있으면 None을 반환합니다.</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">함수 문서화 (Docstring)</h3>
                <p className="text-muted-foreground mb-2">
                  함수의 목적과 사용법을 설명하는 문서를 작성하는 것이 좋습니다. 파이썬에서는 함수 본문 시작 부분에 삼중
                  따옴표(''' 또는 """)로 둘러싸인 문자열을 사용합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def calculate_area(radius):
    """
    원의 넓이를 계산합니다.
    
    매개변수:
        radius (float): 원의 반지름
        
    반환값:
        float: 원의 넓이
    """
    import math
    return math.pi * radius ** 2

# 함수 호출
area = calculate_area(5)
print(f"반지름이 5인 원의 넓이: {area:.2f}")

# 함수 문서 확인
help(calculate_area)`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="params">
          <Card>
            <CardHeader>
              <CardTitle>매개변수와 인자</CardTitle>
              <CardDescription>함수에 데이터를 전달하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">매개변수와 인자의 차이</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>매개변수(Parameter)</strong>는 함수를 정의할 때 사용하는 변수이고,
                  <strong>인자(Argument)</strong>는 함수를 호출할 때 전달하는 실제 값입니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def add(a, b):  # a와 b는 매개변수(parameter)
    return a + b

result = add(3, 5)  # 3과 5는 인자(argument)
print(result)  # 출력: 8`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">위치 인자(Positional Arguments)</h3>
                <p className="text-muted-foreground mb-2">
                  함수 호출 시 매개변수의 순서대로 인자를 전달하는 방식입니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def describe_person(name, age, job):
    print(f"이름: {name}, 나이: {age}, 직업: {job}")

# 위치 인자 사용
describe_person("홍길동", 30, "개발자")  # 출력: 이름: 홍길동, 나이: 30, 직업: 개발자`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">키워드 인자(Keyword Arguments)</h3>
                <p className="text-muted-foreground mb-2">
                  매개변수의 이름을 명시하여 인자를 전달하는 방식입니다. 순서에 상관없이 사용할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def describe_person(name, age, job):
    print(f"이름: {name}, 나이: {age}, 직업: {job}")

# 키워드 인자 사용
describe_person(job="교사", name="김철수", age=35)  # 출력: 이름: 김철수, 나이: 35, 직업: 교사

# 위치 인자와 키워드 인자 혼합 사용
describe_person("박영희", job="의사", age=28)  # 출력: 이름: 박영희, 나이: 28, 직업: 의사`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">가변 인자(Variable-length Arguments)</h3>
                <p className="text-muted-foreground mb-2">개수가 정해지지 않은 여러 인자를 받을 수 있는 방법입니다.</p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# *args: 여러 위치 인자를 튜플로 받음
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))  # 출력: 6
print(sum_all(1, 2, 3, 4, 5))  # 출력: 15

# **kwargs: 여러 키워드 인자를 딕셔너리로 받음
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="홍길동", age=30, city="서울")
# 출력:
# name: 홍길동
# age: 30
# city: 서울`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <p className="text-yellow-800">
                  함수 정의 시 매개변수 순서는 일반 매개변수, 기본값 매개변수, *args, **kwargs 순서로 작성해야 합니다.
                  위치 인자는 키워드 인자 앞에 와야 합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="return">
          <Card>
            <CardHeader>
              <CardTitle>반환값</CardTitle>
              <CardDescription>함수에서 결과를 반환하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">return 문</h3>
                <p className="text-muted-foreground mb-2">
                  함수의 실행 결과를 호출한 곳으로 돌려주기 위해 return 문을 사용합니다. return 문을 만나면 함수의
                  실행이 즉시 종료됩니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def square(x):
    return x * x

result = square(5)
print(result)  # 출력: 25

# return 문이 없는 함수
def greet(name):
    print(f"안녕하세요, {name}님!")

value = greet("홍길동")  # 출력: 안녕하세요, 홍길동님!
print(value)  # 출력: None (반환값이 없으면 None을 반환)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">여러 값 반환하기</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬에서는 쉼표로 구분된 여러 값을 반환할 수 있으며, 이는 튜플로 반환됩니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def get_min_max(numbers):
    return min(numbers), max(numbers)

min_val, max_val = get_min_max([1, 5, 3, 9, 2])
print(f"최소값: {min_val}, 최대값: {max_val}")  # 출력: 최소값: 1, 최대값: 9

# 튜플로 받기
result = get_min_max([1, 5, 3, 9, 2])
print(result)  # 출력: (1, 9)
print(type(result))  # 출력: <class 'tuple'>`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">조건부 반환</h3>
                <p className="text-muted-foreground mb-2">조건에 따라 다른 값을 반환할 수 있습니다.</p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def get_grade(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'

print(get_grade(85))  # 출력: B
print(get_grade(92))  # 출력: A`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">함수형 프로그래밍</h3>
                <p className="text-muted-foreground mb-2">
                  함수가 값을 반환하는 특성을 활용하여 함수를 변수에 할당하거나 다른 함수의 인자로 전달할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 함수를 변수에 할당
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# 함수를 변수에 할당
operation = add
print(operation(5, 3))  # 출력: 8

operation = subtract
print(operation(5, 3))  # 출력: 2

# 함수를 인자로 전달
def apply_operation(func, a, b):
    return func(a, b)

print(apply_operation(add, 5, 3))  # 출력: 8
print(apply_operation(subtract, 5, 3))  # 출력: 2`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="default">
          <Card>
            <CardHeader>
              <CardTitle>기본 매개변수</CardTitle>
              <CardDescription>매개변수에 기본값을 설정하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">기본 매개변수 정의</h3>
                <p className="text-muted-foreground mb-2">
                  함수 정의 시 매개변수에 기본값을 지정하면, 함수 호출 시 해당 인자를 생략할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def greet(name, greeting="안녕하세요"):
    print(f"{greeting}, {name}님!")

# 모든 인자 전달
greet("홍길동", "반갑습니다")  # 출력: 반갑습니다, 홍길동님!

# 기본값 사용
greet("김철수")  # 출력: 안녕하세요, 김철수님!`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">여러 기본 매개변수</h3>
                <p className="text-muted-foreground mb-2">
                  여러 매개변수에 기본값을 지정할 수 있으며, 기본값이 있는 매개변수는 기본값이 없는 매개변수 뒤에
                  위치해야 합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def create_profile(name, age, city="서울", country="한국"):
    return {
        "name": name,
        "age": age,
        "city": city,
        "country": country
    }

# 모든 인자 전달
profile1 = create_profile("홍길동", 30, "부산", "한국")
print(profile1)  # {'name': '홍길동', 'age': 30, 'city': '부산', 'country': '한국'}

# 일부 기본값 사용
profile2 = create_profile("김철수", 25, "대전")
print(profile2)  # {'name': '김철수', 'age': 25, 'city': '대전', 'country': '한국'}

# 모든 기본값 사용
profile3 = create_profile("이영희", 28)
print(profile3)  # {'name': '이영희', 'age': 28, 'city': '서울', 'country': '한국'}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">키워드 인자와 함께 사용</h3>
                <p className="text-muted-foreground mb-2">
                  기본 매개변수는 키워드 인자와 함께 사용하면 더 유연하게 함수를 호출할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def create_profile(name, age, city="서울", country="한국"):
    return {
        "name": name,
        "age": age,
        "city": city,
        "country": country
    }

# 키워드 인자로 특정 매개변수만 변경
profile = create_profile("박지민", 22, country="미국")
print(profile)  # {'name': '박지민', 'age': 22, 'city': '서울', 'country': '미국'}`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <p className="text-yellow-800">
                  기본 매개변수의 값은 함수가 정의될 때 한 번만 평가됩니다. 특히 리스트나 딕셔너리 같은 가변 객체를
                  기본값으로 사용할 때 주의해야 합니다.
                </p>
                <pre className="bg-yellow-50 p-4 rounded-md font-mono text-sm overflow-x-auto text-yellow-800">
                  {`# 잘못된 예시
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item("사과"))  # ['사과']
print(add_item("바나나"))  # ['사과', '바나나'] - 예상과 다름!

# 올바른 예시
def add_item_correct(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item_correct("사과"))  # ['사과']
print(add_item_correct("바나나"))  # ['바나나']`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recursion">
          <Card>
            <CardHeader>
              <CardTitle>재귀함수</CardTitle>
              <CardDescription>함수가 자기 자신을 호출하는 방식</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">재귀함수란?</h3>
                <p className="text-muted-foreground mb-2">
                  재귀함수는 함수 내부에서 자기 자신을 다시 호출하는 함수입니다. 복잡한 문제를 동일한 구조의 더 작은
                  문제로 나누어 해결하는 방식입니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">재귀함수의 구조</h3>
                <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                  <li>
                    <strong>기본 케이스(Base Case)</strong>: 재귀 호출을 멈추는 조건
                  </li>
                  <li>
                    <strong>재귀 케이스(Recursive Case)</strong>: 자기 자신을 호출하는 부분
                  </li>
                </ol>
                <p className="text-muted-foreground mt-2">
                  기본 케이스가 없으면 무한 재귀에 빠져 스택 오버플로우(Stack Overflow) 오류가 발생합니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">팩토리얼 계산 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def factorial(n):
    # 기본 케이스
    if n == 0 or n == 1:
        return 1
    # 재귀 케이스
    else:
        return n * factorial(n - 1)

print(factorial(5))  # 출력: 120 (5 * 4 * 3 * 2 * 1)

# 실행 과정
# factorial(5)
# = 5 * factorial(4)
# = 5 * (4 * factorial(3))
# = 5 * (4 * (3 * factorial(2)))
# = 5 * (4 * (3 * (2 * factorial(1))))
# = 5 * (4 * (3 * (2 * 1)))
# = 5 * (4 * (3 * 2))
# = 5 * (4 * 6)
# = 5 * 24
# = 120`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">피보나치 수열 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def fibonacci(n):
    # 기본 케이스
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    # 재귀 케이스
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))  # 출력: 8

# 실행 과정 (fibonacci(4)의 경우)
# fibonacci(4)
# = fibonacci(3) + fibonacci(2)
# = (fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))
# = ((fibonacci(1) + fibonacci(0)) + 1) + (1 + 0)
# = ((1 + 0) + 1) + (1 + 0)
# = (1 + 1) + 1 + 0
# = 2 + 1 + 0
# = 3`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">재귀함수의 장단점</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-1">장점</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>코드가 간결하고 이해하기 쉬움</li>
                      <li>복잡한 문제를 단순화할 수 있음</li>
                      <li>트리 구조와 같은 재귀적 데이터 구조에 적합</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">단점</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>메모리 사용량이 많음 (함수 호출 스택)</li>
                      <li>실행 속도가 반복문보다 느릴 수 있음</li>
                      <li>무한 재귀에 빠질 위험이 있음</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">최적화 기법</h3>
                <p className="text-yellow-800 mb-2">
                  재귀함수의 성능을 개선하기 위해 메모이제이션(Memoization) 기법을 사용할 수 있습니다. 이미 계산한
                  결과를 저장해두고 재사용하는 방식입니다.
                </p>
                <pre className="bg-yellow-50 p-4 rounded-md font-mono text-sm overflow-x-auto text-yellow-800">
                  {`# 메모이제이션을 사용한 피보나치 함수
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
        return memo[n]

print(fibonacci_memo(30))  # 훨씬 빠르게 계산됨`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

