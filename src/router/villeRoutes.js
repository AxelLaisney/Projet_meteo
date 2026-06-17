import { Router } from "express";
import { VilleController } from "../controllers/villesController.js";
const router = Router();

router.get("/", controller.getVilles);

export default router;