import express, { application } from 'express';
import { readCSV } from './utils/csv.js';
import { releves_model } from './models/releves_model.js';
import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from 'swagger-jsdoc';
import { relevesRepository } from './repository/relevesRepository.js';
import { ReleveService } from './services/ReleveService.js';

const app = express();
const releves = await readCSV();

const spec = swaggerJSDoc({
    definition: { openapi: "3.0.0", info: { title: "MétéoAPI", version: "1.0.0" } },
    apis: ["./src/router/*.js"], // fichiers où chercher les annotations
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

app.get('/healthcheck', (req, res) => {
    res.status(200).send({ 'status': 'OK' });
});

app.get('/releves', async (req, res) => {
    const service = new ReleveService(relevesRepository);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(await service.getUnReleve(1));
})

export default app;