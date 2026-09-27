import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not configured");

const globalForMongo = globalThis as typeof globalThis & { mongoClientPromise?: Promise<MongoClient> };

export const mongoClientPromise =
  globalForMongo.mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClientPromise = mongoClientPromise;
}

export async function getDatabase() {
  const client = await mongoClientPromise;
  return client.db(process.env.MONGODB_DB || "portfolioCms");
}
