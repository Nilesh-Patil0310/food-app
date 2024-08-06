import userModel from "./userModel.js";
import bcrypt from "bcrypt";

export default class UserController {
  // GET SINGLE USER METHOD
  async getUser(req, res) {
    try {
      // find user
      const user = await userModel.findById({ _id: req.body.id });
      // validate user
      if (!user) {
        res.status(404).send({
          success: false,
          message: "User Not Found",
        });
      }
      // hide password
      user.password = undefined;

      res.status(200).send({
        success: true,
        message: "User get Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in signup API",
      });
    }
  }

  // UPDATE USER METHOD
  async updateUser(req, res) {
    try {
      // find user
      const user = await userModel.findById({ _id: req.body.id });
      // validate user
      if (!user) {
        return res.status.send({
          success: false,
          message: "User Not Found",
        });
      }
      // update
      const { userName, address, phone } = req.body;
      if (userName) user.userName = userName;
      if (address) user.address = address;
      if (phone) user.phone = phone;

      // save user
      await user.save();
      res.status(200).send({
        success: true,
        message: "user update successfully",
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "error in update-user API",
        error,
      });
    }
  }

  // UPDATE PASSWORD METHOD
  async updatePassword(req, res) {
    try {
      // find user
      const user = await userModel.findById({ _id: req.body.id });
      // validate
      if (!user) {
        return res.status(500).send({
          success: false,
          message: "User Not Found",
        });
      }
      // get data from user
      const { oldPassword, newPassword } = req.body;
      if (!oldPassword || !newPassword) {
        return res.status(500).send({
          success: false,
          message: "please Old and New password",
        });
      }

      // compare password
      const isMatch = await bcrypt.compare(oldPassword, user.password);

      if (!isMatch) {
        return res.status(400).send({
          success: false,
          message: "Invalid old password..",
        });
      }

      // hashing password
      var salt = bcrypt.genSaltSync(10);
      const hashpassword = await bcrypt.hash(newPassword, salt);

      user.password = hashpassword;
      await user.save();
      res.status(200).send({
        success: true,
        message: "password updated successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in password update API",
        error,
      });
    }
  }

  // RESET PASSWORD METHOD
  async resetPassword(req, res) {
    try {
      const { email, newPassword, answer } = req.body;
      if (!email || !newPassword || !answer) {
        return res.status(500).send({
          success: false,
          message: "please provide all fields",
        });
      }
      const user = await userModel.findOne({ email, answer });
      if (!user) {
        return res.status(500).send({
          success: false,
          message: "USer Not Found or invalid answer",
        });
      }

      // hashing password
      var salt = bcrypt.genSaltSync(10);
      const hashpassword = await bcrypt.hash(newPassword, salt);
      user.password = hashpassword;
      await user.save();
      res.status(200).send({
        success: true,
        message: "password reset successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in password update API",
        error,
      });
    }
  }

  // DELETE USER METHOD
  async deleteUser(req, res) {
    try {
      const user = await userModel.findById(req.params.id);
      
      // Check if user exists
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User not found.",
        });
      }
  
      // Delete user
      await userModel.findByIdAndDelete(req.params.id);
  
      return res.status(200).send({
        success: true,
        message: "User deleted successfully.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: "Error in delete user API.",
        error: error.message,
      });
    }
  }
  
}
