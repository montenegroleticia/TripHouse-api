import { db } from "../database/database.connection.js";

export async function lodges() {
  const result = await db.query(`SELECT * FROM lodges ORDER BY RANDOM();`);
  return result;
}

export async function lodgesbydestination(cityid) {
  const result = await db.query(`SELECT * FROM lodges WHERE cityid = $1;`, [
    cityid,
  ]);
  return result;
}

export async function lodgesbyid(id) {
  const result = await db.query(`SELECT * FROM lodges WHERE id = $1;`, [id]);
  return result;
}
