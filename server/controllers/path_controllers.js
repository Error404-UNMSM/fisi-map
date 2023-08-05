import Path from "../models/path.js";
import Place from "../models/place.js";
import Graph from "../models/graph.js";
import { getCaminoMasCorto } from "../utils/utils.js";
import dijkstra from "../utils/dijkstra.js";

async function getRoutesFromParents(parents, end) {
  const routes = [[], [], []];
  // Se obtiene la lista de nodos
  const graph = await Graph.findOne();
  const nodes = graph.nodes;
  // Se construye routes
  getCaminoMasCorto(parents, end).forEach((node) => {
    routes[nodes.get(node).get("piso") - 1].push(
      nodes.get(node).get("x"),
      nodes.get(node).get("y")
    );
  });
  return routes;
}

async function getParents(origen) {
  // Se obtiene el grafo
  const graph = await Graph.findOne({}, { _id: 0, edges: 1, nodes: 1 });
  const parents = dijkstra(origen, graph.nodes, graph.edges);
  return new Map(Object.entries(parents));
}

async function savePath(start, end, route) {
  await Path.insertMany([
    { start, end, route },
    { start: end, end: start, route },
  ]);
}

export const getPath = async (req, res) => {
  try {
    // Busca si hay un registro en Path
    const { start, end } = req.query;
    const path = await Path.findOne({ start, end });
    if (path) {
      return res.status(200).json({ success: true, path: path.route });
    }

    // Busca si hay predecesores para el origen
    const place = await Place.findOne({ node_id: start });
    if (place.predecessors) {
      const routes = await getRoutesFromParents(place.predecessors, end);
      // Se guarda el resultado
      await savePath(start, end, routes);
      // Se envia routes
      return res.status(200).json({ success: true, path: routes });
    }

    // Se ejecuta dijkstra con el nuevo origen y se guarda el resultado
    const parents = await getParents(start);
    place.predecessors = parents;
    await place.save();
    // Se obtienen las rutas y se guarda
    const routes = await getRoutesFromParents(parents, end);
    await savePath(start, end, routes);
    // Se envia routes
    res.status(200).json({ success: true, path: routes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
