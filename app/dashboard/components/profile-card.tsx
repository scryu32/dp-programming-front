import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AtSign, GraduationCap, BadgeIcon as IdCard, Mail, User } from "lucide-react"

interface UserInfo {
  name: string
  id: string
  email: string
  isStudent: boolean
  grade?: number
  studentNumber?: string
  solvedProblems: string[]
}

interface ProfileCardProps {
  userInfo: UserInfo
}

export function ProfileCard({ userInfo }: ProfileCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">프로필 정보</CardTitle>
        <CardDescription>회원 정보 및 학생 정보를 확인할 수 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">기본 정보</h3>
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">이름</p>
                <p className="font-medium">{userInfo.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IdCard className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">아이디</p>
                <p className="font-medium">{userInfo.id}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">이메일</p>
                <p className="font-medium">{userInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        {userInfo.isStudent && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">학생 정보</h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">학년</p>
                  <p className="font-medium">{userInfo.grade}학년</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AtSign className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">학번</p>
                  <p className="font-medium">{userInfo.studentNumber}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Badge variant={userInfo.isStudent ? "default" : "outline"}>
            {userInfo.isStudent ? "학생" : "일반 회원"}
          </Badge>
          <Badge variant="outline">문제 {userInfo.solvedProblems.length}개 해결</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

