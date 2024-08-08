import mongoose from "mongoose";

// schema
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "category title is required"],
    },
    imgUrl: {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
