import type { Metadata } from "next"
import PythonVariablesClientPage from "./PythonVariablesClientPage"

export const metadata: Metadata = {
  title: "변수와 데이터 타입 - Python 학습 - Ctrl V Programming Club",
  description: "파이썬의 기본 변수 선언 및 데이터 타입에 대해 배웁니다.",
}

export default function PythonVariablesPage() {
  return <PythonVariablesClientPage />
}