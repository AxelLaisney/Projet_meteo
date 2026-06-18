import { Router } from "express";
import { villeController as controller } from '../controllers/villesController.js';

const router = Router();

/**
 * @openapi
 * /villes:
 *   get:
 *     summary: Liste des villes
 *     tags:
 *       - Villes
 *     responses:
 *       200:
 *         description: Liste unique des villes
 */
router.get("/", controller.getVilles);

export default router;