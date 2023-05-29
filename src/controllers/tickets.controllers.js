import { postTticket, tickets, ticketsbyquery } from "../repositories/tickets.repository.js";

export async function getTickets(req, res) {
  try {
    const ticketsList = await tickets();
    res.status(200).send(ticketsList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getTicketsQuery(req, res) {
  const { destinationValue, priceValue } = req.query;
  try {
    const ticketsList = await ticketsbyquery(destinationValue, priceValue);
    res.status(200).send(ticketsList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function postTickets(req, res) {
  const { destination, origin, airline, departure, landing, price, image } =
    req.body;
  try {
    const ticketsList = await postTticket(
      destination,
      origin,
      airline,
      departure,
      landing,
      price,
      image
    );
    res.status(200).send(ticketsList.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
