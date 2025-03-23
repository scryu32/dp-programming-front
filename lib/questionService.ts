import { connectToDatabase } from "@/lib/database";

export async function getQuestionById(qId: number) {
  const client = await connectToDatabase();
  const db = client.db("forum");

  const questionDoc = await db.collection("questions").findOne({ qId });
  if (!questionDoc) return null;

  return {
    id: questionDoc.qId,
    title: questionDoc.title,
    author: questionDoc.name,
    content: questionDoc.content,
    answers: [],
  };
}

export async function getAnswersByQuestionId(qId: number) {
  const client = await connectToDatabase();
  const db = client.db("forum");

  const answersCursor = db.collection("questionAnswer").find({ qId });
  const answers = await answersCursor.toArray();

  return answers.map((answer: any) => ({
    id: answer._id?.toString() || answer.qId,
    author: answer.name,
    userId: answer.userId,
    content: answer.content,
  }));
}

export async function getStaticQuestionParams() {
  const client = await connectToDatabase();
  const db = client.db("forum");

  const questions = await db.collection("questions").find({}, { projection: { qId: 1 } }).toArray();
  return questions.map((question) => ({ id: question.qId.toString() }));
}
