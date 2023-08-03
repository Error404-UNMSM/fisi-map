import mongoose from "mongoose";

const place_schema = new mongoose.Schema({
  point_id: {
    type: String,
    required: [true, "Place point_id is required"],
  },
  node_id: {
    type: String,
    required: [true, "Place node_id is required"],
  },
  name: {
    type: String,
    required: [true, "Place name is required"],
  },
  description: {
    type: String,
    default: "",
  },
  floor: {
    type: Number,
    required: [true, "Place floor number is required"],
  },
  category: {
    type: String,
    required: [true, "Place category is required"],
  },
  photos: {
    type: [String],
    default: [
      "https://images.freeimages.com/images/large-previews/a87/school-hallway-1559891.jpg",
    ],
  },
  predecessors: {
    type: [String],
    default: [],
  },
});

const Place = mongoose.model("Place", place_schema);

export default Place;