import axios from "axios";

const API_URL = "http://localhost:5050/api";

export async function getPath(start, end) {
  try {
    const response = await axios.get(`${API_URL}/paths/find`, {
      params: {
        start,
        end,
      }
    });
    if (response.status !== 200 ) {
      return [[], [], []];
    }
    return response.data.path;
  } catch (error) {
    console.error(error);
  }
}
// const ruta_prueba = await getPath("nodo2", "nodo1");
// console.log(ruta_prueba);

export async function getPointInfo(point_id) {
  try {
    const response = await axios.get(`${API_URL}/places/${point_id}`);
    return response.data.place;
  } catch (error) {
    console.error(error);
  }
}
// const point_info_prueba = await getPointInfo("nodo1");
// console.log(point_info_prueba);

export async function getAllPointsInfo() {
  try {
    const response = await axios.get(`${API_URL}/places/`);
    return response.data.places;
  } catch (error) {
    console.error(error);
  }
}
// const all_points_info_prueba = await getAllPointsInfo();
// console.log(all_points_info_prueba);