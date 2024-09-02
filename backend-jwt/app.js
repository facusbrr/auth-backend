// server.js
import express from "express";

import { PORT } from "./config/env.js";
import validarJwt from "./middlewares/validar-jwt.js";
import { middlewareInitial } from "./middlewares/index.js";
import { authRoutes } from "./routes/auth.routes.js";
const app = express();

//Middlewares
middlewareInitial(app);
// Endpoint de inicio de sesión (login)
app.use("/auth", authRoutes);

// Endpoint para validar la sesión
app.get("/session", validarJwt, (req, res) => {
  console.log(req.user);
  return res.json({
    message: "Acceso permitido a área protegida",
    user: req.user,
  });
});

// Endpoint de cierre de sesión (logout)
app.post("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error al cerrar sesión" });
      }

      res.clearCookie("authToken");
      return res.json({ message: "Cierre de sesión exitoso" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
});
// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
