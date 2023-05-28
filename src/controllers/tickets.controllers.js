import { tickets } from "../repositories/tickets.repository.js";

export async function getTickets(req, res) {
  try {
    const ticketsList = await tickets();
    res.status(200).send(ticketsList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
