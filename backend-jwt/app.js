// server.js
import express from "express";

import { PORT } from "./config/env.js";
import { middlewareInitial } from "./middlewares/index.js";
import { authRoutes } from "./routes/auth.routes.js";
import { sessionRoutes } from "./routes/session.routes.js";
const app = express();

//Middlewares
middlewareInitial(app);
// Endpoint de inicio de sesión y register (login)
app.use("/", authRoutes);
// Endpoint para validar la sesión y cierre de sesión
app.use("/", sessionRoutes);

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
