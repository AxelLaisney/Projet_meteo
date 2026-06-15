import config from '../config.js';
import { readFile } from 'node:fs/promises';

export async function readCSV(){
    const content = await readFile(config.files.csvPath, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim());
    const parsedFile = lines.slice(1).map((line, index) => {
        const columns = line.split(';');
        return {
            id: index + 1,
            ville: columns[0]?.trim() ?? '',
            date: columns[1]?.trim() ?? '',
            tempMin: columns[2]?.trim() ?? '',
            tempMax: columns[3]?.trim() ?? '',
            description: columns[4]?.trim() ?? '',
            humidite: columns[5]?.trim() ?? '',
        };
    });

    const json = JSON.stringify({ 'meteoData': parsedFile });
    return json;
}