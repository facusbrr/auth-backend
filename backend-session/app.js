import express from "express";
import path from "path";
import { middlewareInitial } from "./middleware/index.js";
import { authRoutes } from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

// Middlewares
middlewareInitial(app);
app.use(express.static(path.join(__dirname, "public")));

// Ruta para manejar el inicio de sesión
app.use("/", authRoutes);

// Ruta para obtener los datos de la sesión
app.get("/session", (req, res) => {
  if (req.session.userId) {
    return res.json({
      loggedIn: true,
      user: { id: req.session.userId, username: req.session.username },
    });
  } else {
    return res
      .status(401)
      .json({ loggedIn: false, message: "No hay sesión activa" });
  }
});

// Ruta para cerrar la sesión
app.post("/logout", (req, res) => {
  console.log(req.session);
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error al cerrar la sesión" });
    }
    res.clearCookie("connect.sid"); // Nombre de cookie por defecto para express-session
    return res.json({ message: "Sesión cerrada exitosamente" });
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
