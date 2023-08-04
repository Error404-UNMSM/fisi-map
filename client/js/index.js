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
  newRuta("nodo1-1", "nodo1-2"),
  newRuta("nodo1-2", "nodo1-3"),
  newRuta("nodo1-2", "nodo1-22"),
  newRuta("nodo1-3", "nodo1-10"),
  newRuta("nodo1-10", "nodo1-11"),
  newRuta("nodo1-11", "nodo1-12"),
  newRuta("nodo1-11", "nodo1-27"),
  newRuta("nodo1-27", "nodo1-21"),
  newRuta("nodo1-3", "nodo1-4"),
  newRuta("nodo1-4", "nodo1-23"),
  newRuta("nodo1-4", "nodo1-5"),
  newRuta("nodo1-5", "nodo1-14"),
  newRuta("nodo1-14", "nodo1-15"),
  newRuta("nodo1-15", "nodo1-16"),
  newRuta("nodo1-16", "nodo1-17"),
  newRuta("nodo1-17", "nodo1-20"),
  newRuta("nodo1-17", "nodo1-18"),
  newRuta("nodo1-18", "nodo1-19"),
  newRuta("nodo1-5", "nodo1-6"),
  newRuta("nodo1-6", "nodo1-24"),
  newRuta("nodo1-6", "nodo1-7"),
  newRuta("nodo1-7", "nodo1-13"),
  newRuta("nodo1-7", "nodo1-25"),
  newRuta("nodo1-7", "nodo1-8"),
  newRuta("nodo1-8", "nodo1-9"),
  newRuta("nodo1-9", "nodo1-26"),
  //Rutas para el piso 2
  newRuta("nodo2-0", "nodo2-1"),
  newRuta("nodo2-1", "nodo2-0"),
  newRuta("nodo2-1", "nodo2-2"),
  newRuta("nodo2-2", "nodo2-1"),
  newRuta("nodo2-2", "nodo2-3"),
  newRuta("nodo2-3", "nodo2-2"),
  newRuta("nodo2-3", "nodo2-4"),
  newRuta("nodo2-4", "nodo2-3"),
  newRuta("nodo2-4", "nodo2-5"),
  newRuta("nodo2-5", "nodo2-4"),
  newRuta("nodo2-5", "nodo2-6"),
  newRuta("nodo2-6", "nodo2-5"),
  newRuta("nodo2-6", "nodo2-7"),
  newRuta("nodo2-7", "nodo2-6"),
  newRuta("nodo2-7", "nodo2-8"),
  newRuta("nodo2-8", "nodo2-7"),
  newRuta("nodo2-0", "nodo2-14"),
  newRuta("nodo2-14", "nodo2-0"),
  newRuta("nodo2-1", "nodo2-9"),
  newRuta("nodo2-9", "nodo2-1"),
  newRuta("nodo2-9", "nodo2-10"),
  newRuta("nodo2-10", "nodo2-9"),
  newRuta("nodo2-10", "nodo2-11"),
  newRuta("nodo2-11", "nodo2-10"),
  newRuta("nodo2-11", "nodo2-12"),
  newRuta("nodo2-12", "nodo2-11"),
  newRuta("nodo2-12", "nodo2-13"),
  newRuta("nodo2-13", "nodo2-12"),
  newRuta("nodo2-5", "nodo2-15"),
  newRuta("nodo2-15", "nodo2-5"),
  newRuta("nodo2-0", "nodo2-16"), //Escalera
  newRuta("nodo2-16", "nodo2-0"),
  newRuta("nodo2-12", "nodo2-21"), //Escalera
  newRuta("nodo2-21", "nodo2-12"),
  newRuta("nodo2-2", "nodo2-17"), //Escalera
  newRuta("nodo2-17", "nodo2-2"),
  newRuta("nodo2-4", "nodo2-18"), //Escalera
  newRuta("nodo2-18", "nodo2-4"),
  newRuta("nodo2-5", "nodo2-19"), //Escalera
  newRuta("nodo2-19", "nodo2-5"),
  newRuta("nodo2-8", "nodo2-20"), //Escalera
  newRuta("nodo2-20", "nodo2-8"),
  //Rutas para el piso 3
  newRuta("nodo3-0", "nodo3-1"),
  newRuta("nodo3-1", "nodo3-0"),
  newRuta("nodo3-1", "nodo3-2"),
  newRuta("nodo3-2", "nodo3-1"),
  newRuta("nodo3-2", "nodo3-3"),
  newRuta("nodo3-3", "nodo3-2"),
  newRuta("nodo3-3", "nodo3-4"),
  newRuta("nodo3-4", "nodo3-3"),
  newRuta("nodo3-4", "nodo3-5"),
  newRuta("nodo3-5", "nodo3-4"),
  newRuta("nodo3-5", "nodo3-6"),
  newRuta("nodo3-6", "nodo3-5"),
  newRuta("nodo3-6", "nodo3-7"),
  newRuta("nodo3-7", "nodo3-6"),
  newRuta("nodo3-1", "nodo3-8"),
  newRuta("nodo3-8", "nodo3-1"),
  newRuta("nodo3-8", "nodo3-9"),
  newRuta("nodo3-9", "nodo3-8"),
  newRuta("nodo3-9", "nodo3-10"),
  newRuta("nodo3-10", "nodo3-9"),
  newRuta("nodo3-10", "nodo3-11"),
  newRuta("nodo3-11", "nodo3-10"),
  newRuta("nodo3-4", "nodo3-17"),
  newRuta("nodo3-17", "nodo3-4"),
  newRuta("nodo3-0", "nodo3-12"), //Escalera
  newRuta("nodo3-12", "nodo3-0"),
  newRuta("nodo3-10", "nodo3-16"), //Escalera
  newRuta("nodo3-16", "nodo3-10"),
  newRuta("nodo3-2", "nodo3-13"), //Escalera
  newRuta("nodo3-13", "nodo3-2"),
  newRuta("nodo3-4", "nodo3-14"), //Escalera
  newRuta("nodo3-14", "nodo3-4"),
  newRuta("nodo3-7", "nodo3-15"), //Escalera
  newRuta("nodo3-15", "nodo3-7"),
  //rutas para escaleras
  //Escaleras de 1er a 2do piso
  newRuta("nodo1-22", "nodo2-16"), //Escalera
  newRuta("nodo1-23", "nodo2-17"),
  newRuta("nodo1-24", "nodo2-18"),
  newRuta("nodo1-25", "nodo2-19"),
  newRuta("nodo1-26", "nodo2-20"),
  newRuta("nodo1-27", "nodo2-21"),
  //Escaleras de 2do a 3er piso
  newRuta("nodo2-16", "nodo3-12"),
  newRuta("nodo2-17", "nodo3-13"),
  newRuta("nodo2-19", "nodo3-14"),
  newRuta("nodo2-20", "nodo3-15"),
  newRuta("nodo2-21", "nodo3-16"),
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
//camino = g.getCaminoMasCorto("nodo1-14");

