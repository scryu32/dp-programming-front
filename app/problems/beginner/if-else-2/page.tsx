import { getUserFromCookie } from "@/lib/getUserFromCookie";
import IfElseProblem1 from './IfElseProblem'

export default async function Page() {
  // 서버 사이드에서 쿠키 읽기 (await를 사용하여 Promise를 해제)
  const user = await getUserFromCookie();

  return (
    <div>
      {/* 쿠키 데이터를 props로 전달 */}
      <IfElseProblem1 cookieData={user} />
    </div>
  )
}
