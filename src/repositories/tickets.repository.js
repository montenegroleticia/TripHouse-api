import { db } from "../database/database.connection.js";

export async function tickets() {
  const result = await db.query(`SELECT * FROM tickets ORDER BY RANDOM();`);
  return result;
}

export async function ticketsbyid(id) {
  const result = await db.query(`SELECT * FROM tickets WHERE id = $1;`, [id]);
  return result;
}
