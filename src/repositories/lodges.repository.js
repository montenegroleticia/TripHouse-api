import { db } from "../database/database.connection.js";

export async function lodges() {
  const result = await db.query(`SELECT * FROM lodges;`);
  return result;
}

export async function lodgesbyid(id) {
  const result = await db.query(`SELECT * FROM lodges WHERE id = $1;`, [id]);
  return result;
}
