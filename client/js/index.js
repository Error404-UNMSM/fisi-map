import List from "list.js";
import dibujaRuta from "./draw.js";
import { getPath, getPointInfo } from "./api.js";

// const nodoList = document.querySelectorAll(".nodo");
const ENTRADA_1 = "nodo1-0";
/*
function newRuta(nodo1, nodo2) {
  return [nodo1, nodo2, nodos[nodo1].getDistancia(nodos[nodo2])];
}

const nodos = {};

// ! Imprime los nodos
// const exported_nodes = {};

nodoList.forEach((nodo) => {
  nodos[nodo.id] = new Coord(nodo.getAttribute("cx"), nodo.getAttribute("cy"));
  
  // ! Imprime los nodos
  // let x = nodo.getAttribute("cx");
  // let y = nodo.getAttribute("cy");
  // let piso = nodo.id.startsWith("nodo1")
  //   ? 1
  //   : nodo.id.startsWith("nodo2")
  //   ? 2
  //   : 3;
  // exported_nodes[nodo.id] = { x, y, piso };
});

// ! Imprime los nodos
// console.log(JSON.stringify(exported_nodes));

// se definen las rutas (TODOS LOS VECINOS)
const rutas = [
  newRuta("nodo1-0", "nodo1-1"),
  newRuta("nodo1-1", "nodo1-38"),
  newRuta("nodo1-38", "nodo1-2"),
  newRuta("nodo1-2", "nodo1-3"),
  newRuta("nodo1-3", "nodo1-36"),
  newRuta("nodo1-36", "nodo1-4"),
  newRuta("nodo1-4", "nodo1-5"),
  newRuta("nodo1-5", "nodo1-6"),
  newRuta("nodo1-6", "nodo1-7"),
  newRuta("nodo1-7", "nodo1-8"),
  newRuta("nodo1-8", "nodo1-9"),
  newRuta("nodo1-3", "nodo1-10"),
  newRuta("nodo1-10", "nodo1-11"),
  newRuta("nodo1-11", "nodo1-12"),
  newRuta("nodo1-7", "nodo1-13"),
  newRuta("nodo1-5", "nodo1-14"),
  newRuta("nodo1-14", "nodo1-15"),
  newRuta("nodo1-15", "nodo1-16"),
  newRuta("nodo1-16", "nodo1-17"),
  newRuta("nodo1-17", "nodo1-18"),
  newRuta("nodo1-18", "nodo1-19"),
  newRuta("nodo1-17", "nodo1-20"),
  newRuta("nodo1-1", "nodo1-40"), //Hacia DGA
  newRuta("nodo1-1", "nodo1-41"), //Hacia economía
  newRuta("nodo1-38", "nodo1-39"), //Hacia Cerseu
  newRuta("nodo1-38", "nodo1-42"), //Hacia módulo de atención docente
  newRuta("nodo1-3", "nodo1-37"), //Hacia dirección escuela cc
  newRuta("nodo1-36", "nodo1-35"), //Hacia usgom
  newRuta("nodo1-10", "nodo1-33"), //Hacia aulas 100-1
  newRuta("nodo1-10", "nodo1-34"), //Hacia aulas 100-2
  newRuta("nodo1-5", "nodo1-28"), //Hacia Baño 1-1
  newRuta("nodo1-6", "nodo1-29"), //Hacia Auditorio
  newRuta("nodo1-13", "nodo1-30"), //Hacia aulas np 1-1
  newRuta("nodo1-8", "nodo1-31"), //Hacia aulas np 1-2
  newRuta("nodo1-8", "nodo1-32"), //Hacia Baño 1-2
  newRuta("nodo1-2", "nodo1-22"), //Escaleras
  newRuta("nodo1-11", "nodo1-27"), //Escaleras
  newRuta("nodo1-21", "nodo1-27"), //Escaleras
  newRuta("nodo1-4", "nodo1-23"), //Escaleras
  newRuta("nodo1-6", "nodo1-24"), //Escaleras
  newRuta("nodo1-7", "nodo1-25"), //Escaleras
  newRuta("nodo1-9", "nodo1-26"), //Escaleras
  //Rutas para el piso 2
  newRuta("nodo2-0", "nodo2-1"),
  newRuta("nodo2-1", "nodo2-2"),
  newRuta("nodo2-2", "nodo2-3"),
  newRuta("nodo2-3", "nodo2-4"),
  newRuta("nodo2-4", "nodo2-5"),
  newRuta("nodo2-5", "nodo2-6"),
  newRuta("nodo2-6", "nodo2-7"),
  newRuta("nodo2-7", "nodo2-8"),
  newRuta("nodo2-0", "nodo2-14"),
  newRuta("nodo2-1", "nodo2-9"),
  newRuta("nodo2-9", "nodo2-10"),
  newRuta("nodo2-10", "nodo2-11"),
  newRuta("nodo2-11", "nodo2-12"),
  newRuta("nodo2-12", "nodo2-13"),
  newRuta("nodo2-5", "nodo2-15"),
  newRuta("nodo2-15", "nodo2-26"), //Hacia aulas np 2
  newRuta("nodo2-14", "nodo2-22"), //Hacia decanato
  newRuta("nodo2-2", "nodo2-25"), //Hacia sala de catedráticos
  newRuta("nodo2-3", "nodo2-23"), //Hacia baño 2-1
  newRuta("nodo2-4", "nodo2-24"), //Hacia comedor
  newRuta("nodo2-6", "nodo2-27"), //Hacia laboratorio2-2
  newRuta("nodo2-6", "nodo2-28"), //Hacia baño 2-2
  newRuta("nodo2-7", "nodo2-29"), //Hacia Micro data center
  newRuta("nodo2-9", "nodo2-36"), //Hacia trofeos
  newRuta("nodo2-10", "nodo2-30"), //Hacia aulas 200-2
  newRuta("nodo2-10", "nodo2-31"), //Hacia aulas 200-1
  newRuta("nodo2-11", "nodo2-32"), //Hacia tercio
  newRuta("nodo2-12", "nodo2-33"), //Hacia aulas 200-3
  newRuta("nodo2-13", "nodo2-34"), //Hacia aula Magna
  newRuta("nodo2-13", "nodo2-35"), //Hacia laboratorio 2-1
  newRuta("nodo2-0", "nodo2-16"), //Escalera
  newRuta("nodo2-12", "nodo2-21"), //Escalera
  newRuta("nodo2-2", "nodo2-17"), //Escalera
  newRuta("nodo2-4", "nodo2-18"), //Escalera
  newRuta("nodo2-5", "nodo2-19"), //Escalera
  newRuta("nodo2-8", "nodo2-20"), //Escalera
  //Rutas para el piso 3
  newRuta("nodo3-0", "nodo3-30"),
  newRuta("nodo3-30", "nodo3-1"),
  newRuta("nodo3-1", "nodo3-32"),
  newRuta("nodo3-32", "nodo3-2"),
  newRuta("nodo3-2", "nodo3-3"),
  newRuta("nodo3-3", "nodo3-4"),
  newRuta("nodo3-4", "nodo3-5"),
  newRuta("nodo3-5", "nodo3-6"),
  newRuta("nodo3-6", "nodo3-7"),
  newRuta("nodo3-1", "nodo3-8"),
  newRuta("nodo3-8", "nodo3-9"),
  newRuta("nodo3-9", "nodo3-26"),
  newRuta("nodo3-26", "nodo3-10"),
  newRuta("nodo3-10", "nodo3-11"),
  newRuta("nodo3-4", "nodo3-17"),
  newRuta("nodo3-0", "nodo3-22"), //Hacia UNAYOE
  newRuta("nodo3-30", "nodo3-31"), //Hacia dirección de sistemas
  newRuta("nodo3-1", "nodo3-21"), //Hacia dirección de software
  newRuta("nodo3-32", "nodo3-33"), //Hacia Matrícula
  newRuta("nodo3-8", "nodo3-23"), //Hacia Publicidad
  newRuta("nodo3-8", "nodo3-24"), //Hacia laboratorio 3-1
  newRuta("nodo3-9", "nodo3-25"), //Hacia Soporte
  newRuta("nodo3-26", "nodo3-27"), //Hacia Departamento académico de sistemas
  newRuta("nodo3-11", "nodo3-28"), //Hacia laboratorio 3-2
  newRuta("nodo3-3", "nodo3-20"), //Hacia baño 3-1
  newRuta("nodo3-17", "nodo3-18"), //Hacia aula de música
  newRuta("nodo3-5", "nodo3-29"), //Hacia baño 3-2
  newRuta("nodo3-7", "nodo3-19"), //Hacia laboratorio 3-3
  newRuta("nodo3-0", "nodo3-12"), //Escalera
  newRuta("nodo3-10", "nodo3-16"), //Escalera
  newRuta("nodo3-2", "nodo3-13"), //Escalera
  newRuta("nodo3-4", "nodo3-14"), //Escalera
  newRuta("nodo3-7", "nodo3-15"), //Escalera
  //rutas para escaleras
  //Escaleras de 1er a 2do piso
  newRuta("nodo1-22", "nodo2-16"), 
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

// ! Imprime las rutas
// console.log(JSON.stringify(g.listaAdyacencia));

// se define el nodo de origen
g.setOrigen("nodo1-0");

// se ejecuta

// camino mas corto desde el nodo de origen hasta el nodo finish
//camino = g.getCaminoMasCorto("nodo1-14");

*/
//capas

