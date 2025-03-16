import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OthersPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">다른 프로그래밍 언어들</h1>
        <p className="text-lg text-muted-foreground">
          Python 이외에도 다양한 프로그래밍 언어가 있습니다. 각 언어는 특정 분야나 목적에 맞게 설계되었으며, 언제 어떤
          언어를 배워야 하는지 알아보세요.
        </p>
      </div>

      <Tabs defaultValue="javascript" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
          <TabsTrigger value="java">Java</TabsTrigger>
          <TabsTrigger value="c">C</TabsTrigger>
          <TabsTrigger value="cpp">C++</TabsTrigger>
          <TabsTrigger value="rust">Rust</TabsTrigger>
        </TabsList>

        <TabsContent value="javascript" className="space-y-6">
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-yellow-100 p-4 rounded-full">
              <span className="text-4xl">📜</span>
            </div>
            <h2 className="text-3xl font-bold">JavaScript</h2>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">언제 배워야 할까요?</h3>
            <p className="mb-4">
              Python을 배운 후 웹 개발에 관심이 있다면 JavaScript를 배우는 것이 좋습니다. 웹 브라우저에서 동작하는
              유일한 프로그래밍 언어로, 웹 페이지에 동적인 기능을 추가할 수 있습니다.
            </p>

            <h3 className="text-xl font-semibold mb-4">주요 특징</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>웹 브라우저에서 실행되는 클라이언트 측 스크립트 언어</li>
              <li>Node.js를 통해 서버 측 개발도 가능</li>
              <li>동적 타입 언어로 유연한 개발 가능</li>
              <li>React, Vue, Angular 등 다양한 프레임워크 존재</li>
              <li>비동기 프로그래밍 지원</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">활용 분야</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">웹 개발</h4>
                <p>웹사이트의 동적 기능 구현</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">모바일 앱 개발</h4>
                <p>React Native를 통한 크로스 플랫폼 앱 개발</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">서버 개발</h4>
                <p>Node.js를 이용한 백엔드 서버 구축</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">데스크톱 앱</h4>
                <p>Electron을 이용한 크로스 플랫폼 데스크톱 앱 개발</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="java" className="space-y-6">
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-red-100 p-4 rounded-full">
              <span className="text-4xl">☕</span>
            </div>
            <h2 className="text-3xl font-bold">Java</h2>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">언제 배워야 할까요?</h3>
            <p className="mb-4">
              객체지향 프로그래밍의 개념을 확실히 이해하고 싶거나, 안드로이드 앱 개발, 기업용 소프트웨어 개발에 관심이
              있다면 Java를 배우는 것이 좋습니다. Python보다 더 엄격한 문법을 가지고 있어 중급 이상의 프로그래머에게
              적합합니다.
            </p>

            <h3 className="text-xl font-semibold mb-4">주요 특징</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>객체지향 프로그래밍 언어</li>
              <li>"Write Once, Run Anywhere" - 다양한 플랫폼에서 실행 가능</li>
              <li>강력한 타입 시스템과 메모리 관리</li>
              <li>대규모 애플리케이션 개발에 적합</li>
              <li>방대한 라이브러리와 프레임워크 생태계</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">활용 분야</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">안드로이드 앱 개발</h4>
                <p>구글의 공식 안드로이드 개발 언어</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">엔터프라이즈 시스템</h4>
                <p>대규모 기업용 소프트웨어 개발</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">웹 서버 개발</h4>
                <p>Spring 프레임워크를 이용한 백엔드 개발</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">빅데이터 처리</h4>
                <p>Hadoop, Spark 등의 빅데이터 플랫폼</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="c" className="space-y-6">
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <span className="text-4xl">🔧</span>
            </div>
            <h2 className="text-3xl font-bold">C</h2>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">언제 배워야 할까요?</h3>
            <p className="mb-4">
              저수준 프로그래밍, 하드웨어 제어, 운영체제 개발, 임베디드 시스템에 관심이 있다면 C를 배우는 것이 좋습니다.
              메모리 관리와 컴퓨터 구조에 대한 깊은 이해를 원하는 학생들에게 적합합니다. 다른 많은 언어의 기반이 되는
              언어이기도 합니다.
            </p>

            <h3 className="text-xl font-semibold mb-4">주요 특징</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>절차지향 프로그래밍 언어</li>
              <li>하드웨어에 가까운 저수준 프로그래밍 가능</li>
              <li>메모리 직접 관리 (포인터 사용)</li>
              <li>높은 실행 속도와 효율성</li>
              <li>작은 크기의 실행 파일 생성</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">활용 분야</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">운영체제 개발</h4>
                <p>Linux, Windows 등의 커널 개발</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">임베디드 시스템</h4>
                <p>마이크로컨트롤러 프로그래밍</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">시스템 소프트웨어</h4>
                <p>드라이버, 컴파일러 등 개발</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">게임 엔진</h4>
                <p>고성능 게임 엔진의 핵심 부분 개발</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="cpp" className="space-y-6">
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <span className="text-4xl">🔌</span>
            </div>
            <h2 className="text-3xl font-bold">C++</h2>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">언제 배워야 할까요?</h3>
            <p className="mb-4">
              C의 기본 개념을 이해한 후, 객체지향 프로그래밍과 고성능 애플리케이션 개발에 관심이 있다면 C++를 배우는
              것이 좋습니다. 게임 개발, 시스템 소프트웨어, 고성능 애플리케이션을 만들고 싶은 학생들에게 적합합니다.
            </p>

            <h3 className="text-xl font-semibold mb-4">주요 특징</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>C의 확장으로 개발된 객체지향 프로그래밍 언어</li>
              <li>다중 패러다임 지원 (절차적, 객체지향, 함수형, 제네릭)</li>
              <li>템플릿을 통한 제네릭 프로그래밍</li>
              <li>메모리 직접 관리와 높은 성능</li>
              <li>STL(Standard Template Library) 제공</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">활용 분야</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">게임 개발</h4>
                <p>Unreal Engine, Unity 등의 게임 엔진</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">고성능 소프트웨어</h4>
                <p>Adobe Photoshop, Autodesk Maya 등</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">금융 시스템</h4>
                <p>고주파 거래 시스템, 금융 모델링</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">그래픽스 프로그래밍</h4>
                <p>3D 렌더링, 시뮬레이션</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="rust" className="space-y-6">
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-orange-100 p-4 rounded-full">
              <span className="text-4xl">🦀</span>
            </div>
            <h2 className="text-3xl font-bold">Rust</h2>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">언제 배워야 할까요?</h3>
            <p className="mb-4">
              C/C++의 성능과 메모리 안전성을 모두 원한다면 Rust를 배우는 것이 좋습니다. 이미 다른 프로그래밍 언어에
              익숙하고, 시스템 프로그래밍, 웹 어셈블리, 고성능 서버 개발에 관심이 있는 고급 학생들에게 적합합니다.
            </p>

            <h3 className="text-xl font-semibold mb-4">주요 특징</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>메모리 안전성을 컴파일 시간에 보장</li>
              <li>소유권(Ownership) 개념을 통한 메모리 관리</li>
              <li>동시성 프로그래밍에 강점</li>
              <li>C/C++와 비슷한 성능</li>
              <li>강력한 타입 시스템과 패턴 매칭</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">활용 분야</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">시스템 프로그래밍</h4>
                <p>운영체제 구성 요소, 드라이버 개발</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">웹 어셈블리</h4>
                <p>브라우저에서 실행되는 고성능 코드</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">네트워크 서비스</h4>
                <p>고성능 웹 서버, 마이크로서비스</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">블록체인</h4>
                <p>암호화폐, 스마트 계약 플랫폼</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-slate-100 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">언제 다른 언어를 배워야 할까요?</h2>
        <p className="mb-4">프로그래밍 언어를 선택할 때는 다음 사항을 고려하세요:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>목표와 관심 분야:</strong> 웹 개발, 게임 개발, 데이터 과학 등 관심 분야에 맞는 언어를 선택하세요.
          </li>
          <li>
            <strong>난이도와 학습 곡선:</strong> Python을 충분히 익힌 후 더 복잡한 언어로 넘어가는 것이 좋습니다.
          </li>
          <li>
            <strong>커뮤니티와 자료:</strong> 활발한 커뮤니티와 풍부한 학습 자료가 있는 언어를 선택하면 학습에 도움이
            됩니다.
          </li>
          <li>
            <strong>취업 전망:</strong> 산업에서 수요가 많은 언어를 배우면 취업에 유리할 수 있습니다.
          </li>
        </ul>
        <p className="mt-4">
          처음에는 한 언어를 깊이 배우고, 프로그래밍 개념을 확실히 이해한 후 다른 언어로 확장하는 것이 효과적입니다.
        </p>
      </div>
    </div>
  )
}

