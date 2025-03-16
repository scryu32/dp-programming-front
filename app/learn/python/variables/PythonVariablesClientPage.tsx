"use client"

import Link from "next/link"
import { ArrowLeft, FileCode, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PythonVariablesClientPage() {
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
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            난이도 1: 입문
          </Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">변수와 데이터 타입</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          파이썬의 기본 변수 선언 및 데이터 타입에 대해 배웁니다.
        </p>
      </div>

      <Tabs defaultValue="intro" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="intro">소개</TabsTrigger>
          <TabsTrigger value="variables">변수 선언하기</TabsTrigger>
          <TabsTrigger value="numbers">숫자형 데이터</TabsTrigger>
          <TabsTrigger value="strings">문자열 데이터</TabsTrigger>
          <TabsTrigger value="booleans">불리언 데이터</TabsTrigger>
          <TabsTrigger value="input">변수 입출력</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>변수와 데이터 타입 소개</CardTitle>
              <CardDescription>프로그래밍에서 변수와 데이터 타입의 중요성과 파이썬에서의 특징</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">변수란 무엇인가?</h3>
                <p className="text-muted-foreground">
                  변수는 데이터를 저장하는 메모리 공간의 이름입니다. 파이썬에서는 변수를 선언할 때 타입을 명시적으로
                  지정하지 않아도 됩니다. 이를 '동적 타이핑'이라고 하며, 파이썬의 주요 특징 중 하나입니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파이썬의 기본 데이터 타입</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>숫자형(Numeric)</strong>: 정수(int), 실수(float)
                  </li>
                  <li>
                    <strong>문자열(String)</strong>: 텍스트 데이터
                  </li>
                  <li>
                    <strong>불리언(Boolean)</strong>: True 또는 False 값
                  </li>
                  <li>
                    <strong>None</strong>: 값이 없음을 나타내는 특별한 타입
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  학습 목표
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>파이썬에서 변수를 선언하고 사용하는 방법 이해하기</li>
                  <li>다양한 데이터 타입의 특징과 사용법 익히기</li>
                  <li>타입 변환(형변환) 방법 배우기</li>
                  <li>변수 이름 규칙과 좋은 변수명 작성법 이해하기</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="variables">
          <Card>
            <CardHeader>
              <CardTitle>변수 선언하기</CardTitle>
              <CardDescription>파이썬에서 변수를 선언하고 사용하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">변수 선언 문법</h3>
                <p className="text-muted-foreground mb-2">파이썬에서 변수는 다음과 같이 선언합니다:</p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">변수명 = 값</div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">예제 코드</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 변수 선언 예제
name = "홍길동"
age = 25
height = 175.5
is_student = True

# 변수 사용하기
print("이름:", name)
print("나이:", age)
print("키:", height)
print("학생 여부:", is_student)

# 변수 값 변경하기
age = 26
print("변경된 나이:", age)

# 여러 변수 한 번에 선언하기
x, y, z = 10, 20, 30
print(x, y, z)

# 같은 값을 여러 변수에 할당하기
a = b = c = 100
print(a, b, c)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">변수 이름 규칙</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>문자, 숫자, 밑줄(_)로 구성될 수 있습니다.</li>
                  <li>숫자로 시작할 수 없습니다.</li>
                  <li>대소문자를 구분합니다 (name과 Name은 다른 변수).</li>
                  <li>예약어(if, for, while 등)는 변수명으로 사용할 수 없습니다.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파이썬 명명 규칙 (PEP 8)</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    <strong>snake_case</strong>: 일반 변수와 함수명 (예: user_name, calculate_total)
                  </li>
                  <li>
                    <strong>UPPER_CASE</strong>: 상수 (예: MAX_VALUE, PI)
                  </li>
                  <li>
                    <strong>PascalCase</strong>: 클래스명 (예: Person, BankAccount)
                  </li>
                  <li>
                    <strong>_single_leading_underscore</strong>: 내부 사용 변수 (예: _private_var)
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <p className="text-yellow-800">
                  파이썬은 변수를 선언할 때 타입을 명시하지 않지만, 내부적으로는 모든 값이 타입을 가지고 있습니다.
                  type() 함수를 사용하여 변수의 타입을 확인할 수 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="numbers">
          <Card>
            <CardHeader>
              <CardTitle>숫자형 데이터</CardTitle>
              <CardDescription>정수(int), 실수(float) 등 파이썬의 숫자형 데이터 타입</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">정수 (int)</h3>
                <p className="text-muted-foreground mb-2">
                  소수점이 없는 숫자입니다. 파이썬 3에서는 크기 제한이 없습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 정수 예제
a = 10
b = -5
c = 0
big_number = 1234567890123456789

print(a, b, c)
print(big_number)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">실수 (float)</h3>
                <p className="text-muted-foreground mb-2">
                  소수점이 있는 숫자입니다. 과학적 표기법(e 또는 E)도 사용할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 실수 예제
x = 3.14
y = -0.001
z = 1.0

print(x, y, z)

# 실수의 정밀도 한계
print(0.1 + 0.2)     # 0.30000000000000004`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">숫자 연산</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 기본 산술 연산
a, b = 10, 3
print(a + b)    # 덧셈: 13
print(a - b)    # 뺄셈: 7
print(a * b)    # 곱셈: 30
print(a / b)    # 나눗셈: 3.3333...
print(a // b)   # 정수 나눗셈: 3
print(a % b)    # 나머지: 1
print(a ** b)   # 거듭제곱: 1000

# 복합 할당 연산자
x = 5
x += 3          # x = x + 3
print(x)        # 8
x *= 2          # x = x * 2
print(x)        # 16`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">내장 수학 함수</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 내장 수학 함수
print(abs(-5))         # 절대값: 5
print(round(3.7))      # 반올림: 4
print(round(3.14159, 2))  # 소수점 2자리로 반올림: 3.14
print(max(1, 5, 3))    # 최대값: 5
print(min(1, 5, 3))    # 최소값: 1
print(pow(2, 3))       # 거듭제곱: 8

# math 모듈 사용
import math
print(math.sqrt(16))   # 제곱근: 4.0
print(math.pi)         # 원주율: 3.141592...
print(math.floor(3.7)) # 내림: 3
print(math.ceil(3.2))  # 올림: 4`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strings">
          <Card>
            <CardHeader>
              <CardTitle>문자열 데이터</CardTitle>
              <CardDescription>파이썬에서 텍스트를 다루는 문자열(String) 데이터 타입</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">문자열 선언</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬에서 문자열은 작은따옴표('), 큰따옴표("), 삼중따옴표(''' 또는 """)로 선언할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 문자열 선언 방법
s1 = 'Hello'
s2 = "World"
s3 = '''여러 줄의
문자열을
작성할 수 있습니다.'''
s4 = """이것도
여러 줄
문자열입니다."""

print(s1, s2)
print(s3)
print(s4)

# 따옴표 포함하기
quote1 = "He said, 'Python is fun!'"
quote2 = 'She replied, "Yes, it is!"'
print(quote1)
print(quote2)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">문자열 연산</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 문자열 연결 (concatenation)
first_name = "홍"
last_name = "길동"
full_name = first_name + last_name
print(full_name)  # 홍길동

# 문자열 반복
echo = "안녕" * 3
print(echo)  # 안녕안녕안녕

# 문자열 길이
text = "파이썬 프로그래밍"
print(len(text))  # 9`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">문자열 인덱싱과 슬라이싱</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 문자열 인덱싱 (0부터 시작)
text = "Python"
print(text[0])    # P
print(text[1])    # y
print(text[-1])   # n (마지막 문자)
print(text[-2])   # o (뒤에서 두 번째 문자)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">문자열 메서드</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 대소문자 변환
text = "Python Programming"
print(text.upper())        # PYTHON PROGRAMMING
print(text.lower())        # python programming

# 문자열 검색
print(text.find("Pro"))    # 7 (첫 번째 위치)
print(text.count("P"))     # 2 (개수)
print("Pro" in text)       # True (포함 여부)

# 문자열 대체
print(text.replace("Python", "Java"))  # Java Programming`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">문자열 포맷팅</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# % 연산자 사용 (오래된 방식)
name = "홍길동"
age = 25
print("이름: %s, 나이: %d" % (name, age))

# f-string 사용 
print(f"이름: {name}, 나이: {age}")
print(f"내년 나이: {age + 1}")

# 숫자 포맷팅
pi = 3.14159
print(f"원주율: {pi:.2f}")  # 소수점 2자리
print(f"큰 숫자: {1000000:,}")  # 천 단위 구분자 (1,000,000)`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booleans">
          <Card>
            <CardHeader>
              <CardTitle>불리언 데이터</CardTitle>
              <CardDescription>참(True)과 거짓(False)을 나타내는 불리언(Boolean) 데이터 타입</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">불리언 값</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬에서 불리언 값은 True와 False 두 가지입니다. 첫 글자가 대문자임에 주의하세요.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 불리언 값 선언
is_active = True
is_completed = False

print(is_active)      # True
print(is_completed)   # False
print(type(is_active))  # <class 'bool'>`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">비교 연산자</h3>
                <p className="text-muted-foreground mb-2">비교 연산자는 두 값을 비교하여 불리언 값을 반환합니다.</p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 비교 연산자
x, y = 10, 5

print(x == y)    # 같음: False
print(x != y)    # 다름: True
print(x > y)     # 큼: True
print(x < y)     # 작음: False
print(x >= y)    # 크거나 같음: True
print(x <= y)    # 작거나 같음: False

# 문자열 비교
print("apple" == "apple")  # True
print("apple" < "banana")  # True (사전순 비교)
print("apple" > "Apple")   # True (ASCII 값 비교, 소문자가 대문자보다 큼)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">논리 연산자</h3>
                <p className="text-muted-foreground mb-2">
                  논리 연산자는 불리언 값을 조합하여 새로운 불리언 값을 생성합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 논리 연산자
a, b = True, False

print(a and b)    # 논리곱(AND): False
print(a or b)     # 논리합(OR): True
print(not a)      # 논리부정(NOT): False
print(not b)      # 논리부정(NOT): True

# 복합 논리 표현식
x, y = 10, 5
print((x > 5) and (y < 10))  # True
print((x < 5) or (y > 3))    # True
print(not (x == y))          # True`}
                </pre>
              </div>

            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="input">
          <Card>
            <CardHeader>
              <CardTitle>변수 입출력</CardTitle>
              <CardDescription>변수를 입력 받는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">input 문법</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬에서 문자를 입력 받기 위해서 input을 사용합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# input() 문법 사용 예제
a = input() # 1 입력
print(a) # 1

b = input("문자를 입력하세요:") # 괄호 안에 문자를 입력해도 상관없음
print(b) # abc
`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">입력받은 변수의 타입</h3>
                <p className="text-muted-foreground mb-2">input으로 받은 변수는 문자열입니다. 덧셈을 할때 주의하세요.</p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 시험 포인트
a = input("숫자를 입력해주세요: ") # 5
b = 10

print(type(a)) # <class 'string'>
print(a + b) # error

`}
                </pre>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 입력받은 문자를 정수로 변환
a = int(input("숫자를 입력해주세요: ")) # 5
b = 10

print(a + b) # 15

`}
                </pre>
              </div>
              
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <FileCode className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">실습 과제</h2>
        </div>
        <p className="mb-4">다음 실습 과제를 통해 변수와 데이터 타입에 대한 이해를 높여보세요.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">기본 변수 실습</CardTitle>
              <CardDescription>다양한 데이터 타입의 변수를 선언하고 출력해보세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                자신의 이름, 나이, 키, 취미를 저장하는 변수를 만들고 적절한 데이터 타입을 사용하여 출력하세요.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/problems/python/variables-basic" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  문제 풀기
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">데이터 타입 변환</CardTitle>
              <CardDescription>다양한 데이터 타입 간의 변환을 연습해보세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                문자열, 정수, 실수 간의 형변환을 수행하고 결과를 확인해보세요.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/problems/python/type-conversion" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  문제 풀기
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

