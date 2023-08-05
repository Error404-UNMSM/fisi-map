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
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eius rem incidunt illum quas placeat dolor sapiente, totam minus possimus nisi dolore enim repellat! Non aperiam culpa omnis ad aliquam?",
  },
  // floor: {
  //   type: Number,
  //   required: [true, "Place floor number is required"],
  // },
  // category: {
  //   type: String,
  //   required: [true, "Place category is required"],
  // },
  imageSrc: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/UNMSM_Facultad_de_Ingenier%C3%ADa_de_Sistemas_e_Inform%C3%A1tica_2019_-_Vista_lateral.jpg",
  },
  imageAlt: {
    type: String,
    default: "FISI",
  },
  predecessors: {
    type: Map,
    of: String,
  },
});

const Place = mongoose.model("Place", place_schema);

export default Place;
