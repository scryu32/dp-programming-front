import type { Metadata } from "next"
import PythonFileIOClientPage from "./PythonFileIOClientPage"

export const metadata: Metadata = {
  title: "파일 입출력 - Python 학습 - Ctrl V Programming Club",
  description: "파일을 읽고 쓰는 방법, 다양한 파일 형식 처리에 대해 배웁니다.",
}

export default function PythonFileIOPage() {
  return <PythonFileIOClientPage />
}

