import express from "express";
import swaggerUi from "swagger-ui-express";
import swagerJSdoc from "swagger-jsdoc";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./src/features/user/userRoutes.js";
import connectDB from "./src/config/db.js";
import authRouter from "./src/features/auth/authRoutes.js";
import resturantRouter from "./src/features/resturant/resturantRoute.js";
import categoryRouter from "./src/features/category/categoryRoute.js";
import foodRouter from "./src/features/food/foodRoute.js";

// dotenv configuartion
dotenv.config();

// DB connection
connectDB();
// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// cors configuration

app.use(
  cors({
    origin: "*", // Allow all origins or specify the allowed domains
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

//  routes
// swagger api-doc
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Food Application APIs",
      version: "1.0.0",
    },
    servers: [
      {
        // url: "http://localhost:3200",
        url: "https://food-app-u5s7.onrender.com",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    "./src/features/auth/authRoutes.js",
    "./src/features/user/userRoutes.js",
    "./src/features/resturant/resturantRoute.js",
    "./src/features/food/foodRoute.js",
    "./src/features/category/categoryRoute.js",
  ],
};
// swagger specification variable
const swaggerSpecification = swagerJSdoc(options);

// swagger routes from here
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecification));

// 1 user route from here
app.use("/api/v1/user", userRouter);
// 2 auth route from here
app.use("/api/v1/auth", authRouter);
// 3 resturant routes from here
app.use("/api/v1/resturant", resturantRouter);
// 4 category routes from here
app.use("/api/v1/category", categoryRouter);
// 5 food routes from here
app.use("/api/v1/food", foodRouter);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send(
      "<h1>WellCome to Food-App Please Hit the /api-docs for the API Documetation of this app</h1>"
    );
});

// PORT
const PORT = process.env.PORT || 10000;
// server listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.white.bgMagenta);
});
