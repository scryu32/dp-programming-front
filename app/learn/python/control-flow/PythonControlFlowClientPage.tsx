"use client"

import Link from "next/link"
import { ArrowLeft, FileCode, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PythonControlFlowClientPage() {
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">제어문과 반복문</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          파이썬의 조건문과 반복문을 통해 프로그램의 흐름을 제어하는 방법을 배웁니다.
        </p>
      </div>

      <Tabs defaultValue="intro" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="intro">소개</TabsTrigger>
          <TabsTrigger value="if-else">if-else 조건문</TabsTrigger>
          <TabsTrigger value="for-loops">for 반복문</TabsTrigger>
          <TabsTrigger value="while-loops">while 반복문</TabsTrigger>
          <TabsTrigger value="break-continue">break와 continue</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>제어문과 반복문 소개</CardTitle>
              <CardDescription>프로그램의 흐름을 제어하는 방법과 파이썬에서의 특징</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">제어문이란?</h3>
                <p className="text-muted-foreground">
                  제어문은 프로그램의 실행 흐름을 제어하는 구문입니다. 조건에 따라 코드를 실행하거나 건너뛰는 조건문과
                  특정 코드를 반복적으로 실행하는 반복문으로 나눌 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파이썬의 제어문 종류</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>조건문</strong>: if, elif, else
                  </li>
                  <li>
                    <strong>반복문</strong>: for, while
                  </li>
                  <li>
                    <strong>제어 키워드</strong>: break, continue, pass
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  학습 목표
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>조건문을 사용하여 상황에 따라 다른 코드를 실행하는 방법 이해하기</li>
                  <li>for 반복문을 사용하여 시퀀스를 순회하는 방법 배우기</li>
                  <li>while 반복문을 사용하여 조건에 따라 반복하는 방법 익히기</li>
                  <li>break와 continue를 사용하여 반복문의 흐름을 제어하는 방법 학습하기</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="if-else">
          <Card>
            <CardHeader>
              <CardTitle>if-else 조건문</CardTitle>
              <CardDescription>조건에 따라 다른 코드를 실행하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">if 문법</h3>
                <p className="text-muted-foreground mb-2">파이썬에서 조건문은 다음과 같이 작성합니다:</p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  if 조건식:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;실행할 코드
                  <br />
                  elif 다른조건식:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;다른 조건일 때 실행할 코드
                  <br />
                  else:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;위 조건이 모두 아닐 때 실행할 코드
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">기본 if-else 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 기본 if-else 예제
age = 18

if age >= 18:
    print("성인입니다.")
else:
    print("미성년자입니다.")

# 출력: 성인입니다.`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">if-elif-else 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# if-elif-else 예제
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"점수: {score}, 학점: {grade}")
# 출력: 점수: 85, 학점: B`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">중첩 조건문</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 중첩 조건문 예제
age = 25
has_license = True

if age >= 18:
    print("성인입니다.")
    if has_license:
        print("운전이 가능합니다.")
    else:
        print("운전면허가 필요합니다.")
else:
    print("미성년자는 운전할 수 없습니다.")

# 출력:
# 성인입니다.
# 운전이 가능합니다.`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">논리 연산자와 조건문</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 논리 연산자를 사용한 조건문
age = 25
income = 3000000

if age > 20 and income > 2000000:
    print("대출 신청이 가능합니다.")
else:
    print("대출 신청 조건을 충족하지 못합니다.")

# 출력: 대출 신청이 가능합니다.

# or 연산자 사용
has_credit_card = False
has_cash = True

if has_credit_card or has_cash:
    print("결제가 가능합니다.")
else:
    print("결제 수단이 필요합니다.")

# 출력: 결제가 가능합니다.`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">조건부 표현식 (삼항 연산자)</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 조건부 표현식 (삼항 연산자)
age = 20
status = "성인" if age >= 18 else "미성년자"
print(status)  # 출력: 성인

# 일반 if-else와 비교
if age >= 18:
    status = "성인"
else:
    status = "미성년자"
print(status)  # 출력: 성인`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <p className="text-yellow-800">
                  파이썬에서는 들여쓰기가 코드 블록을 구분하는 중요한 요소입니다. 조건문 내부의 코드는 반드시 일관된
                  들여쓰기를 사용해야 합니다. 보통 4칸 공백이나 탭을 사용합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="for-loops">
          <Card>
            <CardHeader>
              <CardTitle>for 반복문</CardTitle>
              <CardDescription>시퀀스를 순회하며 반복 작업을 수행하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">for 문법</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬의 for 반복문은 시퀀스(리스트, 튜플, 문자열 등)의 각 항목을 순회합니다:
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  for 변수 in 시퀀스:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;반복할 코드
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">기본 for 반복문</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 리스트를 순회하는 for 반복문
fruits = ["사과", "바나나", "체리"]
for fruit in fruits:
    print(fruit)

# 출력:
# 사과
# 바나나
# 체리`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">range() 함수 사용</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# range() 함수를 사용한 for 반복문
for i in range(5):  # 0부터 4까지
    print(i)

# 출력:
# 0
# 1
# 2
# 3
# 4

# 시작, 종료, 스텝 지정
for i in range(2, 10, 2):  # 2부터 8까지 2씩 증가
    print(i)

# 출력:
# 2
# 4
# 6
# 8`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">문자열 순회</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 문자열을 순회하는 for 반복문
message = "Python"
for char in message:
    print(char)

# 출력:
# P
# y
# t
# h
# o
# n`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">인덱스와 함께 순회하기</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# enumerate() 함수를 사용하여 인덱스와 함께 순회
fruits = ["사과", "바나나", "체리"]
for index, fruit in enumerate(fruits):
    print(f"{index}번째 과일: {fruit}")

# 출력:
# 0번째 과일: 사과
# 1번째 과일: 바나나
# 2번째 과일: 체리

# 시작 인덱스 지정
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}번째 과일: {fruit}")

