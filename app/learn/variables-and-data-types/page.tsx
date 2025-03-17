import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { getUserFromCookie } from "@/lib/getUserFromCookie";

export default async function VariablesAndDataTypesPage() {
  
  const user = await getUserFromCookie();
  return (
    <div className="container py-10 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">변수와 자료형</h1>
      <p className="text-lg text-muted-foreground mb-8">프로그래밍의 기본 개념인 변수와 자료형에 대해 알아봅시다.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">변수란?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              변수는 데이터를 저장하는 컴퓨터 메모리의 이름이 지정된 위치입니다. 변수를 통해 프로그램은 데이터를
              저장하고 조작할 수 있습니다.
            </p>
            <div className="bg-muted p-4 rounded-md mb-4">
              <code className="text-sm">
                age = 25
                <br />
                name = "홍길동"
                <br />
                isStudent = true
              </code>
            </div>
            <p>
              위 예시에서 <code>age</code>, <code>name</code>, <code>isStudent</code>는 모두 변수입니다. 각각 숫자,
              문자열, 불리언 값을 저장하고 있습니다.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">기본 자료형</h2>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="numbers">숫자형</TabsTrigger>
            <TabsTrigger value="strings">문자열</TabsTrigger>
            <TabsTrigger value="booleans">불리언</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardContent className="pt-6">
                <p>프로그래밍 언어에서 일반적으로 사용되는 기본 자료형은 다음과 같습니다:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <strong>숫자형(Number)</strong>: 정수, 실수 등 숫자 값
                  </li>
                  <li>
                    <strong>문자열(String)</strong>: 텍스트 데이터
                  </li>
                  <li>
                    <strong>불리언(Boolean)</strong>: 참(true) 또는 거짓(false) 값
                  </li>
                  <li>
                    <strong>null/undefined</strong>: 값이 없음을 나타내는 특수 값
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="numbers">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">숫자형은 정수와 실수를 포함합니다:</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <code className="text-sm">
                    // 정수
                    <br />
                    age = 25;
                    <br />
                    count = -10
                    <br />
                    <br />
                    // 실수
                    <br />
                    price = 9.99
                    <br />
                    pi = 3.14159
                  </code>
                </div>
                <Alert>
                  <InfoIcon className="h-4 w-4" />
                  <AlertTitle>참고</AlertTitle>
                  <AlertDescription>
                    Python에서는 정수의 크기 제한이 없습니다. Python은 '동적 타입'을 활용해 변수를 알아서 관리해줍니다.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strings">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">문자열은 텍스트 데이터를 저장합니다:</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <code className="text-sm">
                    name = "홍길동"
                    <br />
                    message = 'Hello, World!'
                    <br />
                  </code>
                </div>
                <p className="mb-4">문자열 연산:</p>
                <div className="bg-muted p-4 rounded-md">
                  <code className="text-sm">
                    firstName = "홍"
                    <br />
                    lastName = "길동"
                    <br />
                    fullName = firstName + lastName # "홍길동"
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="booleans">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">불리언은 참(true) 또는 거짓(false) 값만 가질 수 있습니다:</p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <code className="text-sm">
                    is_student = true
                    <br />
                    is_smart = false
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">언어별 변수 선언 방법</h2>
        <Tabs defaultValue="javascript">
          <TabsList className="mb-4">
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="c">C</TabsTrigger>
          </TabsList>

          <TabsContent value="javascript">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  JavaScript에서는 <code>var</code>, <code>let</code>, <code>const</code>를 사용하여 변수를 선언합니다:
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <code className="text-sm">
                    // var: 함수 스코프, 재선언 가능 (권장하지 않음)
                    <br />
                    var age = 25;
                    <br />
                    <br />
                    // let: 블록 스코프, 값 변경 가능
                    <br />
                    let name = "홍길동";
                    <br />
                    name = "김철수"; // 값 변경 가능
                    <br />
                    <br />
                    // const: 블록 스코프, 값 변경 불가능
                    <br />
                    const PI = 3.14159;
                    <br />
                    // PI = 3.14; // 오류 발생
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="python">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">Python에서는 변수 선언 시 자료형을 명시하지 않습니다:</p>
                <div className="bg-muted p-4 rounded-md">
                  <code className="text-sm">
                    # 변수 선언과 할당
                    <br />
                    age = 25
                    <br />
                    name = "홍길동"
                    <br />
                    is_student = True
                    <br />
                    <br /># 값 변경
                    <br />
                    age = 26
                    <br />
                    name = "김철수"
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="c">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">C에서는 변수 선언 시 자료형을 명시해야 합니다:</p>
                <div className="bg-muted p-4 rounded-md">
                  <code className="text-sm">
                    // 기본 자료형
                    <br />
                    int age = 25;
                    <br />
                    float price = 9.99;
                    <br />
                    // 참조 자료형
                    <br />
                    char[7] name = "홍길동";
                    <br />
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

