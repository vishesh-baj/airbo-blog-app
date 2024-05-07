import dotenv from "dotenv";
import express, { Express } from "express";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 8888;
const DB_URL =
  process.env.MONGO_DB_URI || "mongodb://localhost:27017/mydatabase";

const app: Express = express();

// mongodb connection
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => {
      console.log(`SERVER STARTED AT PORT ${PORT}`);
    });
  })
  .catch((error) =>
    console.error("ERROR OCCURRED WHILE CONNECTING TO DB", error)
  );

// app routes
