import { Router } from "express";
import { getTickets, getTicketsQuery } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();

ticketsRouter.get("/tickets", getTickets);
ticketsRouter.get("/tickets/query", getTicketsQuery);

export default ticketsRouter;
