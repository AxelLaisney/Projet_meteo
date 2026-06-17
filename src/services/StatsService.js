import { releves_model } from "../models/releves_model.js";

export class StatsService {
    #repository

    set repository(repository) {
        this.#repository = repository;
    }

    get repository() {
        return this.#repository;
    }

    constructor(repository) {
        this.repository = repository;
    }

    async getStats() {
        const releves = await this.#repository.findAll();

        const tempsMin = releves.map(r => parseFloat(r.tempMin));
        const tempsMax = releves.map(r => parseFloat(r.tempMax));

        const tempMin = Math.min(...tempsMin);
        const tempMax = Math.max(...tempsMax);

        const tempMoyenne = Math.floor((tempsMin.reduce((a, b) => a + b, 0) + tempsMax.reduce((a, b) => a + b, 0)) / (tempsMin.length + tempsMax.length));

        const villePlusChaude = releves.reduce((max, r) => r.tempMax > max.tempMax ? r : max).ville;

        const villePlusFroide = releves.reduce((min, r) => r.tempMin < min.tempMin ? r : min).ville;

        return {
            tempMin,
            tempMax,
            tempMoyenne,
            nbReleves: releves.length,
            villePlusChaude,
            villePlusFroide
        };
    }




}