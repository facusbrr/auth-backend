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
  let connection
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.userId;
    if (!req.userId) {
      return res.status(401).json({ msg: "Token Inválido" });
    }

    connection = await connectionDB();
    // Se busca al usuario en la base de datosVo
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [req.userId]
    );
    connection.release();

    const user = rows[0];

    if (!user) {
      return res.status(401).json({ msg: "Token inválido" });
    }

    req.user = user; // Agrega la información del usuario decodificada al request
    next();
  } catch (err) {
    console.error("Error al verificar el token: ", err);
    return res.status(401).json({ msg: "Token inválido" });
  } finally {
    if (connection) connection.release();
  }
};
