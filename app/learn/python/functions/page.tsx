import type { Metadata } from "next"
import PythonFunctionsClientPage from "./PythonFunctionsClientPage"
import { getUserFromCookie } from "@/lib/getUserFromCookie"

export const metadata: Metadata = {
  title: "함수 - Python 학습 - Ctrl V Programming Club",
  description: "함수를 정의하고 사용하는 방법, 매개변수와 반환값에 대해 배웁니다.",
}

export default async function PythonFunctionsPage() {
  const user = await getUserFromCookie()
  return <PythonFunctionsClientPage />
}

