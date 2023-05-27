import { db } from "../database/database.connection.js";

export async function destinations() {
  const result = await db.query(`SELECT * FROM destinations ORDER BY RANDOM();`);
  return result;
}

