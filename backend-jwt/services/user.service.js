import connectionDB from "../db/db.js";

// Obtener al usuario por ID
export const getUserById = async (username, password) => {
  let connection;
  try {
    // Lógica de la base de datos
    connection = await connectionDB();
    const [results] = await connection.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    if (results.length === 0) {
      return null;
    }
    return results[0];
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al obtener el usuario en específico" });
  } finally {
    if (connection) connection.release(); //Se devuelve la conexión al pool
  }
};
