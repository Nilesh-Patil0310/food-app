import categoryModel from "./categoryModel.js";

export default class CategoryController {
  // CREATE CATEGORY METHOD
  async createCategory(req, res) {
    try {
      // get category data from req.body
      const { title, imgUrl } = req.body;
      // validation
      if (!title) {
        return res.status(500).send({
          success: false,
          message: "please provide category title or image",
        });
      }
      const newCategory = new categoryModel({ title, imgUrl });
      await newCategory.save();
      res.status(201).send({
        success: true,
        message: "category created successfully",
        newCategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in create category API",
      });
    }
  }

  //   GET CATEGORIES
  async getAllCategory(req, res) {
    try {
      const categories = await categoryModel.find({});
      if (!categories) {
        return res.status(404).send({
          success: false,
          message: "Categorie Not Found",
        });
      }
      res.status(200).send({
        success: true,
        totalCount: categories.length,
        categories,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in getallcategory API",
      });
    }
  }

  // UPDATE CATEGORY
  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { title, imgUrl } = req.body;

      const updatedCategory = await categoryModel.findByIdAndUpdate(
        id,
        { title, imgUrl },
        { new: true }
      );

      if (!updatedCategory) {
        return res.status(404).send({
          success: false,
          message: "Category Not Found",
        });
      }

      res.status(200).send({
        success: true,
        message: "Category updated Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in getallcategory API",
      });
    }
  }

  // DELETE CATEGORY
  async deleteCategory(req, res) {
    try {
        const {id} = req.params
        if(!id){
            return res.status(500).send({
                success:false,
                message:"please provide category id"
            })
        };

        const category = await categoryModel.findById(id);
        if(!category){
            return res.status(404).send({
                success:false,
                message:"Category Not Found with this Id"
            })
        };
        await category.deleteOne()
        res.status(200).send({
            success:true,
            message:"Category deleted successfully"
        })
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in delete category API",
        error,
      });
    }
  }
}
