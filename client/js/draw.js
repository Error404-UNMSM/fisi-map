import { SVG } from "@svgdotjs/svg.js";

const draw1 = SVG().addTo(".piso_1");
const draw2 = SVG().addTo(".piso_2");
const draw3 = SVG().addTo(".piso_3");

function dibujaRuta(matriz_ruta) {
  draw1.clear();
  draw2.clear();
  draw3.clear();

  const polyline1 = draw1.polyline(matriz_ruta[0]);
  const polyline2 = draw2.polyline(matriz_ruta[1]);
  const polyline3 = draw3.polyline(matriz_ruta[2]);

  const line_style = {
    color: "#621518",
    width: 10,
    linecap: "round",
    linejoin: "round",
  };

  polyline1.fill("none");
  polyline1.stroke(line_style);
  polyline2.fill("none");
  polyline2.stroke(line_style);
  polyline3.fill("none");
  polyline3.stroke(line_style);
}

export default dibujaRuta;
