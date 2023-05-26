import { Router } from "express";
import { getTickets } from "../controllers/destinations.controllers.js";

const ticketsRouter = Router();

ticketsRouter.get("/tickets", getTickets);

export default ticketsRouter;
