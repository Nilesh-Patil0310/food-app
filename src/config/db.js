import mongoose from "mongoose";

import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Database ${mongoose.connection.host}`.bgBlue
    );
  } catch (error) {
    console.log("DB error", error);
  }
};

export default connectDB;
