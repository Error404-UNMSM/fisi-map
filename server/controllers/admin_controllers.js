import Path from "../models/path.js";
import Place from "../models/place.js";
import Graph from "../models/graph.js";

export const setNewGraph = async (req, res) => {
  try {
    // Se elimina el grafo anterior
    await Graph.deleteMany({});
    // Se eliminan los registros en Path
    await Path.deleteMany({});
    // Se eliminan los predecesores de Place
    await Place.updateMany(
      {},
      {
        $set: { predecessors: null },
      }
    );
    // Se crea el nuevo grafo
    const { nodos, rutas } = req.body;
    const newGraph = new Graph({
      nodes: nodos,
      edges: rutas,
    });
    // Se guarda el nuevo grafo
    await newGraph.save();
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};

export const setNewPlaces = async (req, res) => {
  try {
    // Se eliminan los registros en Place
    await Place.deleteMany({});
    // Se crean los nuevos lugares
    const { places } = req.body;
    // Se guardan
    await Place.insertMany(places);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};
