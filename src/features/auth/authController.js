import userModel from "../user/userModel.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export default class AuthController {
  // register action
  async register(req, res) {
    try {
      const { userName, password, email, address, phone, answer } = req.body;
      // validate
      if (!userName || !password || !email || !phone || !address || !answer) {
        return res.status(500).send({
          success: false,
          message: "please provide all fields",
        });
      }

      // check user
      const existing = await userModel.findOne({ email });
      if (existing) {
        return res.status(500).send({
          success: false,
          message: "Email Already Resister",
        });
      }

      // hashing password
      var salt = bcrypt.genSaltSync(10);
      const hashpassword = await bcrypt.hash(password, salt);

      //   create user
      const user = await userModel.create({
        userName,
        password: hashpassword,
        email,
        phone,
        address,
        answer,
      });
      res.status(201).send({
        success: true,
        message: "user successfully register",
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

  // login action
  async login(req, res) {
    try {
      const { email, password } = req.body;
      // validation
      if (!email || !password) {
        return res.status(500).send({
          success: false,
          message: "please provide email and password",
        });
      }

      // check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User Not Found",
        });
      }

      // compare password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send({
          success: false,
          message: "Invalid creadentials..",
        });
      }

      // JWT token.
      const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      user.password = undefined;
      res.status(200).send({
        success: true,
        message: "login successfull",
        token,
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login API",
        error,
      });
    }
  }
}
