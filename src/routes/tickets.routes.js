import { Router } from "express";
import { getTickets, getTicketsQuery, postTickets } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();

ticketsRouter.get("/tickets", getTickets);
ticketsRouter.get("/tickets/query", getTicketsQuery);
ticketsRouter.post("/tickets", postTickets);

export default ticketsRouter;
