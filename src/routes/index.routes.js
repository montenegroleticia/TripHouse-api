import { Router } from "express";
import destinationsRouter from "./destinations.routes.js";
import lodgesRouter from "./lodges.routes.js";
import ticketsRouter from "./tickets.routes.js";

const router = Router();

router.use(destinationsRouter);
router.use(lodgesRouter);
router.use(ticketsRouter);

export default router;
