import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/database";

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const db = (await connectToDatabase()).db("forum");
    const collection = db.collection("questionAnswer")
    const collection_two = db.collection("users")
    const userName = await collection_two.findOne({userId : data.cookieData.userId})

    if (!userName) {
        throw Error
    }

    const pretty_data = {
        qId: data.id,
        userId: data.cookieData.userId,
        name: userName.name,
        content: data.answerText,
        date: new Date()
    }
    const result = await collection.insertOne(pretty_data)

    return NextResponse.json(
      { message: "Question submitted successfully"},
      { status: 201 }
    )
  } catch (error) {
    console.error("Error inserting question:", error)
    return NextResponse.json({ error: "Failed to submit question" }, { status: 500 })
  }
}
