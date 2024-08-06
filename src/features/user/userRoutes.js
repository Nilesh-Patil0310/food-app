import express from "express";
import UserController from "../user/userController.js";
import jwtAuth from "../../middlewares/authMiddleware.js";

// router object
const userRouter = express.Router();

// user controller instance
const userController = new UserController();

// Ruser get routes
userRouter.get("/getUser", jwtAuth, userController.getUser);

// user put routes
userRouter.put('/update-user',jwtAuth, userController.updateUser);

// password update
userRouter.post('/update-password',jwtAuth,userController.updatePassword);

// reset password
userRouter.post('/reset-password',jwtAuth, userController.resetPassword);

// delete user
userRouter.delete('/delete-user/:id',jwtAuth, userController.deleteUser)

export default userRouter;