const pisos = document.querySelector("#pisos");
const pisoList = document.querySelectorAll(".piso");
const piso1 = document.querySelector("#capa_1");
const piso2 = document.querySelector("#capa_2");
const piso3 = document.querySelector("#capa_3");

// let camino, coordsCamino1, coordsCamino2, coordsCamino3;

async function trazadoRuta(origen, destino) {
  const camino = await getPath(origen, destino);
  dibujaRuta(camino);
}

//Ordenamos los puntos por piso

const point = document.querySelectorAll(".point");

// ! Imprime los points
// const exported_points = [];
// point.forEach((point) => exported_points.push({
//   point_id: point.id,
//   node_id: point.getAttribute("nodo"),
//   name: point.getAttribute("name")
// }));
// console.log(JSON.stringify(exported_points));

const list = document.querySelector(".list"); //Lista de puntos de la barra
const select_box = document.querySelector("#select_box");
const select_box_2 = document.querySelector("#select_box_2"); 

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
  insertar(point)
});

const name_point = document.querySelector("#name_point");
const name_floor = document.querySelector("#name_floor");

//Funcion para hacer un addEventListener a cada punto que se hace click
function addEventPoint(pointList) {
  pointList.forEach((point) => {
    document.getElementById(point).addEventListener("click", async (e) => {
      const element = e.target;
      let nodo = element.getAttribute("nodo");
      await mostrarInformacion(element);
      if(window.matchMedia("(max-width: 768px)").matches){
        await trazadoRuta(ENTRADA_1,nodo);
      }else {
        div_content_3.classList.add("show");
      }
      
      if (div_content.classList.contains("show")) {
        div_content.classList.remove("show");
      }
    });
    document.getElementById(point).addEventListener("mouseenter", (e) => {
      const element = e.target;
      name_point.innerHTML = element.getAttribute("name");
    });
  });
}

