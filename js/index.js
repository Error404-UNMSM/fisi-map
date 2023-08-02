import { Grafo, Coord } from "./dijkstra.js";
import dibujaRuta from "./draw.js";

const nodoList = document.querySelectorAll(".nodo");

function newRuta(nodo1, nodo2) {
    return [nodo1, nodo2, nodos[nodo1].getDistancia(nodos[nodo2])];
  }

const nodos = {};

nodoList.forEach((nodo) => {
  nodos[nodo.id] = new Coord(nodo.getAttribute("cx"), nodo.getAttribute("cy"));
});


// se definen las rutas (TODOS LOS VECINOS)
const rutas = [
  newRuta("nodo1-0", "nodo1-1"),
  newRuta("nodo1-1", "nodo1-0"),
  newRuta("nodo1-1", "nodo1-2"),
  newRuta("nodo1-2", "nodo1-3"),
  newRuta("nodo1-3", "nodo1-4"),
  newRuta("nodo1-3", "nodo1-11"),
  newRuta("nodo1-11", "nodo1-12"),
  newRuta("nodo1-12", "nodo1-13"),
  newRuta("nodo1-11", "nodo1-14"),
  newRuta("nodo1-4", "nodo1-5"),
  newRuta("nodo1-5", "nodo1-6"),
  newRuta("nodo1-5", "nodo1-15"),
  newRuta("nodo1-15", "nodo1-16"),
  newRuta("nodo1-16", "nodo1-17"),
  newRuta("nodo1-6", "nodo1-7"),
  newRuta("nodo1-7", "nodo1-8"),
  newRuta("nodo1-7", "nodo1-9"),
  newRuta("nodo1-8", "nodo1-9"),
];

// creacion del grafo
const g = new Grafo();

// se agregan los nodos y las rutas al grafo
Object.keys(nodos).forEach((element) => g.addNodo(element));
rutas.forEach((ruta) => g.addRuta(...ruta));

// se define el nodo de origen
g.setOrigen("nodo1-0");

// se ejecuta
// camino mas corto desde el nodo de origen hasta el nodo finish
//const camino = g.getCaminoMasCorto("nodo1-14");

let camino, coordsCamino;

const auditorio = document.querySelector(".auditorio");
const newpabellon = document.querySelector(".newpabellon");

auditorio.addEventListener("click", (e) => {
    const nodo = "nodo1-6";
    trazadoRuta(nodo);
});

newpabellon.addEventListener("click", (e) => {
    const nodo = "nodo1-8";
    trazadoRuta(nodo);
});

function trazadoRuta(nodo){
    camino = g.getCaminoMasCorto(nodo);
    coordsCamino = camino.map((nodo) => nodos[nodo].toArr());
    console.log(coordsCamino);
    dibujaRuta(coordsCamino);
}