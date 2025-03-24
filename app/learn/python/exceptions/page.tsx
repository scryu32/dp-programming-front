import type { Metadata } from "next"
import PythonExceptionsClientPage from "./PythonExceptionsClientPage"
import { getUserFromCookie } from "@/lib/getUserFromCookie"

export const metadata: Metadata = {
  title: "예외 처리 - Python 학습 - Ctrl V Programming Club",
  description: "try-except 블록을 사용하여 오류를 처리하는 방법을 배웁니다.",
}

export default async function PythonExceptionsPage() {
  const user = await getUserFromCookie()
  return <PythonExceptionsClientPage />
}

