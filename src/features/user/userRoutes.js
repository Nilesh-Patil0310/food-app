import express from "express";
import UserController from "../user/userController.js";
import jwtAuth from "../../middlewares/authMiddleware.js";

// router object
const userRouter = express.Router();

// user controller instance
const userController = new UserController();

// Routes GET | POST | PUT | DELETE
userRouter.get("/getUser", jwtAuth, userController.getUser);

export default userRouter;
