import QuestionDetailClient from "@/components/question-detail-client"

// 샘플 데이터 - 실제로는 API나 데이터베이스에서 가져올 것입니다
const SAMPLE_QUESTION = {
  id: 1,
  title: "JavaScript에서 비동기 함수 사용 방법",
  author: "김학생",
  content:
    "JavaScript에서 async/await를 사용할 때 try/catch 구문은 어떻게 활용하는 것이 좋을까요? 예제 코드와 함께 설명해주시면 감사하겠습니다.\n\n특히 여러 개의 비동기 함수를 연속해서 호출할 때 에러 처리는 어떻게 하는 것이 효율적인지 궁금합니다.",
  date: "2023-05-15",
  status: "answered" as const,
  answers: [
    {
      id: 101,
      author: "이선생",
      content:
        "안녕하세요, 김학생님!\n\nasync/await와 try/catch를 함께 사용하는 방법에 대해 설명드리겠습니다.\n\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('데이터를 가져오는 중 오류 발생:', error);\n    throw error; // 상위 함수로 에러를 전파하거나 처리할 수 있습니다\n  }\n}\n```\n\n여러 비동기 함수를 연속해서 호출할 때는 각 함수마다 try/catch를 사용하거나, 상위 함수에서 한 번에 처리할 수 있습니다. 상황에 따라 적절한 방법을 선택하시면 됩니다.",
      date: "2023-05-15",
      likes: 8,
    },
    {
      id: 102,
      author: "박개발",
      content:
        "추가로 Promise.all()을 사용하면 여러 비동기 작업을 병렬로 처리할 수 있습니다.\n\n```javascript\nasync function fetchMultipleData() {\n  try {\n    const [users, posts, comments] = await Promise.all([\n      fetch('/api/users').then(res => res.json()),\n      fetch('/api/posts').then(res => res.json()),\n      fetch('/api/comments').then(res => res.json())\n    ]);\n    \n    // 모든 데이터가 성공적으로 로드됨\n    return { users, posts, comments };\n  } catch (error) {\n    // 어느 하나라도 실패하면 이 블록이 실행됨\n    console.error('데이터 로딩 실패:', error);\n  }\n}\n```",
      date: "2023-05-16",
      likes: 5,
    },
  ],
}

// 서버 컴포넌트
export default async function QuestionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // 실제 구현에서는 여기서 서버에서 데이터를 가져옵니다
  // const question = await fetchQuestionById(id)
  const question = SAMPLE_QUESTION

  return (
    <div className="container mx-auto py-8 px-4">
      <QuestionDetailClient id={id} initialQuestion={question} />
    </div>
  )
}

// 클라이언트 컴포넌트는 별도 파일로 분리하는 것이 좋습니다

