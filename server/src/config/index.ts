import dotenv from "dotenv";
import path from "path";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config({
  path: path.join(__dirname, "../..", ".env"),
});

if (envFound.error) {
  throw new Error("🚨 Unable to find .env file 🚨");
}

export default {
  port: parseInt(process.env.SERVER_PORT) || 8000,
  databaseURL: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,

  jwtSecret: process.env.JWT_SECRET.replace(/\\n/gm, "\n"),
  jwtAlgorithm: process.env.JWT_ALGO,

  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },

  api: {
    prefix: "/api",
  },
};
