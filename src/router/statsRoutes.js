import { Router } from "express";
import { StatsController } from "../controllers/statsController.js";
const router = Router();

router.get("/", StatsController.getStats);
router.get("/:ville", StatsController.getStatsParVille);

export default router;