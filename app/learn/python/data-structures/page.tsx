import type { Metadata } from "next"
import PythonDataStructuresClientPage from "./PythonDataStructuresClientPage"
import { getUserFromCookie } from "@/lib/getUserFromCookie";

export const metadata: Metadata = {
  title: "데이터 구조 - Python 학습 - Ctrl V Programming Club",
  description: "리스트, 튜플, 딕셔너리, 집합 등 파이썬의 기본 데이터 구조를 배웁니다.",
}

export default async function PythonDataStructuresPage() {
  const user = await getUserFromCookie();
  return <PythonDataStructuresClientPage />
}