# 출력:
# 1번째 과일: 사과
# 2번째 과일: 바나나
# 3번째 과일: 체리`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">중첩 for 반복문</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 중첩 for 반복문
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
    print("-----")

# 출력:
# 1 x 1 = 1
# 1 x 2 = 2
# 1 x 3 = 3
# -----
# 2 x 1 = 2
# 2 x 2 = 4
# 2 x 3 = 6
# -----
# 3 x 1 = 3
# 3 x 2 = 6
# 3 x 3 = 9
# -----`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">리스트 컴프리헨션</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 리스트 컴프리헨션 (간결한 리스트 생성 방법)
squares = [x**2 for x in range(1, 6)]
print(squares)  # 출력: [1, 4, 9, 16, 25]

# 조건부 리스트 컴프리헨션
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)  # 출력: [4, 16, 36, 64, 100]

# 일반 for 반복문으로 작성한 경우
squares = []
for x in range(1, 6):
    squares.append(x**2)
print(squares)  # 출력: [1, 4, 9, 16, 25]`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="while-loops">
          <Card>
            <CardHeader>
              <CardTitle>while 반복문</CardTitle>
              <CardDescription>조건이 참인 동안 반복 작업을 수행하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">while 문법</h3>
                <p className="text-muted-foreground mb-2">
                  while 반복문은 조건이 참인 동안 코드 블록을 반복적으로 실행합니다:
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  while 조건식:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;반복할 코드
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">기본 while 반복문</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 기본 while 반복문
count = 1
while count <= 5:
    print(count)
    count += 1  # count = count + 1

# 출력:
# 1
# 2
# 3
# 4
# 5`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">조건에 따른 반복</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 사용자 입력에 따른 반복
answer = ""
while answer != "quit":
    answer = input("계속하려면 아무 키나 누르고, 종료하려면 'quit'를 입력하세요: ")
    print(f"입력한 값: {answer}")

print("프로그램이 종료되었습니다.")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">무한 루프와 break</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 무한 루프와 break 사용
while True:
    answer = input("종료하려면 'quit'를 입력하세요: ")
    if answer == "quit":
        break
    print(f"입력한 값: {answer}")

print("프로그램이 종료되었습니다.")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">while과 else</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# while과 else 사용
count = 1
while count <= 5:
    print(count)
    count += 1
else:
    print("반복이 정상적으로 완료되었습니다.")

# 출력:
# 1
# 2
# 3
# 4
# 5
# 반복이 정상적으로 완료되었습니다.

# break로 종료된 경우 else 블록은 실행되지 않음
count = 1
while count <= 5:
    print(count)
    if count == 3:
        break
    count += 1
