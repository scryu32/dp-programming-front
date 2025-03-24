"use client"

import Link from "next/link"
import { ArrowLeft, FileCode, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PythonFileIOClientPage() {
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">파일 입출력</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          파일을 읽고 쓰는 방법, 다양한 파일 형식 처리에 대해 배웁니다.
        </p>
      </div>

      <Tabs defaultValue="intro" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="intro">소개</TabsTrigger>
          <TabsTrigger value="file-open-close">파일 열기와 닫기</TabsTrigger>
          <TabsTrigger value="text-read">텍스트 파일 읽기</TabsTrigger>
          <TabsTrigger value="text-write">텍스트 파일 쓰기</TabsTrigger>
          <TabsTrigger value="csv-files">CSV 파일 다루기</TabsTrigger>
          <TabsTrigger value="json-files">JSON 파일 다루기</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>파일 입출력 소개</CardTitle>
              <CardDescription>파이썬에서 파일을 다루는 기본 개념과 중요성</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">파일 입출력이란?</h3>
                <p className="text-muted-foreground">
                  파일 입출력(File I/O)은 프로그램이 외부 파일에서 데이터를 읽거나(입력) 외부 파일에 데이터를 쓰는(출력)
                  과정을 말합니다. 파이썬은 다양한 형식의 파일을 쉽게 다룰 수 있는 기능을 제공합니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파일 입출력의 중요성</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>데이터 영속성</strong>: 프로그램이 종료되어도 데이터를 유지할 수 있습니다.
                  </li>
                  <li>
                    <strong>대용량 데이터 처리</strong>: 메모리에 모두 로드하기 어려운 대용량 데이터를 처리할 수
                    있습니다.
                  </li>
                  <li>
                    <strong>데이터 공유</strong>: 다른 프로그램이나 사용자와 데이터를 공유할 수 있습니다.
                  </li>
                  <li>
                    <strong>설정 저장</strong>: 프로그램 설정이나 상태를 저장하고 불러올 수 있습니다.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파이썬에서 다룰 수 있는 파일 형식</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>텍스트 파일</strong>: .txt, .log, .md 등 일반 텍스트 파일
                  </li>
                  <li>
                    <strong>CSV 파일</strong>: 쉼표로 구분된 값(Comma-Separated Values)을 저장하는 파일
                  </li>
                  <li>
                    <strong>JSON 파일</strong>: JavaScript Object Notation 형식의 데이터를 저장하는 파일
                  </li>
                  <li>
                    <strong>XML 파일</strong>: 확장 가능한 마크업 언어(eXtensible Markup Language) 형식의 파일
                  </li>
                  <li>
                    <strong>바이너리 파일</strong>: 이미지, 오디오, 비디오 등의 이진 데이터 파일
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  학습 목표
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>파일을 열고 닫는 기본 방법 이해하기</li>
                  <li>텍스트 파일을 읽고 쓰는 다양한 방법 익히기</li>
                  <li>CSV 파일과 JSON 파일을 처리하는 방법 배우기</li>
                  <li>파일 경로와 디렉토리를 다루는 방법 이해하기</li>
                  <li>파일 입출력 시 발생할 수 있는 예외 처리하기</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="file-open-close">
          <Card>
            <CardHeader>
              <CardTitle>파일 열기와 닫기</CardTitle>
              <CardDescription>파이썬에서 파일을 열고 닫는 기본 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">파일 열기: open() 함수</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬에서 파일을 열기 위해 내장 함수 <code>open()</code>을 사용합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 기본 문법
file = open(filename, mode)

# filename: 파일 경로와 이름
# mode: 파일을 여는 모드 (읽기, 쓰기 등)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파일 모드</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-md">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">모드</th>
                        <th className="py-2 px-4 border-b text-left">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">'r'</td>
                        <td className="py-2 px-4 border-b">읽기 모드 (기본값)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">'w'</td>
                        <td className="py-2 px-4 border-b">쓰기 모드 (파일이 존재하면 내용을 지우고 새로 씀)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">'a'</td>
                        <td className="py-2 px-4 border-b">추가 모드 (파일 끝에 내용을 추가)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">'x'</td>
                        <td className="py-2 px-4 border-b">배타적 생성 모드 (파일이 이미 존재하면 실패)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">'b'</td>
                        <td className="py-2 px-4 border-b">이진 모드 (텍스트가 아닌 이진 데이터)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">'t'</td>
                        <td className="py-2 px-4 border-b">텍스트 모드 (기본값)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">'+'</td>
                        <td className="py-2 px-4 border-b">읽기와 쓰기 모두 가능</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground mt-2">
                  모드는 조합해서 사용할 수 있습니다. 예: 'rb'(이진 읽기), 'w+'(읽기와 쓰기)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파일 닫기: close() 메서드</h3>
                <p className="text-muted-foreground mb-2">
                  파일 작업이 끝나면 반드시 <code>close()</code> 메서드를 호출하여 파일을 닫아야 합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 파일 열기
file = open('example.txt', 'r')

# 파일 작업 수행
# ...

# 파일 닫기
file.close()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">with 문을 사용한 파일 처리</h3>
                <p className="text-muted-foreground mb-2">
                  <code>with</code> 문을 사용하면 파일을 자동으로 닫아주므로 <code>close()</code>를 명시적으로 호출할
                  필요가 없습니다. 이 방법이 더 안전하고 권장됩니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# with 문을 사용한 파일 열기
with open('example.txt', 'r') as file:
    # 파일 작업 수행
    # ...

# with 블록을 벗어나면 자동으로 파일이 닫힘`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파일 경로</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 상대 경로
with open('example.txt', 'r') as file:
    # 현재 작업 디렉토리의 example.txt 파일

# 절대 경로
with open('/path/to/example.txt', 'r') as file:
    # 지정된 절대 경로의 example.txt 파일

# Windows에서 절대 경로
with open('C:\\path\\to\\example.txt', 'r') as file:
    # 백슬래시를 이스케이프하거나
    
with open(r'C:\path\to\example.txt', 'r') as file:
    # r 접두사를 사용하여 raw 문자열로 처리

# 경로 구분자 통일을 위한 os.path 모듈 사용
import os
file_path = os.path.join('folder', 'subfolder', 'example.txt')
with open(file_path, 'r') as file:
    # 운영체제에 맞는 경로 구분자 사용`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">인코딩 지정</h3>
                <p className="text-muted-foreground mb-2">
                  텍스트 파일을 다룰 때는 적절한 인코딩을 지정하는 것이 중요합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# UTF-8 인코딩으로 파일 열기
with open('example.txt', 'r', encoding='utf-8') as file:
    content = file.read()

# 다른 인코딩 예시
with open('example.txt', 'r', encoding='cp949') as file:  # 한글 Windows
    content = file.read()

with open('example.txt', 'r', encoding='euc-kr') as file:  # 한글 EUC-KR
    content = file.read()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">예외 처리</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 파일 열기 시 발생할 수 있는 예외 처리
try:
    with open('example.txt', 'r') as file:
        content = file.read()
except FileNotFoundError:
    print("파일을 찾을 수 없습니다.")
except PermissionError:
    print("파일에 접근할 권한이 없습니다.")
except Exception as e:
    print(f"오류 발생: {e}")
else:
    print("파일을 성공적으로 읽었습니다.")
    print(content)`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>
                    항상 <code>with</code> 문을 사용하여 파일을 자동으로 닫히도록 하는 것이 좋습니다.
                  </li>
                  <li>파일 경로에 특수 문자나 공백이 포함된 경우 주의가 필요합니다.</li>
                  <li>텍스트 파일을 다룰 때는 적절한 인코딩을 지정해야 합니다.</li>
                  <li>파일 작업 시 발생할 수 있는 예외를 적절히 처리해야 합니다.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="text-read">
          <Card>
            <CardHeader>
              <CardTitle>텍스트 파일 읽기</CardTitle>
              <CardDescription>파이썬에서 텍스트 파일을 읽는 다양한 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">파일 전체 읽기: read()</h3>
                <p className="text-muted-foreground mb-2">
                  <code>read()</code> 메서드는 파일의 전체 내용을 하나의 문자열로 읽어옵니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 파일 전체 내용 읽기
file = open('example.txt', 'r', encoding='utf-8')
content = file.read()
print(content)
file.close()

# 특정 크기만 읽기 (처음 10바이트)
file = open('example.txt', 'r', encoding='utf-8')
chunk = file.read(10)
print(chunk)
file.close()
`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">한 줄씩 읽기: readline()</h3>
                <p className="text-muted-foreground mb-2">
                  <code>readline()</code> 메서드는 파일에서 한 줄씩 읽어옵니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 한 줄 읽기
file = open('example.txt', 'r', encoding='utf-8')
line = file.readline()
print(line)
file.close()

# 여러 줄 읽기 (연속된 두 줄)
file = open('example.txt', 'r', encoding='utf-8')
line1 = file.readline()
line2 = file.readline()
print(line1, end='')  # 줄바꿈 문자가 포함되어 있음
print(line2, end='')
file.close()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">모든 줄 읽기: readlines()</h3>
                <p className="text-muted-foreground mb-2">
                  <code>readlines()</code> 메서드는 파일의 모든 줄을 읽어 리스트로 반환합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 모든 줄을 리스트로 읽기
file = open('example.txt', 'r', encoding='utf-8')
lines = file.readlines()
print(lines)  # 각 줄이 리스트의 원소
file.close()

# 각 줄의 양쪽 공백 제거 후 리스트 만들기
file = open('example.txt', 'r', encoding='utf-8')
lines = [line.strip() for line in file.readlines()]
print(lines)
file.close()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파일 객체 순회하기</h3>
                <p className="text-muted-foreground mb-2">
                  파일 객체는 이터러블(iterable)이므로 for 루프를 사용하여 한 줄씩 순회할 수 있습니다. 이 방법이 대용량
                  파일을 처리할 때 가장 메모리 효율적입니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# for 루프로 파일 순회하기
file = open('example.txt', 'r', encoding='utf-8')
for line in file:
    print(line, end='')  # 이미 줄바꿈 문자가 포함되어 있음
file.close()

# 줄바꿈 문자를 제거하며 순회하기
file = open('example.txt', 'r', encoding='utf-8')
for line in file:
    print(line.strip())
file.close()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">실용적인 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 예제 1: 파일에서 '파이썬' 단어가 포함된 줄 출력
word_to_find = '파이썬'
line_number = 0
file = open('example.txt', 'r', encoding='utf-8')
for line in file:
    line_number += 1
    if word_to_find in line:
        print("라인 {}: {}".format(line_number, line.strip()))
file.close()

# 예제 2: 파일 내용 통계 (문자, 단어, 줄 수)
file = open('example.txt', 'r', encoding='utf-8')
content = file.read()
file.close()

char_count = len(content)
word_count = len(content.split())
line_count = content.count('\n') + 1

print("문자 수:", char_count)
print("단어 수:", word_count)
print("줄 수:", line_count)`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">대용량 파일 처리 시 주의사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>
                    <code>read()</code>나 <code>readlines()</code>는 전체 파일을 메모리에 로드하므로 대용량 파일에는
                    적합하지 않을 수 있습니다.
                  </li>
                  <li>대용량 파일은 for 루프를 사용하여 한 줄씩 처리하는 것이 메모리 효율적입니다.</li>
                  <li>
                    필요한 경우 <code>read(chunk_size)</code>를 사용하여 일정 크기씩 읽는 방법도 있습니다.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="text-write">
          <Card>
            <CardHeader>
              <CardTitle>텍스트 파일 쓰기</CardTitle>
              <CardDescription>파이썬에서 텍스트 파일에 데이터를 쓰는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">파일에 쓰기: write()</h3>
                <p className="text-muted-foreground mb-2">
                  <code>write()</code> 메서드는 파일에 문자열을 씁니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 파일에 문자열 쓰기
file = open('output.txt', 'w', encoding='utf-8')
file.write('안녕하세요, 파이썬입니다.')
file.close()

# 여러 줄을 순차적으로 쓰기
file = open('output.txt', 'w', encoding='utf-8')
file.write('첫 번째 줄\n')
file.write('두 번째 줄\n')
file.write('세 번째 줄\n')
file.close()

# write() 메서드가 반환하는 쓴 문자 수 확인
file = open('output.txt', 'w', encoding='utf-8')
chars_written = file.write('안녕하세요')
print(f"{chars_written}자를 썼습니다.")
file.close()
`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">여러 줄 쓰기: writelines()</h3>
                <p className="text-muted-foreground mb-2">
                  <code>writelines()</code> 메서드는 문자열 리스트를 파일에 씁니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 문자열 리스트를 그대로 파일에 쓰기
lines = ['첫 번째 줄\n', '두 번째 줄\n', '세 번째 줄\n']
file = open('output.txt', 'w', encoding='utf-8')
file.writelines(lines)
file.close()

# 각 줄에 줄바꿈 문자 추가 후 쓰기
lines = ['첫 번째 줄', '두 번째 줄', '세 번째 줄']
file = open('output.txt', 'w', encoding='utf-8')
file.writelines(line + '\n' for line in lines)
file.close()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파일 추가 모드: 'a'</h3>
                <p className="text-muted-foreground mb-2">
                  'a' 모드는 파일 끝에 내용을 추가합니다. 파일이 없으면 새로 생성합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# # 파일 끝에 내용 추가하기
file = open('output.txt', 'a', encoding='utf-8')
file.write('파일 끝에 추가할 내용\n')
file.close()

# 여러 줄을 추가하기
file = open('output.txt', 'a', encoding='utf-8')
file.write('추가 내용 1\n')
file.write('추가 내용 2\n')
file.write('추가 내용 3\n')
file.close()

# 로그 기록 예제 (함수 없이 인라인으로)
import datetime
timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
file = open('app.log', 'a', encoding='utf-8')
file.write(f"[{timestamp}] 로그 메시지 예제\n")
file.close()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">읽기와 쓰기 모드: 'r+'</h3>
                <p className="text-muted-foreground mb-2">
                  'r+' 모드는 파일을 읽고 쓸 수 있는 모드입니다. 파일이 없으면 에러가 발생합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# # 'r+' 모드로 파일 읽고 쓰기
file = open('output.txt', 'r+', encoding='utf-8')
content = file.read()
print("현재 파일 내용:", content)

file.write('\n새로운 내용 추가')

# 파일 포인터 위치가 끝이므로 처음으로 이동 후 다시 읽기
file.seek(0)
new_content = file.read()
print("수정된 파일 내용:", new_content)
file.close()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파일 내용 수정하기</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬에서는 파일의 특정 부분만 수정하는 것이 어렵습니다. 일반적으로 전체 파일을 읽고, 수정한 후, 다시
                  쓰는 방식을 사용합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 파일 내용 수정하기
# (1) 특정 문자열 교체하기
file = open('example.txt', 'r', encoding='utf-8')
content = file.read()
file.close()

modified_content = content.replace('파이썬', 'Python')

file = open('example.txt', 'w', encoding='utf-8')
file.write(modified_content)
file.close()

# (2) 특정 줄만 수정하기 (예: 3번째 줄, 인덱스 2)
file = open('example.txt', 'r', encoding='utf-8')
lines = file.readlines()
file.close()

if len(lines) > 2:
    lines[2] = '이 줄은 수정되었습니다.\n'

file = open('example.txt', 'w', encoding='utf-8')
file.writelines(lines)
file.close()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">print() 함수로 파일에 출력하기</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# print() 함수의 file 매개변수를 이용한 출력
file = open('output.txt', 'w', encoding='utf-8')
print('안녕하세요', file=file)
print('파이썬으로 파일 쓰기', file=file)
print('정말 쉽습니다!', file=file)
file.close()

# 여러 값 출력하기
file = open('output.txt', 'w', encoding='utf-8')
print('이름:', '홍길동', file=file)
print('나이:', 25, file=file)
print('직업:', '개발자', file=file)
file.close()

# 구분자와 끝 문자를 지정하여 출력하기
file = open('output.txt', 'w', encoding='utf-8')
print('사과', '바나나', '체리', sep=', ', end='!\n', file=file)
file.close()
`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">실용적인 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 메모장 프로그램 (함수 없이 인라인 코드)
filename = input("파일 이름을 입력하세요: ")
print("메모를 입력하세요. 입력을 마치려면 빈 줄을 입력하세요.")
lines = []
while True:
    line = input()
    if not line:
        break
    lines.append(line)

file = open(filename, 'w', encoding='utf-8')
for line in lines:
    file.write(line + '\n')
file.close()

print(f"{filename} 파일에 메모가 저장되었습니다.")
`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>'w' 모드는 기존 파일 내용을 모두 지우므로 주의해야 합니다.</li>
                  <li>파일 쓰기 작업 중 오류가 발생할 수 있으므로 예외 처리를 고려해야 합니다.</li>
                  <li>대용량 데이터를 쓸 때는 메모리 사용량에 주의하고, 필요하면 청크 단위로 처리합니다.</li>
                  <li>파일 경로가 유효한지 확인하고, 필요한 경우 디렉토리를 미리 생성해야 합니다.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="csv-files">
          <Card>
            <CardHeader>
              <CardTitle>CSV 파일 다루기</CardTitle>
              <CardDescription>파이썬에서 CSV(Comma-Separated Values) 파일을 읽고 쓰는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">CSV 파일이란?</h3>
                <p className="text-muted-foreground mb-2">
                  CSV(Comma-Separated Values) 파일은 쉼표로 구분된 값들을 저장하는 텍스트 파일 형식입니다.
                  스프레드시트나 데이터베이스 데이터를 저장하는 데 널리 사용됩니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# CSV 파일 예시
# example.csv 내용:
# 이름,나이,직업
# 홍길동,30,개발자
# 김철수,25,디자이너
# 이영희,35,매니저`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">csv 모듈 소개</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬의 <code>csv</code> 모듈은 CSV 파일을 쉽게 읽고 쓸 수 있는 기능을 제공합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# csv 모듈 임포트
import csv`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">CSV 파일 읽기: reader()</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# csv.reader() 사용하기
import csv

with open('example.csv', 'r', encoding='utf-8', newline='') as file:
    csv_reader = csv.reader(file)
    
    # 헤더 행 읽기
    header = next(csv_reader)
    print(f"헤더: {header}")
    
    # 데이터 행 읽기
    for row in csv_reader:
        print(row)

# 출력:
# 헤더: ['이름', '나이', '직업']
# ['홍길동', '30', '개발자']
# ['김철수', '25', '디자이너']
# ['이영희', '35', '매니저']`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">CSV 파일 읽기: DictReader()</h3>
                <p className="text-muted-foreground mb-2">
                  <code>DictReader</code>는 각 행을 딕셔너리로 반환하여 열 이름으로 값에 접근할 수 있게 합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# csv.DictReader() 사용하기
import csv

with open('example.csv', 'r', encoding='utf-8', newline='') as file:
    csv_reader = csv.DictReader(file)
    
    # 각 행을 딕셔너리로 읽기
    for row in csv_reader:
        print(f"이름: {row['이름']}, 나이: {row['나이']}, 직업: {row['직업']}")

# 출력:
# 이름: 홍길동, 나이: 30, 직업: 개발자
# 이름: 김철수, 나이: 25, 직업: 디자이너
# 이름: 이영희, 나이: 35, 직업: 매니저`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">CSV 파일 쓰기: writer()</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# csv.writer() 사용하기
import csv

data = [
    ['이름', '나이', '직업'],  # 헤더
    ['홍길동', '30', '개발자'],
    ['김철수', '25', '디자이너'],
    ['이영희', '35', '매니저']
]

with open('new_example.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(file)
    
    # 여러 행 한 번에 쓰기
    csv_writer.writerows(data)

# 한 행씩 쓰기
with open('new_example.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(file)
    
    for row in data:
        csv_writer.writerow(row)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">CSV 파일 쓰기: DictWriter()</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# csv.DictWriter() 사용하기
import csv

# 딕셔너리 리스트
data = [
    {'이름': '홍길동', '나이': '30', '직업': '개발자'},
    {'이름': '김철수', '나이': '25', '직업': '디자이너'},
    {'이름': '이영희', '나이': '35', '직업': '매니저'}
]

# 필드 이름 정의
fieldnames = ['이름', '나이', '직업']

with open('dict_example.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    # 헤더 쓰기
    csv_writer.writeheader()
    
    # 데이터 쓰기
    csv_writer.writerows(data)

# 한 행씩 쓰기
with open('dict_example.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
    csv_writer.writeheader()
    
    for row in data:
        csv_writer.writerow(row)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">CSV 파일 수정하기</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# CSV 파일 수정하기
import csv

# 파일 읽기
rows = []
with open('example.csv', 'r', encoding='utf-8', newline='') as file:
    csv_reader = csv.reader(file)
    header = next(csv_reader)
    rows.append(header)
    
    for row in csv_reader:
        # 나이 값 수정 (문자열에서 정수로 변환 후 1 증가)
        row[1] = str(int(row[1]) + 1)
        rows.append(row)

# 수정된 내용 쓰기
with open('example_modified.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(rows)

# DictReader와 DictWriter를 사용한 수정
rows = []
with open('example.csv', 'r', encoding='utf-8', newline='') as file:
    csv_reader = csv.DictReader(file)
    fieldnames = csv_reader.fieldnames
    
    for row in csv_reader:
        # 나이 값 수정
        row['나이'] = str(int(row['나이']) + 1)
        rows.append(row)

with open('example_modified.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
    csv_writer.writeheader()
    csv_writer.writerows(rows)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">CSV 파일 옵션 설정</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 구분자 변경 (쉼표 대신 세미콜론 사용)
import csv

with open('semicolon.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(file, delimiter=';')
    csv_writer.writerow(['이름', '나이', '직업'])
    csv_writer.writerow(['홍길동', '30', '개발자'])

# 인용 문자 설정
with open('quoted.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(file, quoting=csv.QUOTE_ALL)
    csv_writer.writerow(['이름', '나이', '직업'])
    csv_writer.writerow(['홍길동', '30', '개발자,프로그래머'])  # 쉼표 포함된 값

# 다양한 옵션 설정
with open('custom.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(
        file,
        delimiter='|',           # 구분자
        quotechar='"',           # 인용 문자
        quoting=csv.QUOTE_MINIMAL,  # 필요할 때만 인용
        escapechar='\\'          # 이스케이프 문자
    )
    csv_writer.writerow(['이름', '나이', '직업'])
    csv_writer.writerow(['홍길동', '30', '개발자|프로그래머'])  # 구분자 포함된 값`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">pandas를 사용한 CSV 처리</h3>
                <p className="text-muted-foreground mb-2">
                  데이터 분석을 위해서는 <code>pandas</code> 라이브러리를 사용하면 더 편리하게 CSV 파일을 다룰 수
                  있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# pandas로 CSV 파일 읽기
import pandas as pd

# CSV 파일 읽기
df = pd.read_csv('example.csv')
print(df)

# 특정 열 접근
print(df['이름'])

# 데이터 필터링
developers = df[df['직업'] == '개발자']
print(developers)

# 데이터 수정
df['나이'] = df['나이'] + 1
print(df)

# CSV 파일로 저장
df.to_csv('pandas_example.csv', index=False, encoding='utf-8')`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">실용적인 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 예제 1: CSV 파일 병합하기
import csv

def merge_csv_files(file1, file2, output_file):
    # 첫 번째 파일 읽기
    rows = []
    with open(file1, 'r', encoding='utf-8', newline='') as f1:
        reader = csv.reader(f1)
        header = next(reader)
        rows.append(header)
        for row in reader:
            rows.append(row)
    
    # 두 번째 파일 읽기 (헤더 제외)
    with open(file2, 'r', encoding='utf-8', newline='') as f2:
        reader = csv.reader(f2)
        next(reader)  # 헤더 건너뛰기
        for row in reader:
            rows.append(row)
    
    # 병합된 내용 쓰기
    with open(output_file, 'w', encoding='utf-8', newline='') as out:
        writer = csv.writer(out)
        writer.writerows(rows)

# 예제 2: CSV 파일을 HTML 테이블로 변환하기
import csv

def csv_to_html(csv_file, html_file):
    with open(csv_file, 'r', encoding='utf-8', newline='') as file:
        reader = csv.reader(file)
        header = next(reader)
        
        # HTML 파일 생성
        with open(html_file, 'w', encoding='utf-8') as html:
            # HTML 시작 부분
            html.write('<!DOCTYPE html>\\n<html>\\n<head>\\n')
            html.write('<style>\\n')
            html.write('table { border-collapse: collapse; width: 100%; }\\n')
            html.write('th, td { border: 1px solid #ddd; padding: 8px; }\\n')
            html.write('tr:nth-child(even) { background-color: #f2f2f2; }\\n')
            html.write('th { padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #4CAF50; color: white; }\\n')
            html.write('</style>\\n</head>\\n<body>\\n')
            
            # 테이블 시작
            html.write('<table>\\n')
            
            # 헤더 행
            html.write('<tr>\\n')
            for column in header:
                html.write(f'<th>{column}</th>\\n')
            html.write('</tr>\\n')
            
            # 데이터 행
            for row in reader:
                html.write('<tr>\\n')
                for cell in row:
                    html.write(f'<td>{cell}</td>\\n')
                html.write('</tr>\\n')
            
            # 테이블 끝
            html.write('</table>\\n')
            
            # HTML 끝 부분
            html.write('</body>\\n</html>')`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>
                    CSV 파일을 열 때 <code>newline=''</code> 옵션을 사용하는 것이 좋습니다. 이렇게 하면 운영체제 간
                    줄바꿈 문자 차이로 인한 문제를 방지할 수 있습니다.
                  </li>
                  <li>한글이나 특수 문자가 포함된 CSV 파일은 적절한 인코딩(보통 UTF-8)을 지정해야 합니다.</li>
                  <li>
                    CSV 파일의 구분자가 쉼표가 아닌 경우(예: 세미콜론, 탭), <code>delimiter</code> 옵션을 사용하여
                    지정해야 합니다.
                  </li>
                  <li>
                    대용량 CSV 파일을 처리할 때는 메모리 사용량에 주의하고, 필요하면 청크 단위로 처리하는 것이 좋습니다.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="json-files">
          <Card>
            <CardHeader>
              <CardTitle>JSON 파일 다루기</CardTitle>
              <CardDescription>파이썬에서 JSON(JavaScript Object Notation) 파일을 읽고 쓰는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">JSON이란?</h3>
                <p className="text-muted-foreground mb-2">
                  JSON(JavaScript Object Notation)은 데이터를 저장하고 교환하기 위한 경량 데이터 형식입니다. 사람이 읽고
                  쓰기 쉽고, 기계가 분석하고 생성하기 쉬운 특징이 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# JSON 예시
{
  "이름": "홍길동",
  "나이": 30,
  "직업": "개발자",
  "주소": {
    "도시": "서울",
    "우편번호": "12345"
  },
  "취미": ["독서", "등산", "프로그래밍"]
}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">json 모듈 소개</h3>
                <p className="text-muted-foreground mb-2">
                  파이썬의 <code>json</code> 모듈은 JSON 데이터를 쉽게 인코딩(파이썬 객체 → JSON)하고 디코딩(JSON →
                  파이썬 객체)할 수 있는 기능을 제공합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# json 모듈 임포트
import json`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON 파일 읽기: load()</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# JSON 파일 읽기
import json

with open('example.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
    print(data)

# 데이터 접근
print(f"이름: {data['이름']}")
print(f"나이: {data['나이']}")
print(f"도시: {data['주소']['도시']}")
print(f"첫 번째 취미: {data['취미'][0]}")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON 문자열 파싱: loads()</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# JSON 문자열 파싱
import json

json_string = '{"이름": "홍길동", "나이": 30, "직업": "개발자"}'
data = json.loads(json_string)
print(data)
print(f"이름: {data['이름']}, 나이: {data['나이']}")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON 파일 쓰기: dump()</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# JSON 파일 쓰기
import json

data = {
    "이름": "홍길동",
    "나이": 30,
    "직업": "개발자",
    "주소": {
        "도시": "서울",
        "우편번호": "12345"
    },
    "취미": ["독서", "등산", "프로그래밍"]
}

with open('new_example.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=2)

# ensure_ascii=False: 한글 등 비ASCII 문자를 그대로 저장
# indent=2: 들여쓰기 적용하여 가독성 향상`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON 문자열 생성: dumps()</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# JSON 문자열 생성
import json

data = {
    "이름": "홍길동",
    "나이": 30,
    "직업": "개발자"
}

# 파이썬 객체를 JSON 문자열로 변환
json_string = json.dumps(data, ensure_ascii=False, indent=2)
print(json_string)

# 한 줄로 압축된 JSON 문자열 생성
compact_json = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
print(compact_json)

# 정렬된 키로 JSON 생성
sorted_json = json.dumps(data, ensure_ascii=False, sort_keys=True, indent=2)
print(sorted_json)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON 데이터 수정하기</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# JSON 파일 읽고 수정하기
import json

# 파일 읽기
with open('example.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# 데이터 수정
data['나이'] = 31
data['취미'].append('여행')
data['주소']['도시'] = '부산'

# 수정된 데이터 저장
with open('modified_example.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=2)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">파이썬 데이터 타입과 JSON 변환</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-md">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">파이썬</th>
                        <th className="py-2 px-4 border-b text-left">JSON</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">dict</td>
                        <td className="py-2 px-4 border-b font-mono">object</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">list, tuple</td>
                        <td className="py-2 px-4 border-b font-mono">array</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">str</td>
                        <td className="py-2 px-4 border-b font-mono">string</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">int, float</td>
                        <td className="py-2 px-4 border-b font-mono">number</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">True</td>
                        <td className="py-2 px-4 border-b font-mono">true</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">False</td>
                        <td className="py-2 px-4 border-b font-mono">false</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-mono">None</td>
                        <td className="py-2 px-4 border-b font-mono">null</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">복잡한 객체 JSON 변환</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 사용자 정의 클래스의 JSON 변환
import json
from datetime import datetime

class Person:
    def __init__(self, name, age, birth_date):
        self.name = name
        self.age = age
        self.birth_date = birth_date

# 기본적으로 사용자 정의 클래스는 JSON으로 직접 변환할 수 없음
person = Person("홍길동", 30, datetime.now())

# 오류 발생: TypeError: Object of type Person is not JSON serializable
# json.dumps(person)

# 해결 방법 1: 사용자 정의 인코더 함수 사용
def person_encoder(obj):
    if isinstance(obj, Person):
        return {
            "name": obj.name,
            "age": obj.age,
            "birth_date": obj.birth_date.isoformat()
        }
    elif isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"Object of type {type(obj)} is not JSON serializable")

# 인코더 함수 사용
json_string = json.dumps(person, default=person_encoder, indent=2)
print(json_string)

# 해결 방법 2: JSONEncoder 클래스 상속
class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Person):
            return {
                "name": obj.name,
                "age": obj.age,
                "birth_date": obj.birth_date.isoformat()
            }
        elif isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

# 사용자 정의 인코더 클래스 사용
json_string = json.dumps(person, cls=CustomEncoder, indent=2)
print(json_string)`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON 데이터 검증</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# JSON 스키마 검증 (jsonschema 라이브러리 사용)
import json
from jsonschema import validate

# JSON 스키마 정의
schema = {
    "type": "object",
    "properties": {
        "이름": {"type": "string"},
        "나이": {"type": "number", "minimum": 0},
        "직업": {"type": "string"},
        "주소": {
            "type": "object",
            "properties": {
                "도시": {"type": "string"},
                "우편번호": {"type": "string"}
            },
            "required": ["도시"]
        },
        "취미": {
            "type": "array",
            "items": {"type": "string"}
        }
    },
    "required": ["이름", "나이"]
}

# 유효한 데이터
valid_data = {
    "이름": "홍길동",
    "나이": 30,
    "직업": "개발자",
    "주소": {
        "도시": "서울"
    },
    "취미": ["독서", "등산"]
}

# 유효하지 않은 데이터
invalid_data = {
    "이름": "홍길동",
    "나이": -5,  # 최소값 위반
    "주소": {
        # "도시" 필드 누락
        "우편번호": "12345"
    }
}

# 스키마 검증
try:
    validate(instance=valid_data, schema=schema)
    print("유효한 데이터입니다.")
except Exception as e:
    print(f"유효하지 않은 데이터: {e}")

try:
    validate(instance=invalid_data, schema=schema)
    print("유효한 데이터입니다.")
except Exception as e:
    print(f"유효하지 않은 데이터: {e}")`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">실용적인 예제</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 예제 1: 설정 파일 관리
import json
import os

def load_config(config_file):
    # 기본 설정
    default_config = {
        "app_name": "My App",
        "version": "1.0.0",
        "debug": False,
        "theme": "light",
        "recent_files": []
    }
    
    # 설정 파일이 존재하는지 확인
    if os.path.exists(config_file):
        try:
            with open(config_file, 'r', encoding='utf-8') as file:
                user_config = json.load(file)
                # 기본 설정과 사용자 설정 병합
                config = {**default_config, **user_config}
                return config
        except Exception as e:
            print(f"설정 파일 로드 오류: {e}")
            return default_config
    else:
        # 설정 파일이 없으면 기본 설정 저장
        save_config(config_file, default_config)
        return default_config

def save_config(config_file, config):
    try:
        with open(config_file, 'w', encoding='utf-8') as file:
            json.dump(config, file, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"설정 파일 저장 오류: {e}")
        return False

# 사용 예
config = load_config('app_config.json')
print(f"앱 이름: {config['app_name']}")

# 설정 변경
config['theme'] = 'dark'
config['recent_files'].append('document.txt')
save_config('app_config.json', config)

# 예제 2: API 응답 처리
import json
import requests

def get_github_user_info(username):
    url = f"https://api.github.com/users/{username}"
    response = requests.get(url)
    
    if response.status_code == 200:
        # JSON 응답 파싱
        user_data = json.loads(response.text)
        
        # 필요한 정보만 추출
        user_info = {
            "name": user_data.get("name", "N/A"),
            "location": user_data.get("location", "N/A"),
            "public_repos": user_data.get("public_repos", 0),
            "followers": user_data.get("followers", 0),
            "following": user_data.get("following", 0),
            "created_at": user_data.get("created_at", "N/A")
        }
        
        return user_info
    else:
        print(f"오류: {response.status_code}")
        return None

# 사용 예
# user_info = get_github_user_info("octocat")
# if user_info:
#     print(f"이름: {user_info['name']}")
#     print(f"위치: {user_info['location']}")
#     print(f"공개 저장소 수: {user_info['public_repos']}")
#     print(f"팔로워 수: {user_info['followers']}")`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">주의사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>JSON은 주석을 지원하지 않습니다. 주석이 필요한 설정 파일은 YAML이나 다른 형식을 고려하세요.</li>
                  <li>
                    JSON은 문자열 키만 허용합니다. 파이썬 딕셔너리의 숫자나 튜플 키는 JSON으로 변환할 수 없습니다.
                  </li>
                  <li>
                    한글이나 특수 문자가 포함된 JSON 파일은 <code>ensure_ascii=False</code> 옵션을 사용해야 합니다.
                  </li>
                  <li>사용자 정의 객체를 JSON으로 변환하려면 직렬화 함수나 클래스를 구현해야 합니다.</li>
                  <li>
                    대용량 JSON 파일을 처리할 때는 스트리밍 파서(예: <code>ijson</code> 라이브러리)를 고려하세요.
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

