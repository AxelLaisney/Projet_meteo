import { releves_model } from "../models/releves_model";

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
    async updateReleve(releve){
        const releveToUpdate = this.repository.findById(releve.id);
        if(releveToUpdate){
            releveToUpdate.ville = releve.ville;
            releveToUpdate.date = releve.date;
            releveToUpdate.tempMin = releve.tempMin;
            releveToUpdate.tempMax = releve.tempMax;
            releveToUpdate.description = releve.date;
            releveToUpdate.humidite = releve.humidite;

            this.repository.update(releveToUpdate);
            return releveToUpdate;
        }
    }

    /**
     * 
     * @param {Number} id 
     * @returns {releves_model};
     */
    async deleteReleve(id){
        const releve = this.repository.findById(id);
        if(releve){
            this.#repository.delete(releve.id);
            return releve;
        }
    }

}