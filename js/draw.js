const draw = SVG().addTo(".piso_1");

function dibujaRuta(ruta) {
  draw.clear();
  const polyline = draw.polyline(ruta);
  polyline.fill("none");
  polyline.stroke({
    color: "#621518",
    width: 10,
    linecap: "round",
    linejoin: "round",
  });
}

export default dibujaRuta ;