import resturantModel from "./resturantModel.js";

export default class ResturantController {
  // CREATE RESTURANT
  async creteResturant(req, res) {
    try {
      const {
        title,
        imgUrl,
        foods,
        time,
        pickup,
        delivery,
        isOpen,
        logoUrl,
        ratting,
        rattingCount,
        code,
        location,
      } = req.body;

      //   validation
      if (!title || !location) {
        res.status(500).send({
          success: false,
          message: "please provide title and address",
        });
      }
      // new resturant instance
      const newResturant = new resturantModel({
        title,
        imgUrl,
        foods,
        time,
        pickup,
        delivery,
        isOpen,
        logoUrl,
        ratting,
        rattingCount,
        code,
        location,
      });
      await newResturant.save();
      res.status(201).send({
        success: true,
        message: "resturant created successfully",
        newResturant
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in create resturant API",
        error,
      });
    }
  }

  //   GET SINGLE RESTURANT
  async getOneResturant(req, res) {
    try {
      const resturantId = req.params.id;
      if (!resturantId) {
        return res.status(404).send({
          success: false,
          message: "please provide resturantId",
        });
      }

      //   find resturant by id
      const resturant = await resturantModel.findById(resturantId);
      // validation on resturant
      if (!resturant) {
        return res.status(404).send({
          success: false,
          message: "Resturant Not Found",
        });
      }

      res.status(200).send({
        success: true,
        resturant,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in GetOne Resturant API",
      });
    }
  }

  // GET ALL RESTURANTS
  async getAllResturant(req, res) {
    try {
      // get resturant data
      const resturants = await resturantModel.find({});
      // validate
      if (!resturants) {
        return res.status(404).send({
          success: false,
          message: "No Resturants available",
        });
      }

      res.status(200).send({
        success: true,
        totalCount: resturants.length,
        resturants,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in get resturant API",
        error,
      });
    }
  }

  //   DELETE RESTURANT
  async deleteResturant(req, res) {
    try {
      const resturantId = req.params.id;
      if (!resturantId) {
        return res.status(404).send({
          success: false,
          message: "no resturant found OR please provide resturantId",
        });
      }

      await resturantModel.findByIdAndDelete(resturantId);
      res.status(200).send({
        success:true,
        message:"Resturant delete successfully"
      })
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in get resturant API",
        error,
      });
    }
  }
}
