import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// default routes
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Wellcome to food app</h1>");
});

// PORT
const PORT = 3200;
// server listen
app.listen(PORT, () => {
  console.log("Node Server Running".white.bgMagenta);
});
