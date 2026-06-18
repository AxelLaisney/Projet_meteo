import { relevesRepository } from "../repository/relevesRepository.js";
export class VilleService {
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

    /**
     * 
     * @returns {JSON}
     */
    async getVilles() {
        const releves = await this.repository.findAll();

        const villes = releves.map(r => r.ville);

        const villesUniques = [...new Set(villes)];

        return { villes: villesUniques };
    }
}

export const villeService = new VilleService(relevesRepository);