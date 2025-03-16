import { User } from "lucide-react"

interface DashboardHeaderProps {
  userName: string
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
      <div className="flex items-center gap-2 text-muted-foreground">
        <User className="h-4 w-4" />
        <span>{userName}님의 프로필</span>
      </div>
    </div>
  )
}