//llamar la funcion addEventPoint para cada piso
addEventPoint(pointListPiso1);
addEventPoint(pointListPiso2);
addEventPoint(pointListPiso3);



//div de buttons

const buttons = document.querySelector("#div_buttons");

// Pasamos a 3D con el piso seleccionado (Optimizado)

function addEventPiso(pisoList) {
  pisoList.forEach((piso) => {
    piso.addEventListener("click", (e) => {
      //Ocultamos los pisos diferentes al seleccionado
      ocultarPisos(piso);
      //piso.classList.remove("colored"); //Quitamos el hover del piso seleccionado
      piso.style.backgroundColor = "rgba(0, 0, 0, 0)"; //Quitamos el color del piso seleccionado
      pisos.classList.replace("rotate", "norotate");
      name_point.style.display = "flex";
      buttons.style.display = "flex";
      point.forEach((point) => {
        //Añadimos el hover a los puntos importantes del piso
        point.classList.replace("point", "point_colored");
      });
      comprobarPiso();
    });
    piso.addEventListener("mouseenter", (e) => {
      if (piso == piso1) {
        name_floor.innerHTML = "Piso 1";
        name_point.style.display = "block";
      } else if (piso == piso2) {
        name_floor.innerHTML = "Piso 2";
        name_point.style.display = "block";
      } if (piso == piso3) {
        name_floor.innerHTML = "Piso 3";
        name_point.style.display = "block";
      }
    });
  });
}

