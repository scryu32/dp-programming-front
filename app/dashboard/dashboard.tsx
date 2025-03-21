"use client";

import { useEffect, useState } from "react";
import { DashboardHeader } from "./components/dashboard-header";
import { ProfileCard } from "./components/profile-card";
import { SolvedProblems } from "./components/solved-problems";

interface DashboardProps {
    user: string;
}

async function getUserInformation( userId : string) {
  try {
    const response = await fetch(`/api/user/information?userId=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user information");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user information:", error);
    return null;
  }
}

export default function Dashboard({ user }: DashboardProps) {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (user) {
      const fetchUserInfo = async () => {
        const userInfo = await getUserInformation(user);
        setUserInfo(userInfo);
      };

      fetchUserInfo();
    }
  }, [user]);

  if (!userInfo) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">사용자 정보를 불러오는 중...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <DashboardHeader userName={userInfo.name} />
      <div className="grid gap-8 mt-8 md:grid-cols-2">
        <ProfileCard userInfo={userInfo} />
        <SolvedProblems solvedProblems={userInfo.solvedProblems} />
      </div>
    </div>
  );
}
