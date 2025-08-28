import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, message, statusCode });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
