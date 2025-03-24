"use client"

import Link from "next/link"
import { ArrowLeft, FileCode, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PythonModulesClientPage() {
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">모듈과 패키지</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          파이썬의 모듈과 패키지를 사용하여 코드를 구조화하는 방법을 배웁니다.
        </p>
      </div>

      <Tabs defaultValue="intro" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="intro">소개</TabsTrigger>
          <TabsTrigger value="import">모듈 임포트하기</TabsTrigger>
          <TabsTrigger value="package">패키지 만들기</TabsTrigger>
          <TabsTrigger value="stdlib">표준 라이브러리</TabsTrigger>
          <TabsTrigger value="pip">pip로 패키지 설치하기</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>모듈과 패키지 소개</CardTitle>
              <CardDescription>파이썬에서 코드를 구조화하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">모듈이란?</h3>
                <p className="text-muted-foreground">
                  모듈은 파이썬 코드를 담고 있는 파일(.py)입니다. 함수, 클래스, 변수 등을 정의하고 구현한 코드를 재사용
                  가능한 단위로 묶어놓은 것입니다. 모듈을 사용하면 코드를 논리적으로 구성하고 네임스페이스를 관리할 수
                  있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">패키지란?</h3>
                <p className="text-muted-foreground">
                  패키지는 여러 모듈을 담고 있는 디렉토리입니다. 패키지는 모듈을 계층적으로 구성할 수 있게 해주며,
                  대규모 프로젝트에서 코드를 체계적으로 관리하는 데 도움이 됩니다. 패키지 디렉토리에는 __init__.py
                  파일이 포함되어 있어야 합니다(Python 3.3 이상에서는 선택사항).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">모듈과 패키지의 장점</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>코드 재사용</strong>: 한 번 작성한 코드를 여러 프로그램에서 재사용할 수 있습니다.
                  </li>
                  <li>
                    <strong>코드 구조화</strong>: 관련 기능을 모듈과 패키지로 그룹화하여 코드를 체계적으로 관리할 수
                    있습니다.
                  </li>
                  <li>
                    <strong>네임스페이스 관리</strong>: 모듈은 독립된 네임스페이스를 제공하여 이름 충돌을 방지합니다.
                  </li>
                  <li>
                    <strong>협업 용이성</strong>: 여러 개발자가 서로 다른 모듈을 개발하여 통합할 수 있습니다.
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  학습 목표
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>파이썬 모듈을 임포트하고 사용하는 방법 이해하기</li>
                  <li>자신만의 모듈과 패키지를 만드는 방법 배우기</li>
                  <li>파이썬 표준 라이브러리의 주요 모듈 알아보기</li>
                  <li>pip를 사용하여 외부 패키지를 설치하고 관리하는 방법 익히기</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="import">
          <Card>
            <CardHeader>
              <CardTitle>모듈 임포트하기</CardTitle>
              <CardDescription>파이썬에서 모듈을 가져와 사용하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">import 문</h3>
                <p className="text-muted-foreground mb-2">파이썬에서 모듈을 사용하기 위해 import 문을 사용합니다.</p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 전체 모듈 임포트
import math

# 모듈의 함수 사용
radius = 5
area = math.pi * math.pow(radius, 2)
print(f"원의 넓이: {area}")  # 출력: 원의 넓이: 78.53981633974483`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">from-import 문</h3>
                <p className="text-muted-foreground mb-2">
                  모듈에서 특정 함수, 클래스, 변수만 가져오려면 from-import 문을 사용합니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 특정 함수/변수만 임포트
from math import pi, sqrt

radius = 5
area = pi * radius ** 2
print(f"원의 넓이: {area}")  # 출력: 원의 넓이: 78.53981633974483
print(f"5의 제곱근: {sqrt(5)}")  # 출력: 5의 제곱근: 2.23606797749979`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">as 키워드로 별칭 사용</h3>
                <p className="text-muted-foreground mb-2">
                  모듈이나 함수에 별칭(alias)을 지정하여 더 간결하게 사용할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 모듈에 별칭 지정
import matplotlib.pyplot as plt
import numpy as np

# 별칭 사용
x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y)
plt.show()

# 함수에 별칭 지정
from math import sqrt as square_root
print(square_root(16))  # 출력: 4.0`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">와일드카드 임포트</h3>
                <p className="text-muted-foreground mb-2">
                  모듈의 모든 내용을 가져오려면 * 와일드카드를 사용할 수 있습니다. 하지만 이 방식은 네임스페이스 충돌
                  위험이 있어 권장되지 않습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 모든 내용 임포트 (권장하지 않음)
from math import *

print(pi)  # 출력: 3.141592653589793
print(sqrt(16))  # 출력: 4.0`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">자신만의 모듈 만들기</h3>
                <p className="text-muted-foreground mb-2">.py 파일을 만들어 자신만의 모듈을 정의할 수 있습니다.</p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# mymath.py 파일 내용
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

PI = 3.14159

# 다른 파일에서 사용
import mymath

print(mymath.add(5, 3))  # 출력: 8
print(mymath.PI)  # 출력: 3.14159`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">모듈 검색 경로</h3>
                <p className="text-yellow-800">
                  파이썬은 모듈을 임포트할 때 sys.path에 지정된 디렉토리를 순서대로 검색합니다. 현재 디렉토리,
                  PYTHONPATH 환경 변수에 지정된 디렉토리, 파이썬 설치 디렉토리 등이 포함됩니다.
                </p>
                <pre className="bg-yellow-50 p-4 rounded-md font-mono text-sm overflow-x-auto text-yellow-800">
                  {`import sys
print(sys.path)  # 모듈 검색 경로 출력`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="package">
          <Card>
            <CardHeader>
              <CardTitle>패키지 만들기</CardTitle>
              <CardDescription>여러 모듈을 체계적으로 관리하는 패키지 구성 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">패키지 구조</h3>
                <p className="text-muted-foreground mb-2">
                  패키지는 여러 모듈을 포함하는 디렉토리입니다. 패키지로 인식되기 위해서는 __init__.py 파일이 필요합니다
                  (Python 3.3 이상에서는 선택사항).
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`mypackage/              # 최상위 패키지
    __init__.py          # 패키지 초기화 파일
    module1.py           # 모듈 1
    module2.py           # 모듈 2
    subpackage/          # 하위 패키지
        __init__.py      # 하위 패키지 초기화 파일
        module3.py       # 모듈 3
        module4.py       # 모듈 4`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">__init__.py 파일</h3>
                <p className="text-muted-foreground mb-2">
                  __init__.py 파일은 디렉토리를 패키지로 인식하게 하는 역할을 합니다. 비어있을 수도 있고, 패키지 초기화
                  코드를 포함할 수도 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# mypackage/__init__.py 예시
print("mypackage가 임포트되었습니다.")

# 패키지에서 자주 사용되는 함수/클래스를 미리 임포트
from .module1 import function1
from .module2 import Class1

# 버전 정보 등 패키지 메타데이터
__version__ = '0.1.0'`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">패키지 사용 예시</h3>
                <p className="text-muted-foreground mb-2">
                  패키지의 모듈과 하위 패키지를 임포트하여 사용하는 방법입니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 패키지의 모듈 임포트
import mypackage.module1
mypackage.module1.function1()

# from-import 사용
from mypackage import module2
module2.function2()

# 하위 패키지 임포트
import mypackage.subpackage.module3
mypackage.subpackage.module3.function3()

# 특정 함수만 임포트
from mypackage.subpackage.module4 import function4
function4()`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">상대 경로 임포트</h3>
                <p className="text-muted-foreground mb-2">
                  패키지 내에서 다른 모듈을 임포트할 때 상대 경로를 사용할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# mypackage/module1.py
from . import module2  # 같은 패키지의 module2 임포트
from .subpackage import module3  # 하위 패키지의 module3 임포트

# mypackage/subpackage/module3.py
from .. import module1  # 상위 패키지의 module1 임포트
from . import module4  # 같은 패키지의 module4 임포트`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">패키지 배포 준비</h3>
                <p className="text-muted-foreground mb-2">
                  자신이 만든 패키지를 다른 사람들과 공유하기 위해 배포 준비를 할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`mypackage/              # 소스 디렉토리
    mypackage/           # 실제 패키지
        __init__.py
        module1.py
        module2.py
        ...
    setup.py             # 설치 스크립트
    README.md            # 패키지 설명
    LICENSE              # 라이선스 정보
    requirements.txt     # 의존성 정보`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">setup.py 예시</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`from setuptools import setup, find_packages

setup(
    name="mypackage",
    version="0.1.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A brief description of your package",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/mypackage",
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
    install_requires=[
        "numpy>=1.18.0",
        "pandas>=1.0.0",
    ],
)`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stdlib">
          <Card>
            <CardHeader>
              <CardTitle>표준 라이브러리</CardTitle>
              <CardDescription>파이썬에 기본으로 포함된 유용한 모듈들</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">표준 라이브러리란?</h3>
                <p className="text-muted-foreground">
                  파이썬 표준 라이브러리는 파이썬 설치 시 함께 제공되는 모듈과 패키지의 모음입니다. 다양한 작업을
                  수행하는 데 필요한 기능을 제공하므로, 외부 패키지를 설치하지 않고도 많은 작업을 수행할 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">주요 표준 라이브러리</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-1">수학 및 숫자</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>math</strong>: 수학 함수 (삼각함수, 로그 등)
                      </li>
                      <li>
                        <strong>random</strong>: 난수 생성
                      </li>
                      <li>
                        <strong>statistics</strong>: 통계 함수 (평균, 중앙값 등)
                      </li>
                      <li>
                        <strong>decimal</strong>: 고정 및 부동 소수점 연산
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">파일 및 디렉토리</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>os</strong>: 운영 체제 인터페이스
                      </li>
                      <li>
                        <strong>os.path</strong>: 경로 조작
                      </li>
                      <li>
                        <strong>shutil</strong>: 파일 및 디렉토리 작업
                      </li>
                      <li>
                        <strong>glob</strong>: 파일 경로 패턴 매칭
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">데이터 처리</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>json</strong>: JSON 데이터 처리
                      </li>
                      <li>
                        <strong>csv</strong>: CSV 파일 읽기/쓰기
                      </li>
                      <li>
                        <strong>xml</strong>: XML 처리
                      </li>
                      <li>
                        <strong>sqlite3</strong>: SQLite 데이터베이스 접근
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">날짜 및 시간</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>datetime</strong>: 날짜와 시간 처리
                      </li>
                      <li>
                        <strong>time</strong>: 시간 관련 함수
                      </li>
                      <li>
                        <strong>calendar</strong>: 달력 관련 함수
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">네트워킹</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>urllib</strong>: URL 처리
                      </li>
                      <li>
                        <strong>http</strong>: HTTP 프로토콜 클라이언트
                      </li>
                      <li>
                        <strong>socket</strong>: 저수준 네트워킹 인터페이스
                      </li>
                      <li>
                        <strong>email</strong>: 이메일 처리 라이브러리
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">기타 유용한 모듈</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>re</strong>: 정규 표현식
                      </li>
                      <li>
                        <strong>collections</strong>: 특수 컨테이너 데이터형
                      </li>
                      <li>
                        <strong>itertools</strong>: 효율적인 반복자
                      </li>
                      <li>
                        <strong>functools</strong>: 함수형 프로그래밍 도구
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">주요 모듈 사용 예시</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# math 모듈
import math
print(math.sqrt(16))  # 출력: 4.0
print(math.sin(math.pi/2))  # 출력: 1.0

# random 모듈
import random
print(random.randint(1, 10))  # 1~10 사이의 난수
print(random.choice(['사과', '바나나', '오렌지']))  # 리스트에서 무작위 선택

# datetime 모듈
from datetime import datetime, timedelta
now = datetime.now()
print(now)  # 현재 날짜와 시간
tomorrow = now + timedelta(days=1)
print(tomorrow)  # 내일 날짜와 시간

# os 모듈
import os
print(os.getcwd())  # 현재 작업 디렉토리
files = os.listdir('.')  # 현재 디렉토리의 파일 목록
print(files)

# json 모듈
import json
data = {'name': '홍길동', 'age': 30, 'city': '서울'}
json_str = json.dumps(data, ensure_ascii=False)
print(json_str)  # JSON 문자열로 변환
parsed_data = json.loads(json_str)  # JSON 문자열을 파이썬 객체로 변환
print(parsed_data['name'])  # 출력: 홍길동`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">표준 라이브러리 문서</h3>
                <p className="text-muted-foreground">
                  파이썬 표준 라이브러리에 대한 자세한 정보는 공식 문서에서 확인할 수 있습니다. help() 함수를 사용하여
                  대화형 환경에서도 문서를 확인할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 모듈에 대한 도움말 보기
import math
help(math)

# 특정 함수에 대한 도움말 보기
help(math.sqrt)`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pip">
          <Card>
            <CardHeader>
              <CardTitle>pip로 패키지 설치하기</CardTitle>
              <CardDescription>외부 패키지를 설치하고 관리하는 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">pip란?</h3>
                <p className="text-muted-foreground">
                  pip는 파이썬의 패키지 관리자로, PyPI(Python Package Index)에서 패키지를 설치하고 관리하는 도구입니다.
                  파이썬 3.4 이상 버전에는 기본적으로 포함되어 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">기본 pip 명령어</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 패키지 설치
pip install package_name

# 특정 버전 설치
pip install package_name==1.0.0

# 최소 버전 지정
pip install package_name>=1.0.0

# 여러 패키지 동시 설치
pip install package1 package2

# 패키지 업그레이드
pip install --upgrade package_name

# 패키지 제거
pip uninstall package_name

# 설치된 패키지 목록 확인
pip list

# 패키지 정보 확인
pip show package_name

# 업그레이드 가능한 패키지 확인
pip list --outdated`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">requirements.txt 사용</h3>
                <p className="text-muted-foreground mb-2">
                  프로젝트의 의존성을 requirements.txt 파일에 기록하여 관리할 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# requirements.txt 예시
numpy==1.21.0
pandas>=1.3.0
matplotlib
requests>=2.25.0,<3.0.0

# 현재 설치된 패키지를 requirements.txt로 저장
pip freeze > requirements.txt

# requirements.txt에 명시된 패키지 설치
pip install -r requirements.txt`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">가상 환경 사용</h3>
                <p className="text-muted-foreground mb-2">
                  venv 모듈을 사용하여 프로젝트별로 독립된 파이썬 환경을 만들 수 있습니다.
                </p>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# 가상 환경 생성
python -m venv myenv

# 가상 환경 활성화 (Windows)
myenv\\Scripts\\activate

# 가상 환경 활성화 (macOS/Linux)
source myenv/bin/activate

# 가상 환경에 패키지 설치
pip install package_name

# 가상 환경 비활성화
deactivate`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">인기 있는 외부 패키지</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-1">데이터 과학</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>NumPy</strong>: 수치 계산 라이브러리
                      </li>
                      <li>
                        <strong>pandas</strong>: 데이터 분석 도구
                      </li>
                      <li>
                        <strong>matplotlib</strong>: 데이터 시각화
                      </li>
                      <li>
                        <strong>scikit-learn</strong>: 기계 학습 라이브러리
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">웹 개발</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>Django</strong>: 풀스택 웹 프레임워크
                      </li>
                      <li>
                        <strong>Flask</strong>: 경량 웹 프레임워크
                      </li>
                      <li>
                        <strong>FastAPI</strong>: 고성능 API 프레임워크
                      </li>
                      <li>
                        <strong>Requests</strong>: HTTP 라이브러리
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">유틸리티</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>Pillow</strong>: 이미지 처리 라이브러리
                      </li>
                      <li>
                        <strong>PyPDF2</strong>: PDF 파일 처리
                      </li>
                      <li>
                        <strong>python-dotenv</strong>: 환경 변수 관리
                      </li>
                      <li>
                        <strong>tqdm</strong>: 진행 표시줄
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">테스트 및 개발 도구</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>pytest</strong>: 테스트 프레임워크
                      </li>
                      <li>
                        <strong>black</strong>: 코드 포맷터
                      </li>
                      <li>
                        <strong>flake8</strong>: 코드 린터
                      </li>
                      <li>
                        <strong>mypy</strong>: 정적 타입 검사기
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">패키지 사용 예시</h3>
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`# NumPy 사용 예시
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())  # 평균: 3.0
print(arr.std())   # 표준편차

# pandas 사용 예시
import pandas as pd

data = {
    '이름': ['홍길동', '김철수', '이영희'],
    '나이': [30, 25, 28],
    '직업': ['개발자', '교사', '의사']
}
df = pd.DataFrame(data)
print(df)
print(df['나이'].mean())  # 나이 평균

# matplotlib 사용 예시
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y)
plt.title('사인 함수')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.show()`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 text-yellow-800">보안 주의사항</h3>
                <p className="text-yellow-800">
                  신뢰할 수 있는 소스의 패키지만 설치하세요. PyPI에 있는 모든 패키지가 안전하지는 않습니다. 패키지
                  이름을 정확히 확인하고, 가능하면 공식 문서나 GitHub 저장소를 참조하세요.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

