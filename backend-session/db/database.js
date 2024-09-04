import { createPool } from "mysql2/promise";
import { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } from "../config/env.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 50,
  queueLimit: 1000,
});

// Obtener una conexión con el pool
export default async function connectionDB() {
  try {
    const connection = await pool.getConnection();
    console.log("Conectado a la base de datos");
    return connection;
  } catch (err) {
    console.error("No se conectó a la base de datos", err.stack);
    throw err;
  }
}
