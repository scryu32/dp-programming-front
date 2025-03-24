import type { Metadata } from "next"
import PythonModulesClientPage from "./PythonModulesClientPage"
import { getUserFromCookie } from "@/lib/getUserFromCookie"

export const metadata: Metadata = {
  title: "모듈과 패키지 - Python 학습 - Ctrl V Programming Club",
  description: "파이썬의 모듈과 패키지를 사용하여 코드를 구조화하는 방법을 배웁니다.",
}

export default async function PythonModulesPage() {
  const user = await getUserFromCookie()
  return <PythonModulesClientPage />
}

