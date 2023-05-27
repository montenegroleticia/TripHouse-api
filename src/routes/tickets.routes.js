import { Router } from "express";
import { getTickets } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();

ticketsRouter.get("/tickets", getTickets);

export default ticketsRouter;
