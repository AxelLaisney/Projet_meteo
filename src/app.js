import express, { application } from 'express';
import { readCSV } from './utils/csv.js';
import { releves_model } from './models/releves_model.js';
import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from 'swagger-jsdoc';
import { relevesRepository } from './repository/relevesRepository.js';
import { ReleveService } from './services/ReleveService.js';
import { VilleService } from './services/VilleService.js';
import { StatsService } from './services/StatsService.js';

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
    res.status(200).json(await service.getTousLesReleves());
})

app.get('/villes', async (req, res) => {
    const service = new VilleService(relevesRepository);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(await service.getVilles());
})

app.get('/stats', async (req, res) => {
    const service = new StatsService(relevesRepository);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(await service.getStats());
})

app.get('/stats/:ville', async (req, res) => {
    const ville = req.params.ville;

    const service = new StatsService(relevesRepository);
    res.json(await service.getStatsParVille(ville));
});


export default app;