import express from "express";
import ResturantController from "./resturantController.js";
import jwtAuth from "../../middlewares/authMiddleware.js";

// Resturant route object
const resturantRouter = express.Router();

// restorent controller instance
const resturantController = new ResturantController();

// Resturants all routes here
// create resturant
resturantRouter.post("/create", jwtAuth, resturantController.creteResturant);

// get all resturants
resturantRouter.get("/getAll", resturantController.getAllResturant);

// get one resturant
resturantRouter.get("/getOne/:id", resturantController.getOneResturant);

// delete resturant by id
resturantRouter.get("/delete/:id",jwtAuth, resturantController.deleteResturant);

/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       required:
 *         - title
 *         - location
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the restaurant
 *         title:
 *           type: string
 *           description: The name of the restaurant
 *         imgUrl:
 *           type: string
 *           description: The image URL of the restaurant
 *         foods:
 *           type: array
 *           items:
 *             type: string
 *           description: List of food items available in the restaurant
 *         time:
 *           type: string
 *           description: Operating hours
 *         pickup:
 *           type: boolean
 *           description: If pickup is available
 *         delivery:
 *           type: boolean
 *           description: If delivery is available
 *         isOpen:
 *           type: boolean
 *           description: If the restaurant is currently open
 *         logoUrl:
 *           type: string
 *           description: The logo URL of the restaurant
 *         ratting:
 *           type: number
 *           description: The rating of the restaurant
 *         rattingCount:
 *           type: number
 *           description: The number of ratings the restaurant has received
 *         code:
 *           type: string
 *           description: The restaurant's code
 *         location:
 *           type: string
 *           description: The location of the restaurant
 *       example:
 *         title: "My Restaurant"
 *         imgUrl: "https://example.com/img.jpg"
 *         foods: ["Pizza", "Burger"]
 *         time: "9:00 AM - 11:00 PM"
 *         pickup: true
 *         delivery: true
 *         isOpen: true
 *         logoUrl: "https://example.com/logo.jpg"
 *         ratting: 4.5
 *         rattingCount: 100
 *         code: "REST123"
 *         location: "123 Main Street, City"
 */

/**
 * @swagger
 * /api/v1/resturant/create:
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurants]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: Restaurant created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/resturant/getAll:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: List of all restaurants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: No restaurants available
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/resturant/getOne/{id}:
 *   get:
 *     summary: Get a single restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant ID
 *     responses:
 *       200:
 *         description: A single restaurant
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: Restaurant not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/resturant/delete/{id}:
 *   delete:
 *     summary: Delete a restaurant by ID
 *     tags: [Restaurants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant ID
 *     responses:
 *       200:
 *         description: Restaurant deleted successfully
 *       404:
 *         description: Restaurant not found
 *       500:
 *         description: Server error
 */


export default resturantRouter;
