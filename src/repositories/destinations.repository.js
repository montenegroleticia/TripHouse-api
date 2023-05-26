import { db } from "../database/database.connection.js";

export async function destinations() {
  const result = await db.query(`SELECT * FROM destinations;`);
  return result;
}

export async function destinationsbyid(id) {
  const result = await db.query(`SELECT * FROM destinations WHERE id = $1;`, [id]);
  return result;
}
