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

export default categoryRouter