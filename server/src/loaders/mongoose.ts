import mongoose from "mongoose";
import { Db } from "mongodb";
import config from "@/config";

export default async (): Promise<Db> => {
  const mongo = await mongoose.connect(config.databaseURL);
  return mongo.connection.db;
};
