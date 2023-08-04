import express from "express";
import { getPlace, getAllPlaces } from "../controllers/place_controllers.js";

const place_router = express.Router();

place_router.get("/", getAllPlaces);
place_router.get("/:point_id", getPlace);

export default place_router;
