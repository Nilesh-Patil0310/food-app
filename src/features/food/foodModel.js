import mongoose from "mongoose";

// schema
const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food title required"],
    },
    desc: {
      type: String,
      required: [true, "Food description is required"],
    },
    price: {
      type: Number,
      required: [true, "Food price is required"],
    },
    imgUrl: {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/08/05/83/92/240_F_805839252_yqVfAFSffc8Prp3z2dQORM79TTudo7FG.jpg",
    },
    foodTags: {
      type: String,
    },
    category: {
      type: String,
    },
    code: {
      type: String,
    },
    isAvalable: {
      type: Boolean,
      default: true,
    },
    resturant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resturant",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Foods", foodSchema);
