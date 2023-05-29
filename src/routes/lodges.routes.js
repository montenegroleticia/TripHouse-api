import { Router } from "express";
import {
  getLodges,
  getLodgesByDestination,
  getLodgesById,
  getLodgesQuery,
  postLodges,
} from "../controllers/lodges.controllers.js";

const lodgesRouter = Router();

lodgesRouter.get("/lodges", getLodges);
lodgesRouter.get("/lodges/query", getLodgesQuery);
lodgesRouter.get("/destinations/query", getLodgesByDestination);
lodgesRouter.get("/lodge/:id", getLodgesById);
lodgesRouter.post("/lodges", postLodges);

export default lodgesRouter;
