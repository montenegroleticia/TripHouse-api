import { Router } from "express";
import { getDestinations } from "../controllers/destinations.controllers.js";

const destinationsRouter = Router();

destinationsRouter.get("/destinations", getDestinations);

export default destinationsRouter;
