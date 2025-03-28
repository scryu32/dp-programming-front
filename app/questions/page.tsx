import QuestionList from "@/components/question-list"
import { QuestionForm } from "@/components/question-form"
import { getUserFromCookie } from "@/lib/getUserFromCookie";

export default async function QuestionsPage() {
  const user = await getUserFromCookie();
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">질문 게시판</h1>
      <div className="grid md:grid-cols-[1fr_300px] gap-8">
        <QuestionList />
        <div className="order-first md:order-last">
          <QuestionForm cookieData={user}/>
        </div>
      </div>
    </div>
  )
}

