import express from "express";
import AuthController from './authController.js'

// router
const authRouter = express.Router();

// // Authcontroller object
const authController = new AuthController()

// Register | POST route
authRouter.post("/register", authController.register);

// login post route
authRouter.post('/login', authController.login)

export default authRouter;
