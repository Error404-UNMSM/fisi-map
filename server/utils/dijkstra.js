function nodosConMinDistancia(distancias, visitados) {
  let minDistancia = Infinity,
    minNodo = null;
  for (let nodo in distancias) {
    let distancia = distancias[nodo];
    if (distancia < minDistancia && !visitados.has(nodo)) {
      minDistancia = distancia;
      minNodo = nodo;
    }
  }
  return minNodo;
}

/**
 * Retorna la relación de predecesores
 * @param {String} origen origen del camino
 * @param {Map} nodos nodos del grafo
 * @param {Map} listaAdyacencia lista de adyacencia del grafo
 * @returns
 */
function dijkstra(origen, nodos, listaAdyacencia) {
  try {
    let distancias = {},
      visitados = new Set(),
      padres = {};

    nodos = Array.from(nodos.keys());

    for (let i = 0; i < nodos.length; i++) {
      if (nodos[i] === origen) {
        distancias[origen] = 0;
      } else {
        distancias[nodos[i]] = Infinity;
      }
      padres[nodos[i]] = null;
    }

    let nodoActual = nodosConMinDistancia(distancias, visitados);

    while (nodoActual !== null) {
      let distancia = distancias[nodoActual],
        vecinos = listaAdyacencia.get(nodoActual);
      vecinos.forEach((peso, vecino) => {
        let newDistancia = distancia + peso;
        if (distancias[vecino] > newDistancia) {
          distancias[vecino] = newDistancia;
          padres[vecino] = nodoActual;
        }
      });
      visitados.add(nodoActual);
      nodoActual = nodosConMinDistancia(distancias, visitados);
    }

    return padres;
  } catch (err) {
    console.log(err);
  }
}

export default dijkstra;
