import { readFileSync, writeFileSync } from 'node:fs';
import config from '../config.js';
import { readFile, writeFile } from 'node:fs/promises';
import { releves_model } from '../models/releves_model.js';

export function readCSV(){
    const content =  readFileSync(config.files.csvPath, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim());
    return lines.slice(1).map((line, index) =>{
        const releve = releves_model.depuisLigneCsv(line, index);
        return releve;
    });
}

export function updateCSV(relevesTable){
    let csv = "ville;date;temperature_min;temperature_max;description;humidite\n";
    relevesTable.forEach( r => {
        csv += `${r.ville};${r.date};${r.tempMin};${r.tempMax};${r.description};${r.humidite}\n`;
    });
    writeFileSync(config.files.csvPath, csv, { encoding: 'utf-8'}, (err) =>{
        if(err){
            console.error(err);
        }
    })
}