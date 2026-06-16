import { Router } from "express";
import { releveController as controller } from "../controllers/releves.controller.js";

const router = Router();

router.get("/", controller.getTousLesReleves);
router.get("/:id", controller.getUnReleve);
router.post("/", controller.createReleve);
router.put("/:id", controller.updateReleve);
router.delete("/:id", controller.deleteReleve);


export default router;