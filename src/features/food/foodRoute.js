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

export default foodRouter;
