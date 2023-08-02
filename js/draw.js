const draw = SVG().addTo(".piso_1");

function dibujaRuta(ruta) {
  draw.clear();
  const polyline = draw.polyline(ruta);
  polyline.fill("none");
  polyline.stroke({
    color: "#f06",
    width: 5,
    linecap: "round",
    linejoin: "round",
  });
}

export default dibujaRuta ;