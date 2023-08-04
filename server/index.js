import express from "express";
import cors from "cors";
import config from "./config/config.js";
import db_connect from "./config/db.js";
import path_router from "./routes/path_routes.js";
import admin_router from "./routes/admin_routes.js";
import place_router from "./routes/place_routes.js";

const { MONGODB_URL, PORT } = config;
const app = express();
const init = async () => {
  await db_connect(MONGODB_URL);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
// build client
app.use("/", express.static("public")); 
// server api
app.use("/api/paths/", path_router);
app.use("/api/admin/", admin_router);
app.use("/api/places/", place_router);

// Inicio de la app
init();
