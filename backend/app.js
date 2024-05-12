import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import morgan from "morgan";

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(morgan("dev"));

// routes
import jobRouter from "./routes/job.routes.js";

app.use("/api/v1/jobs", jobRouter);

//error handlers
import {
  notFound,
  errorHandler,
} from "./middlewares/errorHandler.middleware.js";

app.use(notFound);
app.use(errorHandler);
