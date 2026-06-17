import config from '../config.js';
import { readFile } from 'node:fs/promises';



export async function readCSV(){
    const content = await readFile(config.files.csvPath, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim());
    return lines.slice(1);
}