addEventPiso(pisoList);


// seleccionamos el boton de ver piso de arriba y ver piso de abajo

const up = document.querySelector("#button_up");
const down = document.querySelector("#button_down");
//seleccionamos para ver todos los pisos

const all = document.querySelector("#button_all");

// funcion para subir de piso y ocultar los otros pisos

up.addEventListener("click", (e) => {
  if (piso1.style.display == "block") {
    switchToPiso(piso2, "up");
  } else if (piso2.style.display == "block") {
    switchToPiso(piso3, "up");
  }
  comprobarPiso();
});

// funcion para cambiar de piso
function switchToPiso(pisoSelected, direction) {
  for(let i = 0; i < pisoList.length; i++) {
    if(direction == "up") {
      if(pisoList[i] == pisoSelected) {
        ocultarPisos(pisoList[i]);
      }
    } else if(direction == "back") {
      if(pisoList[i] == pisoSelected) {
        ocultarPisos(pisoList[i]);
      }
    }
  }
}

// funcion para bajar de piso

down.addEventListener("click", (e) => {
  if (piso2.style.display == "block") {
    switchToPiso(piso1, "back");
  } else if (piso3.style.display == "block") {
    switchToPiso(piso2, "back");
  }
  comprobarPiso();
});

// funcion para ver todos los pisos

all.addEventListener("click", (e) => {
  pisoList.forEach((piso) => {
    piso.style.display = "block";
    div_content_3.classList.remove("show");
    piso.classList.add("colored");
    if (piso.id == "capa_1") {
      piso.style.transform = "translateZ(-100px)";
    } else if (piso.id == "capa_2") {
      piso.style.transform = "translateZ(0px)";
    } else {
      piso.style.transform = "translateZ(100px)";
    }
  });
  point.forEach((point) => {
    point.classList.replace("point_colored", "point");
  });
  pisos.classList.replace("norotate", "rotate");
  buttons.style.display = "none";
  name_point.style.display = "none";
  if (div_content.classList.contains("show")) {
    div_content.classList.toggle("show");
  }
});


// funcion para comprobar en que piso estamos
function comprobarPiso() {
  if (piso1.style.display == "block") {
    name_floor.innerHTML = "Piso 1";
    down.disabled = true;
    up.disabled = false;
  } else if (piso2.style.display == "block") {
    name_floor.innerHTML = "Piso 2";
    up.disabled = false;
    down.disabled = false;
  } else if (piso3.style.display == "block") {
    name_floor.innerHTML = "Piso 3";
    up.disabled = true;
    down.disabled = false;
  }
}

// funcion para ocultar los pisos que no estan seleccionados
function ocultarPisos(piso) {
  for (let i = 0; i < pisoList.length; i++) {
    if (pisoList[i] != piso) {
      pisoList[i].style.display = "none";
    }
    piso.style.display = "block";
    piso.style.transform = "translateZ(0px)";
    piso.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pisos.classList.replace("rotate", "norotate");
  }
  buttons.style.display = "flex";
}



//funcion para crear la lista de puntos e insertarla

function insertar(point) {
  const li = document.createElement("li");
  var item = document.createElement("h6");
  var item_piso = document.createElement("p");
  var name = point.getAttribute("name");
  var id = point.getAttribute("id");
  var piso = point.parentNode.getAttribute("id");
  var nodo = point.getAttribute("nodo");
  item.innerHTML = name;
  item.id = id;
  item.classList.add("list-item");
  item.setAttribute("piso", piso);
  item.setAttribute("nodo", nodo);
  if(piso == "capa_1") {
  item_piso.innerHTML = "P1";
  } else if(piso == "capa_2") {
    item_piso.innerHTML = "P2";
  } else {
    item_piso.innerHTML = "P3";
  }
  li.appendChild(item);
  li.appendChild(item_piso);
  list.appendChild(li);

  
  //----------------------------
  var value = point.getAttribute("nodo");
  var item_2 = document.createElement("option");
  var name_2 = point.getAttribute("name");
  var piso_2 = point.parentNode.getAttribute("id");
  if(piso_2 == "capa_1") {
    name_2 = name_2 + " (P1)";
    } else if(piso == "capa_2") {
      name_2 = name_2 + " (P2)";
    } else {
      name_2 = name_2 + " (P3)";
    }
  item_2.value = value;
  item_2.innerHTML = name_2;
  select_box.appendChild(item_2);
  select_box_2.appendChild(item_2.cloneNode(true));
  
}

