// server.js
import express from "express";

import { PORT } from "./config/env.js";
import { middlewareInitial } from "./middlewares/index.js";
import { authRoutes } from "./routes/auth.routes.js";
import { sessionRoutes } from "./routes/session.routes.js";
const app = express();

//Middlewares
middlewareInitial(app);
// Endpoint de inicio de sesión (login)
app.use("/login", authRoutes);

// Endpoint para validar la sesión
app.use("/session", sessionRoutes);

// Endpoint de cierre de sesión (logout)
app.use("/logout", sessionRoutes);

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
