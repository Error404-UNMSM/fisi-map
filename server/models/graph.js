import mongoose from "mongoose";

const graph_schema = new mongoose.Schema({
  nodes: {
    type: Map,
    of: { type: Map, of: Number }, // para x, y, #piso
    required: [true, "Graph nodes are required"],
  },
  edges: {
    type: Map,
    of: { type: Map, of: Number }, // para el peso
    required: [true, "Graph edges are required"],
  },
});

const Graph = mongoose.model("Graph", graph_schema);

export default Graph;
