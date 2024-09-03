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

export const createUser = async (dataUser) => {
  let connection;
  if (!dataUser || typeof dataUser !== "object") {
    throw new Error("Datos inválidos");
  }
  try {
    const { username, password } = dataUser;
    console.log(dataUser);
    if (!dataUser) {
      throw new Error("Faltan datos requeridos");
    }

    connection = await connectionDB();
    const [result] = await connection.execute(
      "INSERT INTO users (username,  password) VALUES (?, ?)",
      [username, password]
    );
    if (result.affectedRows === 0) {
      throw new Error("No se pudo crear el usuario", err);
    }
    return { msg: "Se creó con éxito" };
  } catch (err) {
    console.error("No se pudo crear el usuario", err.message);
    throw new Error("No se pudo crear el usuario" + err.message);
  } finally {
    if (connection) connection.release();
  }
};
