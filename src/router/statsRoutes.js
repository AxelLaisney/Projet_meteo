import { Router } from "express";
import { StatsController } from "../controllers/statsController.js";
const router = Router();

router.get("/", StatsController.getVilles);

export default router;