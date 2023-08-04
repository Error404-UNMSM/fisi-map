import express from "express";
import { getPath } from "../controllers/path_controllers.js";

const path_router = express.Router();

// GET /paths/find?start=...&end=...
path_router.get("/find", getPath);

export default path_router;
