import express from "express";
import path from "path";
import { middlewareInitial } from "./src/middleware/index.js";
import { authRoutes } from "./src/routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

// Middlewares
middlewareInitial(app);
app.use(express.static(path.join(__dirname, "public")));

// Ruta para manejar el inicio de sesión, registrarse, session y logout
app.use("/", authRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
