import express, { application } from 'express';
import { readCSV } from './utils/csv.js';
import { releves_model } from './models/releves_model.js';

const app = express();
const releves = await readCSV();

app.get('/healthcheck', (req, res) => {
    res.status(200).send({'status': 'OK'});
});

app.get('/releves', async (req, res) => {
    res.setHeader('Contet-Type', 'application/json');
    res.status(200).json(await releves);
})

export default app;