let camino, coordsCamino1, coordsCamino2, coordsCamino3;

function trazadoRuta(nodo) {
  coordsCamino1 = [];
  coordsCamino2 = [];
  coordsCamino3 = [];
  camino = g.getCaminoMasCorto(nodo);
  camino.forEach((nodo) => {
    if (nodo.startsWith("nodo1")) {
      coordsCamino1.push(nodos[nodo].toArr());
    } else if (nodo.startsWith("nodo2")) {
      coordsCamino2.push(nodos[nodo].toArr());
    } else {
      coordsCamino3.push(nodos[nodo].toArr());
    }
  });
  console.log(coordsCamino1);
  console.log(coordsCamino2);
  console.log(coordsCamino3);
  dibujaRuta(coordsCamino1, coordsCamino2, coordsCamino3);
}

//Ordenamos los puntos por piso

const point = document.querySelectorAll(".point");

const pointListPiso1 = [];
const pointListPiso2 = [];
const pointListPiso3 = [];

//Funcion para obtener los puntos de cada piso
point.forEach((point) => {
  if (point.parentNode.id == "capa_1") {
    pointListPiso1.push(point.id);
  } else if (point.parentNode.id == "capa_2") {
    pointListPiso2.push(point.id);
  } else if (point.parentNode.id == "capa_3") {
    pointListPiso3.push(point.id);
  }
});

const div_name = document.querySelector("#div_name");
const name_point = document.querySelector("#name_point");
const name_floor = document.querySelector("#name_floor");

//Funcion para hacer un addEventListener a cada punto que se hace click
function addEventPoint(pointList) {
  pointList.forEach((point) => {
    document.getElementById(point).addEventListener("click", (e) => {
      const element = e.target;
      let nodo = element.getAttribute("nodo");
      trazadoRuta(nodo);
    });
    document.getElementById(point).addEventListener("mouseenter", (e) => {
      const element = e.target;
      if (element.getAttribute("name") == null) {
        name_point.style.display = "none";
      } else {
        name_point.innerHTML = element.getAttribute("name");
        name_point.style.display = "block";
      }
    });
  });
}

//llamar la funcion addEventPoint para cada piso
addEventPoint(pointListPiso1);
addEventPoint(pointListPiso2);
addEventPoint(pointListPiso3);

//capas

const pisos = document.querySelector("#pisos");
const capa1 = document.querySelector("#capa_1");
const capa2 = document.querySelector("#capa_2");
const capa3 = document.querySelector("#capa_3");

//div de buttons

const buttons = document.querySelector("#div_buttons");

// seleccionamos piso y desaparecemos los otros pisos

