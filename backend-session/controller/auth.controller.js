import { loginUser } from "../services/auth.service.js";
import session from "express-session";

export const login = async (req, res) => {
  //Se extrae del cuerpo el username y el password
  const { username, password } = req.body;

  try {
    //Se verifican las crendeciales para la autenticación
    const user = await loginUser(username, password);
    if (user) {
      // Guardar información del usuario en la sesión
      req.session.userId = user.id;
      req.session.username = user.username;

      return res.json({
        message: "Inicio de sesión exitoso",
        user: { id: user.id, username: user.username },
      });
    } else {
      //Si las credenciales son incorrectas se responde con un 401
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }
  } catch (error) {
    //Si ocurre otro error se responde con un status 500
    res
      .status(500)
      .json({ message: `Error al iniciar sesion: ${error.message}` });
  }
};
