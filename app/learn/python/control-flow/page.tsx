import type { Metadata } from "next"
import PythonControlFlowClientPage from "./PythonControlFlowClientPage"

export const metadata: Metadata = {
  title: "제어문과 반복문 - Python 학습 - Ctrl V Programming Club",
  description: "파이썬의 조건문과 반복문을 통해 프로그램의 흐름을 제어하는 방법을 배웁니다.",
}

export default function PythonControlFlowPage() {
  return <PythonControlFlowClientPage />
}

