import orderModel from "../order/orderModel.js";
import foodModel from "./foodModel.js";

export default class FoodController {
  // CREATE FOOD
  async createFood(req, res) {
    // destructure food data from body
    try {
      const {
        title,
        desc,
        price,
        imgUrl,
        foodTags,
        category,
        code,
        isAvalable,
        resturant,
      } = req.body;

      if (!title || !desc || !price || !resturant) {
        return res.status(500).send({
          success: false,
          message: "please provide all mandatory fields",
        });
      }

      // create foodmodel instance
      const newFood = new foodModel({
        title,
        desc,
        price,
        imgUrl,
        foodTags,
        category,
        code,
        isAvalable,
        resturant,
      });

      await newFood.save();
      res.status(201).send({
        success: true,
        message: "Foos created successfully",
        newFood,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in create food API",
        error,
      });
    }
  }

  // GET ALL FOODS
  async getAllFoods(req, res) {
    try {
      // fetch foods from foodModel
      const foods = await foodModel.find({});
      if (!foods) {
        return res.status(404).send({
          success: false,
          message: "Food Not Found",
        });
      }
      res.status(200).send({
        success: true,
        totalFoods: foods.length,
        foods,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in create food API",
        error,
      });
    }
  }

  // GET ONE FOOD
  async getOneFood(req, res) {
    try {
      // get food id from req.params
      const foodId = req.params.id;
      if (!foodId) {
        return res.status(500).send({
          success: false,
          message: "please provide id",
        });
      }
      // get food object from database or foodModel
      const food = await foodModel.findById(foodId);
      if (!food) {
        return res.status(404).send({
          success: false,
        });
      }

      res.status(200).send({
        success: true,
        food,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in create food API",
        error,
      });
    }
  }

  // GET FOODBY RESTURANTID
  async getFoodByResturantId(req, res) {
    try {
      // get food id from req.params
      const resturantId = req.params.id;
      if (!resturantId) {
        return res.status(500).send({
          success: false,
          message: "please provide id",
        });
      }
      // get food object from database or foodModel
      const food = await foodModel.find({ resturant: resturantId });
      if (!food) {
        return res.status(404).send({
          success: false,
        });
      }

      res.status(200).send({
        success: true,
        message: "Food based on resturantId",
        food,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in create food API",
        error,
      });
    }
  }

  // UPDATE FOOD
  async updateFood(req, res) {
    try {
      // get is from req.params
      const foodId = req.params.id;
      if (!foodId) {
        return res.status(500).send({
          success: false,
          message: "please provide food id",
        });
      }

      // destucture data from req.body
      const {
        title,
        desc,
        price,
        imgUrl,
        foodTags,
        category,
        code,
        isAvalable,
        resturant,
      } = req.body;

      // update food instance
      const updateFood = await foodModel.findByIdAndUpdate(
        foodId,
        {
          title,
          desc,
          price,
          imgUrl,
          foodTags,
          category,
          code,
          isAvalable,
          resturant,
        },
        { new: true }
      );

      res.status(200).send({
        success: true,
        message: "food update successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in create food API",
        error,
      });
    }
  }

  // DELETE FOOD
  async deleteFood(req, res) {
    try {
      const foodId = req.params.id;
      if (!foodId) {
        return res.status(500).send({
          success: false,
          message: "please provide foodId ",
        });
      }

      const food = await foodModel.findById(foodId);
      if (!food) {
        return res.status(404).send({
          success: false,
          message: "Food doesn't exist with this id",
        });
      }

      await food.deleteOne();
      res.status(200).send({
        success: true,
        message: "food deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in create food API",
        error,
      });
    }
  }

  // FOOD PLACEORDER
  async placeOrder(req, res) {
    try {
      const { cart } = req.body;
      
      // Validate cart
      if (!cart || !Array.isArray(cart) || cart.length === 0) {
        return res.status(400).send({
          success: false,
          message: "Please provide a valid food cart.",
        });
      }
  
      let total = 0;
      // Calculate total price
      cart.forEach((item) => {
        total += item.price;
      });
  
      // Create a new order instance
      const newOrder = new orderModel({
        foods: cart,
        payment: total,
        buyer: req.body.id
      });
  
      // Save the order to the database
      await newOrder.save();
  
      // Send a success response
      return res.status(201).send({
        success: true,
        message: "Order Placed Successfully",
        order: newOrder,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error in placeOrder API",
        error,
      });
    }
  }

  // ORDER STATUS
  async orderStatus(req,res){
    try{
     const orderId = req.params.id;
     if(!orderId){
      return res.status(500).send({
        success:false,
        message:"provide valid order id"
      })
     };

     const {status} = req.body;
     const orderStaus = await orderModel.findByIdAndUpdate(orderId,{status},{new:true});
     res.status(200).send({
      success:true,
      message:"Order Status Upadated"
     })
    }catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error in placeOrder API",
        error,
      });
    }
  }
  
}
