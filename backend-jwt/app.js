// server.js
import express from "express";

import { PORT } from "./config/env.js";
import generarJwt from "./helpers/generar-jwt.js";
import validarJwt from "./middlewares/validar-jwt.js";
import { database } from "./db/database.js";
import { middlewareInitial } from "./middlewares/index.js";
const app = express();

//Middlewares
middlewareInitial(app);
// Endpoint de inicio de sesión (login)
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = database.user.find(
      (user) => user.username === username && user.password === password
    );

    // Validación de usuario
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Generar token JWT
    const token = await generarJwt(user.id);

    // Almacenar el token en la sesión del servidor
    req.session.token = token;

    // Almacenar el token en una cookie segura
    res.cookie("authToken", token, {
      httpOnly: true, // La cookie no es accesible desde JavaScript
      secure: false, // Cambiar a true en producción con HTTPS
      maxAge: 3600000, // Expiración en milisegundos (1 hora)
    });

    return res.json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
});

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
