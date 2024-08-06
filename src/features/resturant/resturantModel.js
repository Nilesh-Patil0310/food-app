import mongoose from "mongoose";

// schema
const resturantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Resturant title required"],
    },
    imgUrl: {
      type: String,
    },
    foods: {
      type: Array,
    },
    time: {
      type: String,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logoUrl: {
      type: String,
    },
    ratting: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    rattingCount: {
      type: String,
    },
    code: {
      type: String,
    },
    location: {
      id: { type: String },
      latitude: { type: Number },
      latitudeDelta: { type: Number },
      longitude: { type: Number },
      longitudeDelta: { type: Number },
      address: { type: String },
      title: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Resturant", resturantSchema);
