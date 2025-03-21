import { getUserFromCookie } from "@/lib/getUserFromCookie";
import LoopsProps from './loopsProblem'

export default async function Page() {
  // 서버 사이드에서 쿠키 읽기 (await를 사용하여 Promise를 해제)
  const user = await getUserFromCookie();

  return (
    <div>
      {/* 쿠키 데이터를 props로 전달 */}
      <LoopsProps cookieData={user} />
    </div>
  )
}
