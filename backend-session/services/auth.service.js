import { connectionDB } from "../db/database.js";

export const loginUser = async (username, password) => {
  let connection;

  try {
    connection = await connectionDB();

    //Se busca al usuario por su username y su password
    const [results] = await connection.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    //Si el array es vacío no existe el usuario
    if (results.length === 0) {
      throw new Error("El usuario no existe");
    }

    //Devuelve el primer usuario encontrado
    return results[0];
  } catch (error) {
    throw new Error(`Ocurrió un error al buscar al usuario: ${error}`);
  } finally {
    // Se libera la conexión
    if (connection) connection.release();
  }
};
