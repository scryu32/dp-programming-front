// page.tsx
import { getUserFromCookie } from "@/lib/getUserFromCookie";
import Dashboard from "./dashboard";  // dashboard.tsx 컴포넌트를 import
import { JwtPayload } from "jsonwebtoken";  // JwtPayload 타입을 import

export default async function Page() {
  // 서버 사이드에서 쿠키 읽기 (await를 사용하여 Promise를 해제)
  const user = await getUserFromCookie();
  const userId = (user as JwtPayload).userId as string;

  return (
    <div>
      {/* userId를 props로 전달 */}
      <Dashboard user={userId} />
    </div>
  );
}
