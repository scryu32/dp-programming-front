import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI as string; // .env에서 가져오기
if (!uri) {
  throw new Error("MONGO_URI is not defined in .env");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // 개발 환경에서는 캐싱하여 재사용
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // 프로덕션 환경에서는 새로운 클라이언트 생성
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  return clientPromise;
}
