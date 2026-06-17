import express, { application } from 'express';
import { readCSV } from './utils/csv.js';
import { releves_model } from './models/releves_model.js';
import { relevesRepository } from './repository/relevesRepository.js';
import { ReleveService } from './services/ReleveService.js';

const app = express();
const releves = await readCSV();

app.get('/healthcheck', (req, res) => {
    res.status(200).send({'status': 'OK'});
});

app.get('/releves', async (req, res) => {
    const service = new ReleveService(relevesRepository);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(await service.deleteReleve(1));
})

export default app;