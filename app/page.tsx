// app/page.tsx

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, BookOpen, Brain } from "lucide-react";
import HeroSection from "@/components/hero-section";
import FeatureCard from "@/components/feature-card";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers"; // This is for server-side cookies in the App Directory

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  let user = null;
  try {
    if (token) {
      user = jwt.verify(token, jwtSecret) as JwtPayload;
    }
  } catch (error) {
    // Handle error if JWT verification fails
    user = null;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Offer</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
            Join our programming club to learn, practice, and master programming skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-10 w-10" />}
            title="Programming Grammar"
            description="프로그래밍의 기초부터 심화까지, 다양한 프로그래밍 문법과 알고리즘 정리"
            href="/learn"
          />
          <FeatureCard
            icon={<Code className="h-10 w-10" />}
            title="Programming Problems"
            description="기초 문제부터 고난도 문제까지, 다양한 알고리즘을 학습하기 위한 문제집"
            href="/problems"
          />
          <FeatureCard
            icon={<Brain className="h-10 w-10" />}
            title="Artificial Intelligence"
            description="인공지능의 원리, 인공지능을 잘 이용하는 방법"
            href="/ai"
          />
        </div>

        <div className="flex justify-center mt-12">
          {user ? (
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Check Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Join Ctrl V <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </section>

      {!user && (
        <section className="bg-muted py-12">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to start coding?</h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-[600px]">
                Join our programming club today and begin your journey into the world of coding
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/register">
                  <Button size="lg">Register Now</Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
