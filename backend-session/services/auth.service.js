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

export const signUpNewUser = async (dataUser) => {
  let connection;
  //Validación de username y password, si son incorrectos salta un error
  if (!dataUser.password || !dataUser.username)
    throw new Error("Datos inválidos o faltan datos requeridos");

  try {
    //Se crea una conexión a la base de datos
    connection = await connectionDB();

    const { username, password } = dataUser;

    // Se inserta el usuario en la base de datos si es correcto
    const [result] = await connection.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, password]
    );

    //Se verifica si se insertó correctamente en la base de datos
    if (result.affectedRows === 0) {
      throw new Error("No se inserto correctamente el usuario");
    }

    return { id: result.insertId, username };
  } catch (error) {
    throw new Error(`Ocurrió un error al crear el usuario: ${error.message}`);
  } finally {
    if (connection) connection.release();
  }
};