else:
    print("이 메시지는 출력되지 않습니다.")

# 출력:
# 1
# 2
# 3`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">for vs while</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# for 반복문으로 구현
for i in range(1, 6):
    print(i)

# while 반복문으로 구현
i = 1
while i <= 5:
    print(i)
    i += 1

# 두 코드 모두 1부터 5까지 출력`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <p className="text-yellow-800">
                  while 반복문을 사용할 때는 무한 루프에 빠지지 않도록 주의해야 합니다. 반복문 내에서 조건이 언젠가는
                  거짓이 되도록 조건을 변경하는 코드가 필요합니다. 또한 break를 사용하여 필요할 때 반복문을 탈출할 수
                  있습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="break-continue">
          <Card>
            <CardHeader>
              <CardTitle>break와 continue</CardTitle>
              <CardDescription>반복문의 흐름을 제어하는 키워드</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">break 문</h3>
                <p className="text-muted-foreground mb-2">
                  break 문은 반복문을 즉시 종료하고 반복문 다음 코드로 이동합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# for 반복문에서 break 사용
for i in range(1, 10):
    if i == 5:
        print("5에서 반복문 종료")
        break
    print(i)

print("반복문 종료 후")

# 출력:
# 1
# 2
# 3
# 4
# 5에서 반복문 종료
# 반복문 종료 후`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">continue 문</h3>
                <p className="text-muted-foreground mb-2">
                  continue 문은 현재 반복을 건너뛰고 다음 반복으로 진행합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# for 반복문에서 continue 사용
for i in range(1, 6):
    if i == 3:
        print("3은 건너뜁니다.")
        continue
    print(i)

print("반복문 종료 후")

# 출력:
# 1
# 2
# 3은 건너뜁니다.
# 4
# 5
# 반복문 종료 후`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">while 반복문에서의 사용</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# while 반복문에서 break 사용
count = 0
while True:
    count += 1
    if count > 5:
        print("count가 5를 초과하여 반복문 종료")
        break
    print(f"현재 count: {count}")

# 출력:
# 현재 count: 1
# 현재 count: 2
# 현재 count: 3
# 현재 count: 4
# 현재 count: 5
# count가 5를 초과하여 반복문 종료

# while 반복문에서 continue 사용
count = 0
while count < 5:
    count += 1
    if count == 3:
        print("count가 3일 때는 출력을 건너뜁니다.")
        continue
    print(f"현재 count: {count}")

# 출력:
# 현재 count: 1
# 현재 count: 2
# count가 3일 때는 출력을 건너뜁니다.
# 현재 count: 4
# 현재 count: 5`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">중첩 반복문에서의 break와 continue</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 중첩 반복문에서 break
for i in range(1, 4):
    print(f"외부 반복: {i}")
    for j in range(1, 4):
        if j == 2:
            print(f"  j가 {j}일 때 내부 반복문 종료")
            break
        print(f"  내부 반복: {j}")

# 출력:
# 외부 반복: 1
#   내부 반복: 1
#   j가 2일 때 내부 반복문 종료
# 외부 반복: 2
#   내부 반복: 1
#   j가 2일 때 내부 반복문 종료
# 외부 반복: 3
#   내부 반복: 1
#   j가 2일 때 내부 반복문 종료`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">pass 문</h3>
                <p className="text-muted-foreground mb-2">
                  pass 문은 아무 작업도 수행하지 않는 자리 표시자입니다. 구문적으로 문장이 필요하지만 특별한 동작이
                  필요하지 않을 때 사용합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# pass 문 사용 예제
for i in range(1, 6):
    if i == 3:
        # 나중에 구현할 예정
        pass
    else:
        print(i)

# 출력:
# 1
# 2
# 4
# 5`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">실용적인 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 사용자 입력 검증
while True:
    age = input("나이를 입력하세요 (종료하려면 'q' 입력): ")
    
    if age == 'q':
        print("프로그램을 종료합니다.")
        break
    
    try:
        age = int(age)
    except ValueError:
        print("숫자를 입력해주세요.")
        continue
    
    if age < 0:
        print("나이는 음수가 될 수 없습니다.")
        continue
    
    if age >= 18:
        print("성인입니다.")
    else:
        print("미성년자입니다.")`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

