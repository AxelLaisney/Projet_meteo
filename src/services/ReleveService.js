import { releves_model } from "../models/releves_model.js";
import { relevesRepository } from "../repository/relevesRepository.js";

export class ReleveService {
    #repository;

    set repository(repository){
        this.#repository = repository;
    }

    get repository(){
        return this.#repository;
    }

    constructor(repository){
        this.repository = repository;
    }

    /**
     * 
     * @returns {releves_model}
     */
    async getTousLesReleves(){
        const releves = await this.repository.findAll();
        return releves;
    }

    /**
     * 
     * @param {Number} id 
     * @returns {releves_model}
     */
    async getUnReleve(id){
        const releve = await this.repository.findById(id);
        return releve;
    }

    /**
     * 
     * @param {releves_model} releve 
     * @returns {releves_model}
     */
    async updateReleve(id, ville, date, tempMin, tempMax, description, humidite){
        const releveToUpdate = await this.repository.findById(id);
        if(releveToUpdate){
            releveToUpdate.ville = ville;
            releveToUpdate.date = date;
            releveToUpdate.tempMin = tempMin;
            releveToUpdate.tempMax = tempMax;
            releveToUpdate.description = description;
            releveToUpdate.humidite = humidite;

            const releve = await this.repository.save(releveToUpdate);
            return releve;
        }
    }

    /**
     * 
     * @param {Number} id 
     * @returns {releves_model};
     */
    async deleteReleve(id){
        const releve = await this.repository.findById(id);
        if(releve){
            const deleteRecord = await this.repository.deleteById(releve.id);
            return deleteRecord;
        }
    }

    /**
     * 
     * @param {string} ville 
     * @param {string} date 
     * @param {number} tempMin 
     * @param {number} tempMax 
     * @param {string} description 
     * @param {number} humidite 
     * @returns {releves_model}
     */
    async createReleve(ville, date, tempMin, tempMax, description, humidite){
        const releve = new releves_model(null, ville, date, tempMin, tempMax, description, humidite);
        const newReleve = await this.repository.save(releve);
        return newReleve;
    }

}

export const releveService = new ReleveService(relevesRepository);