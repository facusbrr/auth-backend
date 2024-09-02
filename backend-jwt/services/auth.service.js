import generarJwt from "../helpers/generar-jwt.js";
import { getUserById } from "./user.service.js";

export const loginUser = async (username, password) => {
  try {
    const user = await getUserById(username, password);
    if (!user) return { token: null, msg: "Datos Incorrecto" };

    const token = await generarJwt(user.id);
    return { token, msg: "Se inicio sesión" };
  } catch (err) {
    console.error("Hubo un problema al iniciar sesión", err);
    throw new Error("Hubo un problema al iniciar sesión", message.err);
  }
};
