import {
  lodges,
  lodgesbydestination,
  lodgesbyid,
} from "../repositories/lodges.repository.js";

export async function getLodges(req, res) {
  try {
    const lodgesList = await lodges();
    res.status(200).send(lodgesList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getLodgesByDestination(req, res) {
  const { cityid } = req.body;
  try {
    const lodgesList = await lodgesbydestination(cityid);
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
