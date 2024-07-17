import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { configDotenv } from "dotenv";
import indexRouter from "./routes/index";
import userRouter from "./routes/users";
import favoriteRouter from "./routes/favorite";
import { errorHandler } from "./src/exception/Errorhandlers";
import connectDB from "./src/database/mongodb";

configDotenv();
const app = express();

// connect mongodb
connectDB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// global error handler
app.use(errorHandler);

export default app;
