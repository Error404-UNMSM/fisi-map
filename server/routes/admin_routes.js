import express from "express";
import { setNewGraph, setNewPlaces } from "../controllers/admin_controllers.js";

const admin_router = express.Router();

admin_router.post("/graph/reset", setNewGraph);
admin_router.post("/places/reset", setNewPlaces);

export default admin_router;
