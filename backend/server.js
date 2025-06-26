import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import { connectDB } from "./config/database.js";
import { recruiterRouter } from "./routes/recruiter/recruiterRoutes.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.use("/api/recruiter", recruiterRouter);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
