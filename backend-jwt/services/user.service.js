import connectionDB from "../db/db";

// Obtener al usuario por ID
export const getUserById = async (req, res) => {
  let connection;
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ msg: "El id debe ser un número" });
  try {
    // Lógica de la base de datos
    connection = await connectionDB();
    const [results] = await connection.query(
      "SELECT * FROM users WHERE id = ?",
      id
    );
    if (!results.length === 0) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al obtener el usuario en específico" });
  } finally {
    if (connection) connection.release(); //Se devuelve la conexión al pool
  }
};
