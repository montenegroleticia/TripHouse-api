import { Router } from "express";
import {
  getLodges,
  getLodgesByDestination,
  getLodgesById,
  getLodgesQuery,
} from "../controllers/lodges.controllers.js";

const lodgesRouter = Router();

lodgesRouter.get("/lodges", getLodges);
lodgesRouter.get("/lodges/query", getLodgesQuery);
lodgesRouter.get("/lodges/destination", getLodgesByDestination);
lodgesRouter.get("/lodges/:id", getLodgesById);

export default lodgesRouter;
