import { Router } from "express";
import { VilleController } from "../controllers/villesController.js";
const router = Router();

router.get("/", VilleController.getVilles);

export default router;