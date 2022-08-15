import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.js";
import { MongoClient } from "mongodb";
import cors from "cors";
import { portfolioMailRouter } from "./routes/apiRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/api", portfolioMailRouter);

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo DB connected,");
  return client;
}

export const client = await createConnection();

app.get("/", (req, res) => {
  res.send("default request accepted");
});

app.listen(PORT, () => {
  console.log("listening to request at", PORT);
});
