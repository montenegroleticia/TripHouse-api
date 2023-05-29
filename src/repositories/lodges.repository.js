import { db } from "../database/database.connection.js";

export async function lodges() {
  const result = await db.query(`SELECT * FROM lodges ORDER BY RANDOM();`);
  return result;
}

export async function lodgesbyquery(destinationValue, priceValue) {
  if (priceValue === "menor-maior") {
    const result = await db.query(
      `SELECT * FROM lodges WHERE cityid = $1 ORDER BY PRICE ASC;`,
      [destinationValue]
    );
    return result;
  } else {
    const result = await db.query(
      `SELECT * FROM lodges WHERE cityid = $1 ORDER BY PRICE DESC;`,
      [destinationValue]
    );
    return result;
  }
}

export async function lodgesbydestination(id) {
  const result = await db.query(`SELECT * FROM lodges WHERE cityid = $1;`, [
    id,
  ]);
  return result;
}

export async function lodgesbyid(id) {
  const result = await db.query(`SELECT * FROM lodges WHERE id = $1;`, [id]);
  return result;
}

export async function postLodge(
  cityid,
  name,
  address,
  site,
  image,
  price,
  amenities,
  room_image,
  description
) {
  const result = await db.query(
    `INSERT INTO tickets (cityid, name, address, site, image, price, amenities, room_image, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [
      cityid,
      name,
      address,
      site,
      image,
      price,
      amenities,
      room_image,
      description,
    ]
  );
  return result;
}
