import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = resolve(__dirname, 'donnees/meteo.csv');

export default {
    server: {
        port: process.env.PORT || 3001
    },

    files: {
        csvPath: path
    }
}