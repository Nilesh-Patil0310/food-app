import express from "express";
import CategoryController from "./categoryController.js";
import jwtAuth from "../../middlewares/authMiddleware.js";

// create category router instance
const categoryRouter = express.Router();

// categoryController instance
const categoryController = new CategoryController();

// Routes
// 4.1 Create Category
categoryRouter.post('/create_category',jwtAuth,categoryController.createCategory);

// 4.2 Get all categories
categoryRouter.get('/get_all', categoryController.getAllCategory);

// 4.3 Update categories
categoryRouter.put('/update_category/:id',jwtAuth,categoryController.updateCategory)

// 4.4 Delet category
categoryRouter.delete('/delete_category/:id',jwtAuth, categoryController.deleteCategory)

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the category
 *         imgUrl:
 *           type: string
 *           description: The image URL of the category
 */

/**
 * @swagger
 * /api/v1/category/create_category:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: The category was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Error in creating category
 */


/**
 * @swagger
 * /api/v1/category/get_all:
 *   get:
 *     summary: Retrieve a list of all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       404:
 *         description: Categories not found
 *       500:
 *         description: Error in getting categories
 */


/**
 * @swagger
 * /api/v1/category/update_category/{id}:
 *   put:
 *     summary: Update a category by ID
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The category was updated successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error in updating category
 */


/**
 * @swagger
 * /api/v1/category/delete_category/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: The category was deleted successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error in deleting category
 */

export default categoryRouter