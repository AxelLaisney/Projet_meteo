import { readCSV, updateCSV } from "../utils/csv.js";
import { releves_model } from "../models/releves_model.js";

export class ReleveRepository {

    #releves;


    set releves(releves){
        this.#releves = releves;
    }

    get releves(){
        return this.#releves;
    }

    constructor() {
        this.releves = readCSV();
    }

    async findAll() {
        return this.releves;
    }
    // à compléter : findById(id), save(releve) -> attribue releve.id = max(ids) + 1, deleteById(id)

    async findById(id) {
        const releve = this.releves.find(r => parseInt(r.id) === parseInt(id));
        return releve;
    }

   
    async save(data) {
        if (data.id !== null && !Number.isNaN(Number(data.id))){
            const releve = await this.#update(data);
            return releve;
        }else{
            const releve = await this.#create(data);
            return releve;
        }
    }


    async #update(releve) {
        const index = this.releves.findIndex(r => parseInt(r.id) === parseInt(releve.id));
        this.releves[index] = releve;
        updateCSV(this.releves);
        return releve;
    }

  
    async #create(releve) {
        releve.id = this.releves.length + 1;
        this.releves.push(releve);
        updateCSV(this.releves);
        return releve;
    }

    async deleteById(id) {
        const releve = this.releves.find(r => parseInt(r.id) === parseInt(id));
        const index = this.releves.findIndex(r => parseInt(r.id) === parseInt(id));
        this.releves.splice(index, 1);
        updateCSV(this.releves);
        return releve;
    }
}

// on exporte une instance prête à l'emploi (les services l'importent)
export const relevesRepository = new ReleveRepository();