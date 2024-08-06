import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./src/features/user/userRoutes.js";
import connectDB from "./src/config/db.js";
import authRouter from "./src/features/auth/authRoutes.js";

// dotenv configuartion
dotenv.config();

// DB connection
connectDB();
// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
// user route
app.use('/api/v1/user', userRouter)
// auth route
app.use('/api/v1/auth', authRouter)

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Wellcome to food app</h1>");
});

// PORT
const PORT = process.env.PORT || 3200;
// server listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.white.bgMagenta);
});
