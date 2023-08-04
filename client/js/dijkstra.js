class Coord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistancia(otro) {
    let x = this.x - otro.x;
    let y = this.y - otro.y;
    return Math.sqrt(x * x + y * y);
  }

  toArr() {
    return [this.x, this.y];
  }
}

class Grafo {
  constructor() {
    this.nodos = [];
    this.listaAdyacencia = {};
    this.origen = null; // nodo inicial
    this.padres = {}; // resultado de dijkstra
  }

  addNodo(nodo) {
    this.nodos.push(nodo);
    this.listaAdyacencia[nodo] = {};
  }

  addRuta(nodo1, nodo2, peso) {
    this.listaAdyacencia[nodo1][nodo2] = peso;
    this.listaAdyacencia[nodo2][nodo1] = peso;
  }

  setOrigen(nodo) {
    this.origen = nodo;
  }

  setPesoRuta(nodo1, nodo2, peso) {
    this.listaAdyacencia[nodo1][nodo2] = peso;
  }

  dijkstra() {
    let distancias = {},
      visitados = new Set();

    for (let i = 0; i < this.nodos.length; i++) {
      if (this.nodos[i] === this.origen) {
        distancias[this.origen] = 0;
      } else {
        distancias[this.nodos[i]] = Infinity;
      }
      this.padres[this.nodos[i]] = null;
    }

    let nodoActual = this.nodosConMinDistancia(distancias, visitados);

    while (nodoActual !== null) {
      let distancia = distancias[nodoActual],
        vecinos = this.listaAdyacencia[nodoActual];
      for (let vecino in vecinos) {
        let newDistancia = distancia + vecinos[vecino];
        if (distancias[vecino] > newDistancia) {
          distancias[vecino] = newDistancia;
          this.padres[vecino] = nodoActual;
        }
      }
      visitados.add(nodoActual);
      nodoActual = this.nodosConMinDistancia(distancias, visitados);
    }
  }

  nodosConMinDistancia(distancias, visitados) {
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

  getCaminoMasCorto(destino) {
    if (Object.keys(this.padres).length === 0) {
      this.dijkstra();
    }

    let camino = [destino];
    let padre = this.padres[destino];
    while (padre) {
      camino.push(padre);
      padre = this.padres[padre];
    }
    return camino.reverse();
  }
}

export { Grafo, Coord };
