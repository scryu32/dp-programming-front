import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Bot, Database, LineChart } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Concepts - Ctrl V Programming Club",
  description: "Learn about artificial intelligence concepts with Ctrl V Programming Club",
}

export default function AIPage() {
  const aiTopics = [
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Learn how computers can learn from data and make predictions",
      icon: <LineChart className="h-10 w-10" />,
      href: "/ai/machine-learning",
    },
    {
      id: "neural-networks",
      title: "Neural Networks",
      description: "Understand the building blocks of deep learning",
      icon: <Brain className="h-10 w-10" />,
      href: "/ai/neural-networks",
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      description: "Discover how computers understand and generate human language",
      icon: <Bot className="h-10 w-10" />,
      href: "/ai/nlp",
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "Learn to analyze and interpret complex data",
      icon: <Database className="h-10 w-10" />,
      href: "/ai/data-science",
    },
  ]

  const aiProjects = [
    {
      id: "image-classifier",
      title: "Build an Image Classifier",
      description: "Create a simple image classifier using TensorFlow",
      href: "/ai/projects/image-classifier",
    },
    {
      id: "chatbot",
      title: "Create a Simple Chatbot",
      description: "Build a rule-based chatbot using Python",
      href: "/ai/projects/chatbot",
    },
    {
      id: "sentiment-analysis",
      title: "Sentiment Analysis",
      description: "Analyze the sentiment of text using machine learning",
      href: "/ai/projects/sentiment-analysis",
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Artificial Intelligence Concepts
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          Explore the fascinating world of artificial intelligence and its applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {aiTopics.map((topic) => (
          <Card key={topic.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="mb-2 text-primary">{topic.icon}</div>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={topic.href} className="w-full">
                <Button variant="outline" className="w-full justify-between">
                  Explore <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center text-center mt-16 mb-8">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Hands-on AI Projects</h2>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Apply your knowledge with these practical AI projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiProjects.map((project) => (
          <Link key={project.id} href={project.href} className="block">
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