capa1.addEventListener("click", (e) => {
  capa2.style.display = "none";
  capa3.style.display = "none";
  capa1.style.transform = "translateZ(0px)"; //Ponemos al medio el piso seleccionado
  capa1.classList.remove("colored"); //Quitamos el hover del piso seleccionado
  point.forEach((point) => {
    //Añadimos el hover a los puntos importantes del piso
    point.classList.replace("point", "point_colored");
  });
  capa1.style.backgroundColor = "rgba(0, 0, 0, 0)";
  pisos.classList.replace("rotate", "norotate");
  div_name.style.display = "flex";
  buttons.style.display = "flex";
  comprobarPiso();
});

capa2.addEventListener("click", (e) => {
  capa1.style.display = "none";
  capa3.style.display = "none";
  capa2.classList.remove("colored");
  point.forEach((point) => {
    point.classList.replace("point", "point_colored");
  });
  capa2.style.backgroundColor = "rgba(0, 0, 0, 0)";
  pisos.classList.replace("rotate", "norotate");
  div_name.style.display = "flex";
  buttons.style.display = "flex";
  comprobarPiso();
});

capa3.addEventListener("click", (e) => {
  capa1.style.display = "none";
  capa2.style.display = "none";
  capa3.style.transform = "translateZ(0px)";
  capa3.classList.remove("colored");
  point.forEach((point) => {
    point.classList.replace("point", "point_colored");
  });
  capa3.style.backgroundColor = "rgba(0, 0, 0, 0)";
  pisos.classList.replace("rotate", "norotate");
  div_name.style.display = "flex";
  buttons.style.display = "flex";
  comprobarPiso();
});

// seleccionamos el boton de ver piso de arriba y ver piso de abajo

const up = document.querySelector("#button_up");
const down = document.querySelector("#button_down");
//seleccionamos para ver todos los pisos

const all = document.querySelector("#button_all");

// funcion para subir de piso

up.addEventListener("click", (e) => {
  if (capa1.style.display == "block") {
    capa1.style.display = "none";
    capa2.style.display = "block";
    capa2.style.transform = "translateZ(0px)";
    capa2.classList.remove("colored");
    point.forEach((point) => {
      point.classList.replace("point", "point_colored");
    });
    capa2.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pisos.classList.replace("rotate", "norotate");
    buttons.style.display = "flex";
  } else if (capa2.style.display == "block") {
    capa2.style.display = "none";
    capa3.style.display = "block";
    capa3.style.transform = "translateZ(0px)";
    capa3.classList.remove("colored");
    point.forEach((point) => {
      point.classList.replace("point", "point_colored");
    });
    capa3.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pisos.classList.replace("rotate", "norotate");
    buttons.style.display = "flex";
  }
  comprobarPiso();
});

// funcion para bajar de piso

down.addEventListener("click", (e) => {
  if (capa2.style.display == "block") {
    capa2.style.display = "none";
    capa1.style.display = "block";
    capa1.style.transform = "translateZ(0px)";
    capa1.classList.remove("colored");
    point.forEach((point) => {
      point.classList.replace("point", "point_colored");
    });
    capa1.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pisos.classList.replace("rotate", "norotate");
    buttons.style.display = "flex";
  } else if (capa3.style.display == "block") {
    capa3.style.display = "none";
    capa2.style.display = "block";
    capa2.style.transform = "translateZ(0px)";
    capa2.classList.remove("colored");
    point.forEach((point) => {
      point.classList.replace("point", "point_colored");
    });
    capa2.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pisos.classList.replace("rotate", "norotate");
    buttons.style.display = "flex";
  }
  comprobarPiso();
});

// funcion para ver todos los pisos

all.addEventListener("click", (e) => {
  capa1.style.display = "block";
  capa2.style.display = "block";
  capa3.style.display = "block";
  capa1.style.transform = "translateZ(-100px)";
  capa2.style.transform = "translateZ(0px)";
  capa3.style.transform = "translateZ(100px)";
  capa1.classList.add("colored");
  capa2.classList.add("colored");
  capa3.classList.add("colored");
  point.forEach((point) => {
    point.classList.replace("point_colored", "point");
  });
  capa1.style.backgroundColor = "rgba(208, 208, 208, 100)";
  capa1.style.tran;
  capa2.style.backgroundColor = "rgba(208, 208, 208, 100)";
  capa3.style.backgroundColor = "rgba(208, 208, 208, 100)";
  pisos.classList.replace("norotate", "rotate");
  buttons.style.display = "none";
  div_name.style.display = "none";
});

function comprobarPiso() {
  if (capa1.style.display == "block") {
    name_floor.innerHTML = "Piso 1";
    down.disabled = true;
  } else if (capa2.style.display == "block") {
    name_floor.innerHTML = "Piso 2";
    up.disabled = false;
    down.disabled = false;
  } else if (capa3.style.display == "block") {
    name_floor.innerHTML = "Piso 3";
    up.disabled = true;
  }
}
