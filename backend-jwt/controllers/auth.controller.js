import { loginUser } from "../services/auth.service.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { token, message } = await loginUser(username, password);
    // Validación de usuario
    if (!token) return res.status(401).json({ message });

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
};
