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
        const relevesJson = [];
        releves.forEach(async r => {
            relevesJson.push(await r.toJSON());
        });
        return relevesJson;
    }

    /**
     * 
     * @param {Number} id 
     * @returns {releves_model}
     */
    async getUnReleve(id){
        const releve = await this.repository.findById(id);
        return await releve.toJSON();
    }

    /**
     * 
     * @param {releves_model} releve 
     * @returns {releves_model}
     */
    async updateReleve(releve){
        const releveToUpdate = await this.repository.findById(releve.id);
        if(releveToUpdate){
            releveToUpdate.ville = releve?.ville;
            releveToUpdate.date = releve?.date;
            releveToUpdate.tempMin = releve?.tempMin;
            releveToUpdate.tempMax = releve?.tempMax;
            releveToUpdate.description = releve?.date;
            releveToUpdate.humidite = releve?.humidite;

            releve = await this.repository.save(releveToUpdate);
            return await releve.toJSON();
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
            return await deleteRecord.toJSON();
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
        return await newReleve.toJSON();
    }

}

export const releveService = new ReleveService(relevesRepository);