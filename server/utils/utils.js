export function getDistancia(a, b) {
  let x = a.x - b.x;
  let y = a.y - b.y;
  return Math.sqrt(x * x + y * y);
}

export function getCaminoMasCorto(padres, destino) {
  let camino = [destino];
  let padre = padres.get(destino);
  while (padre) {
    camino.push(padre);
    padre = padres.get(padre);
  }
  return camino.reverse();
}