const div_button = document.querySelector("#div_button");
const div_content = document.querySelector("#div_content");
const div_content_2 = document.querySelector("#div_content_2");
const div_content_3 = document.querySelector("#div_content_3");

const listaPointBarra = document.querySelectorAll(".list-item");

function addEventList(listaPointBarra) {
  listaPointBarra.forEach((p) => {
    const nodo = p.getAttribute("nodo");
    const piso = p.getAttribute("piso");
    p.addEventListener("click", async (e) => {
      if(window.matchMedia("(max-width: 768px)").matches){
        await trazadoRuta(ENTRADA_1,nodo);
      }
      if(piso == "capa_1") {
        ocultarPisos(piso1);
      } else if(piso == "capa_2") {
        ocultarPisos(piso2);
      } else {
        ocultarPisos(piso3);
      }
      //infoBarra.style.visibility = "visible";
      if (div_content.classList.contains("show")) {
        div_content.classList.remove("show");
      }
      if(window.matchMedia("(max-width: 768px)").matches){

      }else {
        div_content_3.classList.add("show");
      }
      mostrarInformacion(p);
    });
  });
}

addEventList(listaPointBarra);

div_button.addEventListener("click", (e) => {
  if (div_content_2.classList.contains("show")) {
    div_content_2.classList.remove("show");
  } else if(div_content_3.classList.contains("show")){
    div_content_3.classList.remove("show");
  }else{
    div_content.classList.toggle("show");
  }
});

var options = {
  valueNames: ["list-item"],
}

var userList = new List('test_list', options);

const content_item = document.querySelector(".content-item");
const content_title = document.querySelector(".content-title");
const content_details = document.querySelector(".content-details");
const content_description = document.querySelector(".content-description");
const content_image = document.querySelector(".content-image");

const comoLlegar = document.querySelector("#comoLlegar");

// Función para desplegar la información del arreglo en el elemento aside con ID "info"
async function mostrarInformacion(element) {
  const info = await getPointInfo(element.id);
  // Mostrar la descripción del objeto en el contenido
  if (info) {
    content_title.innerHTML = info.name;
    content_description.innerHTML = info.description;
    content_image.src = info.imageSrc;
    content_image.alt = info.imageAlt;
  } else {
    content_description.innerHTML = '';
    content_image.src = 'https://dicesamexico.com.mx/wp-content/uploads/2021/06/no-image.jpeg';
    content_image.alt = '';
  }
  comoLlegar.setAttribute("nodo", element.getAttribute("nodo"));
}

const btn_direction = document.querySelector("#button_direction");
const btn_direction_2 = document.querySelector("#button_direction_2");


btn_direction.addEventListener("click", (e) => {
  div_content_2.classList.toggle("show");
  if (div_content.classList.contains("show")) {
    div_content.classList.remove("show");
  }
});

comoLlegar.addEventListener("click", async (e) => {
  const startValue = ENTRADA_1;
  const endValue = comoLlegar.getAttribute("nodo");
  if(window.matchMedia("(max-width: 768px)").matches){
    div_content_3.classList.remove("show");
  }
  await trazadoRuta(startValue,endValue);
});




//funcion para unir dos puntos 
btn_direction_2.addEventListener("click", async (e) => {
  const startValue = select_box.value;
  const endValue = select_box_2.value;
  const piso = endValue[4];
  if(window.matchMedia("(max-width: 768px)").matches){
    div_content_2.classList.toggle("show");
  }
  if(piso == "1") {
     ocultarPisos(piso1);
   } else if(piso == "2") {
     ocultarPisos(piso2);
   } else {
     ocultarPisos(piso3);
   }
  await trazadoRuta(startValue,endValue);
});

