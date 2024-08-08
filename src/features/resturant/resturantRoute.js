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

export default resturantRouter;
