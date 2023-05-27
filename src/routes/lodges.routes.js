import { Router } from "express";
import {
  getLodges,
  getLodgesByDestination,
  getLodgesById,
} from "../controllers/lodges.controllers.js";

const lodgesRouter = Router();

lodgesRouter.get("/lodges", getLodges);
lodgesRouter.get("/lodges/destination", getLodgesByDestination);
lodgesRouter.get("/lodges/:id", getLodgesById);

export default lodgesRouter;
