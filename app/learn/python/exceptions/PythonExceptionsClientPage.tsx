"use client"

import Link from "next/link"
import { ArrowLeft, FileCode, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PythonExceptionsClientPage() {
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
          <Badge variant="outline" className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            난이도 3: 중급
          </Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">예외 처리</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          try-except 블록을 사용하여 오류를 처리하는 방법을 배웁니다.
        </p>
      </div>

      <Tabs defaultValue="intro" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="intro">소개</TabsTrigger>
          <TabsTrigger value="concept">예외의 개념</TabsTrigger>
          <TabsTrigger value="try-except">try-except 구문</TabsTrigger>
          <TabsTrigger value="multiple">여러 예외 처리하기</TabsTrigger>
          <TabsTrigger value="finally">finally 블록</TabsTrigger>
          <TabsTrigger value="custom">사용자 정의 예외</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>예외 처리 소개</CardTitle>
              <CardDescription>프로그램 실행 중 발생하는 오류를 처리하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">예외 처리란?</h3>
                <p className="text-muted-foreground">
                  예외 처리는 프로그램 실행 중 발생할 수 있는 오류 상황을 대비하여 코드를 작성하는 방법입니다. 적절한
                  예외 처리를 통해 프로그램이 갑자기 중단되는 것을 방지하고, 오류 상황에서도 정상적인 흐름을 유지할 수
                  있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">예외 처리의 중요성</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>프로그램 안정성</strong>: 예상치 못한 오류로 인한 프로그램 중단 방지
                  </li>
                  <li>
                    <strong>사용자 경험</strong>: 오류 발생 시 사용자에게 친절한 메시지 제공
                  </li>
                  <li>
                    <strong>디버깅 용이성</strong>: 오류의 원인을 파악하고 로깅하는 데 도움
                  </li>
                  <li>
                    <strong>자원 관리</strong>: 오류 발생 시에도 파일, 네트워크 연결 등의 자원을 안전하게 정리
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  학습 목표
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>파이썬에서 예외의 개념과 종류 이해하기</li>
                  <li>try-except 구문을 사용하여 예외 처리하기</li>
                  <li>여러 종류의 예외를 구분하여 처리하는 방법 배우기</li>
                  <li>finally 블록을 사용하여 자원을 정리하는 방법 익히기</li>
                  <li>사용자 정의 예외를 만들고 활용하는 방법 이해하기</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="concept">
          <Card>
            <CardHeader>
              <CardTitle>예외의 개념</CardTitle>
              <CardDescription>파이썬에서 예외란 무엇이며, 어떤 종류가 있는지 알아봅니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">예외(Exception)란?</h3>
                <p className="text-muted-foreground mb-2">
                  예외는 프로그램 실행 중 발생하는 오류 상황을 나타내는 객체입니다. 파이썬에서는 오류가 발생하면 해당
                  오류에 대한 예외 객체를 생성하고, 이를 처리하지 않으면 프로그램이 중단됩니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">오류와 예외의 차이</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    <strong>구문 오류(Syntax Error)</strong>: 코드 작성 규칙을 위반하여 발생하는 오류로, 프로그램이
                    실행되기 전에 발견됩니다.
                  </li>
                  <li>
                    <strong>예외(Exception)</strong>: 문법적으로는 올바르지만 실행 중에 발생하는 오류로, 적절히 처리하면
                    프로그램을 계속 실행할 수 있습니다.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">주요 내장 예외</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>TypeError</strong>: 잘못된 타입의 연산이나 함수 호출
                      </li>
                      <li>
                        <strong>ValueError</strong>: 올바른 타입이지만 부적절한 값
                      </li>
                      <li>
                        <strong>NameError</strong>: 정의되지 않은 변수 참조
                      </li>
                      <li>
                        <strong>IndexError</strong>: 시퀀스의 인덱스 범위 초과
                      </li>
                      <li>
                        <strong>KeyError</strong>: 딕셔너리에 존재하지 않는 키 접근
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>FileNotFoundError</strong>: 존재하지 않는 파일 접근
                      </li>
                      <li>
                        <strong>ZeroDivisionError</strong>: 0으로 나누기 시도
                      </li>
                      <li>
                        <strong>AttributeError</strong>: 객체에 존재하지 않는 속성 참조
                      </li>
                      <li>
                        <strong>ImportError</strong>: 모듈 임포트 실패
                      </li>
                      <li>
                        <strong>IOError</strong>: 입출력 작업 실패
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">예외 계층 구조</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬의 모든 예외는 BaseException 클래스에서 파생됩니다. 일반적인 예외는 Exception 클래스에서
                  파생되며, 사용자 정의 예외도 Exception 클래스를 상속받아 만듭니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`BaseException
 ├── SystemExit
 ├── KeyboardInterrupt
 ├── GeneratorExit
 └── Exception
      ├── StopIteration
      ├── ArithmeticError
      │    ├── FloatingPointError
      │    ├── OverflowError
      │    └── ZeroDivisionError
      ├── AssertionError
      ├── AttributeError
      ├── BufferError
      ├── EOFError
      ├── ImportError
      │    └── ModuleNotFoundError
      ├── LookupError
      │    ├── IndexError
      │    └── KeyError
      ├── MemoryError
      ├── NameError
      │    └── UnboundLocalError
      ├── OSError
      │    ├── BlockingIOError
      │    ├── ChildProcessError
      │    ├── ConnectionError
      │    ├── FileExistsError
      │    ├── FileNotFoundError
      │    ├── InterruptedError
      │    ├── IsADirectoryError
      │    ├── NotADirectoryError
      │    ├── PermissionError
      │    ├── ProcessLookupError
      │    └── TimeoutError
      ├── ReferenceError
      ├── RuntimeError
      │    ├── NotImplementedError
      │    └── RecursionError
      ├── SyntaxError
      │    └── IndentationError
      │         └── TabError
      ├── SystemError
      ├── TypeError
      ├── ValueError
      │    └── UnicodeError
      └── Warning
           ├── DeprecationWarning
           ├── PendingDeprecationWarning
           ├── RuntimeWarning
           ├── SyntaxWarning
           ├── UserWarning
           ├── FutureWarning
           ├── ImportWarning
           ├── UnicodeWarning
           ├── BytesWarning
           └── ResourceWarning`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">예외 발생 예시</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# TypeError 예시
result = "42" + 10  # 문자열과 정수를 더할 수 없음

# ValueError 예시
number = int("hello")  # 문자열을 정수로 변환할 수 없음

# IndexError 예시
my_list = [1, 2, 3]
item = my_list[10]  # 인덱스 범위 초과

# KeyError 예시
my_dict = {"name": "홍길동", "age": 30}
value = my_dict["address"]  # 존재하지 않는 키

# ZeroDivisionError 예시
result = 10 / 0  # 0으로 나누기 시도`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="try-except">
          <Card>
            <CardHeader>
              <CardTitle>try-except 구문</CardTitle>
              <CardDescription>예외를 처리하는 기본 구문</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">기본 구문</h3>
                <p className="text-muted-foreground mb-2">
                  try-except 구문은 예외가 발생할 수 있는 코드를 try 블록에 넣고, 예외 처리 코드를 except 블록에 넣는
                  방식으로 사용합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`try:
    # 예외가 발생할 수 있는 코드
    # ...
except:
    # 예외 처리 코드
    # ...`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">간단한 예외 처리 예시</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 0으로 나누기 예외 처리
try:
    result = 10 / 0
    print(f"결과: {result}")
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")

# 파일 열기 예외 처리
try:
    file = open("존재하지_않는_파일.txt", "r")
    content = file.read()
    file.close()
except FileNotFoundError:
    print("파일을 찾을 수 없습니다.")

# 타입 변환 예외 처리
try:
    user_input = input("숫자를 입력하세요: ")  # 사용자가 'abc' 입력
    number = int(user_input)
    print(f"입력한 숫자: {number}")
except ValueError:
    print("유효한 숫자가 아닙니다.")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">예외 객체 사용하기</h3>
                <p className="text-muted-foreground mb-2">
                  except 블록에서 예외 객체를 변수에 할당하여 예외에 대한 추가 정보를 얻을 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`try:
    num1 = int(input("첫 번째 숫자: "))
    num2 = int(input("두 번째 숫자: "))
    result = num1 / num2
    print(f"결과: {result}")
except ValueError as e:
    print(f"숫자를 입력해야 합니다. 오류: {e}")
except ZeroDivisionError as e:
    print(f"0으로 나눌 수 없습니다. 오류: {e}")

# 예외 객체의 속성 사용
try:
    with open("config.txt", "r") as file:
        config = file.read()
except FileNotFoundError as e:
    print(f"파일 경로: {e.filename}")
    print(f"오류 코드: {e.errno}")
    print(f"오류 메시지: {e.strerror}")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">else 절 사용하기</h3>
                <p className="text-muted-foreground mb-2">
                  try 블록에서 예외가 발생하지 않았을 때 실행할 코드를 else 블록에 넣을 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`try:
    num = int(input("숫자를 입력하세요: "))
except ValueError:
    print("유효한 숫자가 아닙니다.")
else:
    # 예외가 발생하지 않았을 때만 실행
    print(f"입력한 숫자의 제곱: {num ** 2}")
    
# 파일 처리 예시
try:
    file = open("data.txt", "r")
except FileNotFoundError:
    print("파일을 찾을 수 없습니다.")
else:
    # 파일을 성공적으로 열었을 때만 실행
    content = file.read()
    print(f"파일 내용: {content}")
    file.close()`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <p className="text-yellow-800">
                  너무 광범위한 예외 처리는 피하는 것이 좋습니다. except 블록에서 특정 예외를 지정하지 않으면 모든
                  예외를 잡게 되어, 예상치 못한 오류까지 무시할 수 있습니다.
                </p>
                <pre className="bg-yellow-50 p-4 rounded-md font-mono text-sm overflow-x-auto text-yellow-800">
                  {`# 좋지 않은 예시
try:
    # 여러 종류의 예외가 발생할 수 있는 코드
    result = int(input("숫자: ")) / int(input("나눌 수: "))
except:  # 모든 예외를 잡음
    print("오류가 발생했습니다.")  # 어떤 오류인지 알 수 없음

# 더 나은 예시
try:
    # 여러 종류의 예외가 발생할 수 있는 코드
    result = int(input("숫자: ")) / int(input("나눌 수: "))
except ValueError:
    print("숫자를 입력해야 합니다.")
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="multiple">
          <Card>
            <CardHeader>
              <CardTitle>여러 예외 처리하기</CardTitle>
              <CardDescription>다양한 예외 상황에 대응하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">여러 except 블록 사용</h3>
                <p className="text-muted-foreground mb-2">
                  여러 종류의 예외를 각각 다르게 처리하려면 여러 except 블록을 사용합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`try:
    file_name = input("파일 이름: ")
    with open(file_name, "r") as file:
        number = int(file.readline())
        result = 100 / number
        print(f"결과: {result}")
except FileNotFoundError:
    print(f"'{file_name}' 파일을 찾을 수 없습니다.")
except ValueError:
    print("파일의 내용을 숫자로 변환할 수 없습니다.")
except ZeroDivisionError:
    print("파일의 첫 번째 줄이 0이어서 나눌 수 없습니다.")
except Exception as e:
    print(f"예상치 못한 오류가 발생했습니다: {e}")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">여러 예외를 한 번에 처리</h3>
                <p className="text-muted-foreground mb-2">
                  동일한 방식으로 처리할 여러 예외는 괄호로 묶어서 한 번에 처리할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`try:
    # 사용자 입력 처리
    value = input("값을 입력하세요: ")
    number = int(value)
    result = 10 / number
    print(f"결과: {result}")
except (ValueError, ZeroDivisionError):
    # 숫자가 아니거나 0인 경우 동일하게 처리
    print("유효한 숫자(0 제외)를 입력해야 합니다.")
except Exception as e:
    print(f"다른 오류 발생: {e}")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">예외 계층 구조 활용</h3>
                <p className="text-muted-foreground mb-2">
                  예외 계층 구조를 활용하여 더 구체적인 예외부터 처리하는 것이 좋습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`try:
    # 파일 처리 코드
    with open("data.txt", "r") as file:
        content = file.read()
        # 파일 처리 작업...
except FileNotFoundError:
    # 구체적인 예외 먼저 처리
    print("파일이 존재하지 않습니다.")
except OSError:
    # 더 일반적인 예외 나중에 처리
    print("파일을 읽는 중 OS 오류가 발생했습니다.")
except Exception:
    # 가장 일반적인 예외는 마지막에 처리
    print("알 수 없는 오류가 발생했습니다.")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">중첩된 예외 처리</h3>
                <p className="text-muted-foreground mb-2">예외 처리 블록 내에서 다시 예외 처리를 할 수 있습니다.</p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`try:
    # 외부 작업
    file_name = input("파일 이름: ")
    with open(file_name, "r") as file:
        try:
            # 내부 작업
            data = file.read()
            result = process_data(data)  # 가상의 함수
        except ValueError:
            print("파일 데이터 처리 중 오류가 발생했습니다.")
except FileNotFoundError:
    print("파일을 찾을 수 없습니다.")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">예외 다시 발생시키기</h3>
                <p className="text-muted-foreground mb-2">
                  예외를 처리한 후 다시 발생시켜 상위 호출자에게 전달할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def process_file(file_name):
    try:
        with open(file_name, "r") as file:
            data = file.read()
            return data
    except FileNotFoundError:
        print(f"경고: {file_name} 파일을 찾을 수 없습니다.")
        raise  # 같은 예외를 다시 발생시킴

try:
    content = process_file("config.txt")
    print("파일 처리 완료")
except FileNotFoundError:
    print("프로그램을 계속 실행할 수 없습니다.")
    # 대체 작업 수행 또는 프로그램 종료`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">예외 처리 모범 사례</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>가능한 한 구체적인 예외를 처리하세요.</li>
                  <li>예외 처리 코드는 간결하게 유지하세요.</li>
                  <li>예외 메시지는 명확하고 유용한 정보를 제공해야 합니다.</li>
                  <li>로깅을 활용하여 예외 정보를 기록하세요.</li>
                  <li>예외를 무시하지 말고 항상 적절히 처리하세요.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finally">
          <Card>
            <CardHeader>
              <CardTitle>finally 블록</CardTitle>
              <CardDescription>예외 발생 여부와 상관없이 항상 실행되는 코드 블록</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">finally 블록 기본 구문</h3>
                <p className="text-muted-foreground mb-2">
                  finally 블록은 예외 발생 여부와 상관없이 항상 실행되는 코드 블록입니다. 주로 자원 정리, 연결 종료 등의
                  작업에 사용됩니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`try:
    # 예외가 발생할 수 있는 코드
    # ...
except ExceptionType:
    # 예외 처리 코드
    # ...
finally:
    # 항상 실행되는 코드
    # ...`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파일 처리 예시</h3>
                <p className="text-muted-foreground mb-2">
                  파일을 열고 작업한 후, 예외 발생 여부와 상관없이 파일을 닫는 예시입니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`file = None
try:
    file = open("data.txt", "r")
    content = file.read()
    # 파일 처리 작업...
    print(f"파일 내용: {content}")
except FileNotFoundError:
    print("파일을 찾을 수 없습니다.")
except IOError:
    print("파일을 읽는 중 오류가 발생했습니다.")
finally:
    # 파일이 열려 있으면 항상 닫음
    if file:
        file.close()
        print("파일이 닫혔습니다.")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">데이터베이스 연결 예시</h3>
                <p className="text-muted-foreground mb-2">
                  데이터베이스 연결을 열고 작업한 후, 예외 발생 여부와 상관없이 연결을 닫는 예시입니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`import sqlite3

connection = None
cursor = None
try:
    # 데이터베이스 연결
    connection = sqlite3.connect("example.db")
    cursor = connection.cursor()
    
    # SQL 쿼리 실행
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()
    
    # 데이터 처리...
    print(f"사용자 정보: {user}")
    
except sqlite3.Error as e:
    print(f"데이터베이스 오류: {e}")
    # 트랜잭션 롤백
    if connection:
        connection.rollback()
finally:
    # 커서와 연결 닫기
    if cursor:
        cursor.close()
    if connection:
        connection.close()
        print("데이터베이스 연결이 닫혔습니다.")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">try-finally 구문</h3>
                <p className="text-muted-foreground mb-2">
                  except 블록 없이 try-finally 구문만 사용할 수도 있습니다. 이 경우 예외는 처리되지 않고 상위로
                  전파되지만, finally 블록은 실행됩니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def get_resource():
    print("자원 획득")
    return "resource"

def release_resource(resource):
    print(f"{resource} 자원 해제")

# try-finally 구문
resource = None
try:
    resource = get_resource()
    # 자원을 사용한 작업...
    print(f"{resource}로 작업 수행")
    # 예외 발생 가능
    result = 10 / 0
finally:
    # 자원 해제 (예외 발생 여부와 상관없이)
    if resource:
        release_resource(resource)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">with 문을 사용한 자원 관리</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬의 with 문은 finally 블록을 사용하지 않고도 자원을 안전하게 관리할 수 있는 방법을 제공합니다.
                  with 문은 컨텍스트 관리자(context manager)를 사용하여 자원의 획득과 해제를 자동으로 처리합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 파일 처리 예시
try:
    with open("data.txt", "r") as file:
        content = file.read()
        print(f"파일 내용: {content}")
        # 파일은 with 블록을 벗어나면 자동으로 닫힘
except FileNotFoundError:
    print("파일을 찾을 수 없습니다.")

# 데이터베이스 연결 예시
import sqlite3
try:
    with sqlite3.connect("example.db") as connection:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
        print(f"사용자 목록: {users}")
        # 연결은 with 블록을 벗어나면 자동으로 닫힘
except sqlite3.Error as e:
    print(f"데이터베이스 오류: {e}")`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">finally 블록의 주의사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>finally 블록에서 return 문을 사용하면 try 또는 except 블록의 return 값을 덮어씁니다.</li>
                  <li>finally 블록에서 예외가 발생하면 이전 예외가 무시되고 새 예외가 전파됩니다.</li>
                  <li>가능하면 with 문을 사용하여 자원을 관리하는 것이 더 안전하고 간결합니다.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom">
          <Card>
            <CardHeader>
              <CardTitle>사용자 정의 예외</CardTitle>
              <CardDescription>자신만의 예외 클래스를 만들고 활용하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">사용자 정의 예외 만들기</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬에서는 Exception 클래스를 상속받아 자신만의 예외 클래스를 정의할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 기본 사용자 정의 예외
class MyError(Exception):
    pass

# 추가 정보를 포함하는 사용자 정의 예외
class ValueTooSmallError(Exception):
    """값이 너무 작을 때 발생하는 예외"""
    def __init__(self, value, min_value):
        self.value = value
        self.min_value = min_value
        self.message = f"입력값 {value}이(가) 최소값 {min_value}보다 작습니다."
        super().__init__(self.message)

# 여러 사용자 정의 예외 계층 구조
class AppError(Exception):
    """애플리케이션 기본 예외"""
    pass

class ConfigError(AppError):
    """설정 관련 예외"""
    pass

class DatabaseError(AppError):
    """데이터베이스 관련 예외"""
    pass`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">사용자 정의 예외 발생시키기</h3>
                <p className="text-muted-foreground mb-2">
                  raise 문을 사용하여 사용자 정의 예외를 발생시킬 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`def check_value(value, min_value):
    if value < min_value:
        raise ValueTooSmallError(value, min_value)
    return value

try:
    result = check_value(5, 10)
    print(f"유효한 값: {result}")
except ValueTooSmallError as e:
    print(f"오류: {e}")
    print(f"입력값: {e.value}, 최소값: {e.min_value}")

# 다른 예시
def load_config(file_path):
    try:
        with open(file_path, "r") as file:
            # 설정 파일 처리...
            if "database" not in file.read():
                raise ConfigError("설정 파일에 데이터베이스 정보가 없습니다.")
    except FileNotFoundError:
        raise ConfigError(f"설정 파일을 찾을 수 없습니다: {file_path}")

try:
    load_config("config.ini")
except ConfigError as e:
    print(f"설정 오류: {e}")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">사용자 정의 예외의 장점</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    <strong>의미 있는 이름</strong>: 예외 이름만으로도 오류의 성격을 파악할 수 있습니다.
                  </li>
                  <li>
                    <strong>추가 정보 제공</strong>: 예외 객체에 관련 데이터를 포함시켜 디버깅에 도움을 줍니다.
                  </li>
                  <li>
                    <strong>예외 계층 구조</strong>: 관련된 예외를 그룹화하여 체계적으로 관리할 수 있습니다.
                  </li>
                  <li>
                    <strong>특정 예외 처리</strong>: 특정 상황에 대한 예외를 구체적으로 처리할 수 있습니다.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">실제 애플리케이션 예시</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 은행 계좌 관리 시스템의 예외 처리
class BankError(Exception):
    """은행 시스템 기본 예외"""
    pass

class InsufficientFundsError(BankError):
    """잔액 부족 예외"""
    def __init__(self, account, amount, balance):
        self.account = account
        self.amount = amount
        self.balance = balance
        self.message = f"계좌 {account}의 잔액이 부족합니다. 요청: {amount}, 잔액: {balance}"
        super().__init__(self.message)

class AccountNotFoundError(BankError):
    """계좌 없음 예외"""
    def __init__(self, account):
        self.account = account
        self.message = f"계좌 {account}를 찾을 수 없습니다."
        super().__init__(self.message)

class AccountLockedError(BankError):
    """계좌 잠김 예외"""
    def __init__(self, account, reason):
        self.account = account
        self.reason = reason
        self.message = f"계좌 {account}가 잠겼습니다. 이유: {reason}"
        super().__init__(self.message)

# 은행 계좌 클래스
class BankAccount:
    def __init__(self, account_id, balance=0):
        self.account_id = account_id
        self.balance = balance
        self.is_locked = False
        self.lock_reason = None
        
    def deposit(self, amount):
        if self.is_locked:
            raise AccountLockedError(self.account_id, self.lock_reason)
        if amount <= 0:
            raise ValueError("입금액은 0보다 커야 합니다.")
        self.balance += amount
        return self.balance
        
    def withdraw(self, amount):
        if self.is_locked:
            raise AccountLockedError(self.account_id, self.lock_reason)
        if amount <= 0:
            raise ValueError("출금액은 0보다 커야 합니다.")
        if amount > self.balance:
            raise InsufficientFundsError(self.account_id, amount, self.balance)
        self.balance -= amount
        return self.balance
        
    def lock(self, reason):
        self.is_locked = True
        self.lock_reason = reason
        
    def unlock(self):
        self.is_locked = False
        self.lock_reason = None

# 은행 시스템 클래스
class Bank:
    def __init__(self):
        self.accounts = {}
        
    def create_account(self, account_id, initial_balance=0):
        if account_id in self.accounts:
            raise ValueError(f"계좌 ID {account_id}가 이미 존재합니다.")
        self.accounts[account_id] = BankAccount(account_id, initial_balance)
        return self.accounts[account_id]
        
    def get_account(self, account_id):
        if account_id not in self.accounts:
            raise AccountNotFoundError(account_id)
        return self.accounts[account_id]
        
    def transfer(self, from_account_id, to_account_id, amount):
        try:
            from_account = self.get_account(from_account_id)
            to_account = self.get_account(to_account_id)
            
            # 출금 시도
            from_account.withdraw(amount)
            
            # 입금 시도
            to_account.deposit(amount)
            
            return True
        except BankError as e:
            # 로깅 등의 작업 수행
            print(f"이체 실패: {e}")
            raise  # 예외 다시 발생

# 사용 예시
bank = Bank()
try:
    # 계좌 생성
    bank.create_account("A001", 1000)
    bank.create_account("A002", 500)
    
    # 이체 시도
    bank.transfer("A001", "A002", 1500)  # 잔액 부족
except InsufficientFundsError as e:
    print(f"잔액 부족: {e}")
    print(f"부족한 금액: {e.amount - e.balance}")
except AccountNotFoundError as e:
    print(f"계좌 없음: {e}")
except AccountLockedError as e:
    print(f"계좌 잠김: {e}")
except BankError as e:
    print(f"은행 오류: {e}")
except Exception as e:
    print(f"예상치 못한 오류: {e}")`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">사용자 정의 예외 설계 지침</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>예외 이름은 명확하고 구체적이어야 합니다.</li>
                  <li>예외 계층 구조를 적절히 설계하여 관련 예외를 그룹화하세요.</li>
                  <li>예외 메시지는 문제를 정확히 설명해야 합니다.</li>
                  <li>디버깅에 유용한 추가 정보를 포함시키세요.</li>
                  <li>표준 라이브러리의 예외 설계 패턴을 참고하세요.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

