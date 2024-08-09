import express from "express";
import UserController from "../user/userController.js";
import jwtAuth from "../../middlewares/authMiddleware.js";

// router object
const userRouter = express.Router();

// user controller instance
const userController = new UserController();

// Ruser get routes
/**
 * @swagger
 * /api/v1/user/getUser:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a user by their ID
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: body
 *         description: User ID
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *           required:
 *             - id
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Error in get user API
 *     security:
 *       - bearerAuth: []
 */
userRouter.get("/getUser", jwtAuth, userController.getUser);

// user put routes
/**
 * @swagger
 * /api/v1/user/update-user:
 *   put:
 *     summary: Update a user
 *     description: Update user details
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               userName:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Error in update user API
 *     security:
 *       - bearerAuth: []
 */
userRouter.put('/update-user',jwtAuth, userController.updateUser);

// password update
/**
 * @swagger
 * /api/v1/user/update-password:
 *   post:
 *     summary: Update user password
 *     description: Update the password of an existing user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *             required:
 *               - id
 *               - oldPassword
 *               - newPassword
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Invalid old password
 *       404:
 *         description: User not found
 *       500:
 *         description: Error in password update API
 *     security:
 *       - bearerAuth: []
 */
userRouter.post('/update-password',jwtAuth,userController.updatePassword);

// reset password
/**
 * @swagger
 * /api/v1/user/reset-password:
 *   post:
 *     summary: Reset user password
 *     description: Reset the password of an existing user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               newPassword:
 *                 type: string
 *               answer:
 *                 type: string
 *             required:
 *               - email
 *               - newPassword
 *               - answer
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       404:
 *         description: User not found or invalid answer
 *       500:
 *         description: Error in password reset API
 *     security:
 *       - bearerAuth: []
 */
userRouter.post('/reset-password',jwtAuth, userController.resetPassword);

// delete user
/**
 * @swagger
 * /api/v1/user/delete-user/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user by their ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Error in delete user API
 *     security:
 *       - bearerAuth: []
 */
userRouter.delete('/delete-user/:id',jwtAuth, userController.deleteUser)

export default userRouter;
