import { destinations } from "../repositories/destinations.repository.js";

export async function getDestinations(req, res) {
  try {
    const destinationsList = await destinations();
    res.status(200).send(destinationsList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
