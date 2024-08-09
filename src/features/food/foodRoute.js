import express from "express";
import FoodController from "./foodController.js";
import jwtAuth from "../../middlewares/authMiddleware.js";
import admin from "../../middlewares/adminMiddleware.js";

// create Food Route instance
const foodRouter = express.Router();

// create foodController instance
const foodController = new FoodController();

// routes
// 5.1 get all foods
foodRouter.get("/get_allfood", foodController.getAllFoods);

// 5.2 get One food
foodRouter.get("/get_onefood/:id", foodController.getOneFood);

// 5.3 create food
foodRouter.post("/create_food", jwtAuth, foodController.createFood);

// 5.4 update food
foodRouter.put("/update_food/:id", jwtAuth, foodController.updateFood);

// 5.5 delete food
foodRouter.delete("/delete_food/:id", jwtAuth, foodController.deleteFood);

// 5.6 get food by resturantId
foodRouter.get("/getByResturantId/:id", foodController.getFoodByResturantId);

// 5.7 place order
foodRouter.post("/placeorder", jwtAuth, foodController.placeOrder);

// 5.8 order status
foodRouter.post("/orderstatus/:id", jwtAuth, admin, foodController.orderStatus);

/**
 * @swagger
 * components:
 *   schemas:
 *     Food:
 *       type: object
 *       required:
 *         - title
 *         - desc
 *         - price
 *         - resturant
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the food
 *         desc:
 *           type: string
 *           description: The description of the food
 *         price:
 *           type: number
 *           description: The price of the food
 *         imgUrl:
 *           type: string
 *           description: The image URL of the food
 *         foodTags:
 *           type: array
 *           items:
 *             type: string
 *           description: The tags associated with the food
 *         category:
 *           type: string
 *           description: The category of the food
 *         code:
 *           type: string
 *           description: The code of the food
 *         isAvalable:
 *           type: boolean
 *           description: Availability status of the food
 *         resturant:
 *           type: string
 *           description: The ID of the restaurant associated with the food
 */

/**
 * @swagger
 * /api/v1/food/get_allfood:
 *   get:
 *     summary: Retrieve a list of all foods
 *     tags: [Foods]
 *     responses:
 *       200:
 *         description: A list of foods
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Food'
 */

/**
 * @swagger
 * /api/v1/food/get_onefood/{id}:
 *   get:
 *     summary: Get a single food by ID
 *     tags: [Foods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The food ID
 *     responses:
 *       200:
 *         description: The food description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Food'
 *       404:
 *         description: Food not found
 */

/**
 * @swagger
 * /api/v1/food/create_food:
 *   post:
 *     summary: Create a new food item
 *     tags: [Foods]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Food'
 *     responses:
 *       201:
 *         description: The food was created successfully
 *       500:
 *         description: Error in creating food
 */

/**
 * @swagger
 * /api/v1/food/update_food/{id}:
 *   put:
 *     summary: Update a food item by ID
 *     tags: [Foods]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The food ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Food'
 *     responses:
 *       200:
 *         description: The food was updated successfully
 *       500:
 *         description: Error in updating food
 */

/**
 * @swagger
 * /api/v1/food/delete_food/{id}:
 *   delete:
 *     summary: Delete a food item by ID
 *     tags: [Foods]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The food ID
 *     responses:
 *       200:
 *         description: The food was deleted successfully
 *       500:
 *         description: Error in deleting food
 */

/**
 * @swagger
 * /api/v1/food/getByResturantId/{id}:
 *   get:
 *     summary: Get food items by restaurant ID
 *     tags: [Foods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant ID
 *     responses:
 *       200:
 *         description: List of foods from a restaurant
 *       500:
 *         description: Error in fetching food items
 */

/**
 * @swagger
 * /api/v1/food/placeorder:
 *   post:
 *     summary: Place an order for food
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Food'
 *     responses:
 *       201:
 *         description: Order placed successfully
 *       400:
 *         description: Invalid cart provided
 *       500:
 *         description: Error in placing order
 */

/**
 * @swagger
 * /api/v1/food/orderstatus/{id}:
 *   post:
 *     summary: Update the status of an order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The new status of the order
 *     responses:
 *       200:
 *         description: Order status updated successfully
 *       500:
 *         description: Error in updating order status
 */

export default foodRouter;
