import QuestionDetailClient from "@/components/question-detail-client"
import { getQuestionById, getAnswersByQuestionId, getStaticQuestionParams } from "@/lib/questionService"

// Match the interface from question-detail-client.tsx
interface Answer {
  id: number // Changed from string to number
  author: string
  content: string
  // Note: userId is missing in the client interface
}

interface Question {
  id: number
  title: string
  author: string
  content: string
  answers: Answer[]
}

export default async function QuestionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const qId = Number.parseInt(id, 10)
  const question = (await getQuestionById(qId)) as Question

  // 답변 데이터 불러오기 (타입 캐스팅)
  const answers = await getAnswersByQuestionId(qId)

  // Convert string IDs to numbers and map to match the client's expected Answer type
  const formattedAnswers = answers.map((answer) => ({
    id: typeof answer.id === "string" ? Number.parseInt(answer.id, 10) : answer.id,
    author: answer.author,
    content: answer.content,
    // userId is omitted as it's not in the client interface
  }))

  // 질문 객체에 타입 안전한 answers 할당
  question.answers = formattedAnswers

  return (
    <div className="container mx-auto py-8 px-4">
      <QuestionDetailClient id={String(qId)} initialQuestion={question} />
    </div>
  )
}

export async function generateStaticParams() {
  return await getStaticQuestionParams()
}

