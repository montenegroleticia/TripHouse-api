import { Router } from "express";
import { getLodges } from "../controllers/destinations.controllers.js";

const lodgesRouter = Router();

lodgesRouter.get("/lodges", getLodges);

export default lodgesRouter;
