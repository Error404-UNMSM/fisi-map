import mongoose from "mongoose";

const path_schema = new mongoose.Schema({
  start: {
    type: String,
    required: [true, "Path start is required"],
  },
  end: {
    type: String,
    required: [true, "Path end is required"],
  },
  // Una ruta por cada piso
  route: {
    type: [[Number]],
    required: [true, "Path route is required"],
  },
});

const Path = mongoose.model("Path", path_schema);

export default Path;
