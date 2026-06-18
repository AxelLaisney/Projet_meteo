import { Router } from "express";
import { statsController as controller } from '../controllers/statsController.js';
const router = Router();

/**
 * @openapi
 * /stats:
 *   get:
 *     summary: Liste des stats globales des température
 *     tags:
 *       - Stats
 *     responses:
 *       200:
 *         description: Stats des relevés
 */
router.get("/", controller.getStats);

/**
 * @openapi
 * /stats/{ville}:
 *   get:
 *     summary: Liste des status sur une seule ville
 *     tags:
 *       - Stats
 *     parameters:
 *       - name: ville
 *         in: path
 *         required: true
 *         description: Nom de la ville
 *         schema: 
 *            type: string
 *     responses:
 *       200:
 *         description: stats trouvée pour cette ville
 *       404:
 *         description: auncune stats trouvé pour cette ville
 */
router.get("/:ville", controller.getStatsParVille);

export default router;