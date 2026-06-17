import { Router } from "express";
import { releveController as controller } from "../controllers/releves.controller.js";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from "swagger-ui-express"
const router = Router();

/**
 * @openapi
 * /releves:
 *   get:
 *     summary: Liste tous les relevés météo
 *     tags:
 *       - Relevés
 *     responses:
 *       200:
 *         description: Tableau des relevés
 */
router.get("/", controller.getTousLesReleves);


/**
 * @openapi
 * /releves/{id}:
 *   get:
 *     summary: Récupère un relevé par son identifiant
 *     tags:
 *       - Relevés
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du relevé
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Relevé trouvé
 *       404:
 *         description: Relevé non trouvé
 */
router.get("/:id", controller.getUnReleve);

/**
 * @openapi
 * /releves:
 *   post:
 *     summary: Crée un nouveau relevé
 *     tags:
 *       - Relevés
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 format: date-time
 *               temperature:
 *                 type: number
 *               humidite:
 *                 type: number
 *             required:
 *               - date
 *               - temperature
 *               - humidite
 *     responses:
 *       201:
 *         description: Relevé créé
 *       400:
 *         description: Données invalides
 */
router.post("/", controller.createReleve);

/**
 * @openapi
 * /releves/{id}:
 *   put:
 *     summary: Met à jour un relevé
 *     tags:
 *       - Relevés
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du relevé
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 format: date-time
 *               temperature:
 *                 type: number
 *               humidite:
 *                 type: number
 *     responses:
 *       200:
 *         description: Relevé mis à jour
 *       404:
 *         description: Relevé non trouvé
 */
router.put("/:id", controller.updateReleve);


/**
 * @openapi
 * /releves/{id}:
 *   delete:
 *     summary: Supprime un relevé
 *     tags:
 *       - Relevés
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du relevé
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Relevé supprimé
 *       404:
 *         description: Relevé non trouvé
 */
router.delete("/:id", controller.deleteReleve);


export default router;