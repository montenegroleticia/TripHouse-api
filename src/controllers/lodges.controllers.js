import {
  lodges,
  lodgesbyquery,
  lodgesbydestination,
  lodgesbyid,
  postLodge,
} from "../repositories/lodges.repository.js";

export async function getLodges(req, res) {
  try {
    const lodgesList = await lodges();
    res.status(200).send(lodgesList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getLodgesQuery(req, res) {
  const { destinationValue, priceValue } = req.query;
  try {
    const lodgesList = await lodgesbyquery(destinationValue, priceValue);
    res.status(200).send(lodgesList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getLodgesByDestination(req, res) {
  const { id } = req.query;
  try {
    const lodgesList = await lodgesbydestination(id);
    res.status(200).send(lodgesList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getLodgesById(req, res) {
  const { id } = req.params;
  try {
    const lodgesList = await lodgesbyid(id);
    res.status(200).send(lodgesList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function postLodges(req, res) {
  const { cityid, name, address, site, image, price, amenities, room_image, description } =
    req.body;
  try {
    const lodgesList = await postLodge(
      cityid, name, address, site, image, price, amenities, room_image, description
    );
    res.status(200).send(lodgesList.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
