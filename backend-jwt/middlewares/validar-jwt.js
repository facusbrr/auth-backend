import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";
import connectionDB from "../db/db.js";

// Middleware para verificar el token JWT
export default async (req, res, next) => {
  console.log(req.session);
  console.log("-----------");
  console.log(req.cookies);
  const token = req.cookies.authToken || req.session.token;

  if (!token) {
    return res.status(403).json({ message: "Token no proporcionado" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.id;
    // Se busca al usuario en la base de datos
    const [rows] = await connectionDB.execute(
      "SELECT * FROM users WHERE id = ?",
      [req.userId]
    );
    const user = rows[0];

    if (!user) return res.status(401).json({ msg: "Token inválido" });

    req.user = user; // Agrega la información del usuario decodificada al request
    next();
  } catch (error) {}
  return res.status(401).json({ msg: "Token inválido" });
};
