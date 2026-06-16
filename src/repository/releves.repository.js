import { readCSV } from "../utils/csv.js";
import { config } from "../config.js";
import { releves_model } from "../models/releves_model.js";

export class ReleveRepository {

    /**
     * 
     * @param {string} cheminCsv 
     * @param {releves_model[]} releves
     */
    constructor(cheminCsv) {
        this.cheminCsv = cheminCsv; // l'état encapsulé (plus tard : un cache)
        this.releves = await readCSV(cheminCsv)
    }

    async findAll() {
        return await readCSV(this.cheminCsv);
    }
    // à compléter : findById(id), save(releve) -> attribue releve.id = max(ids) + 1, deleteById(id)

    findById(id) {
        return this.releves.find(r => r.id === id);
    }

   
    save(data) {
        // si ya déjà un id on update sinon on créer
        if (data.id !== null){
            this.#update(data.id, data)
        }else{
            this.#create(data)
        }
    }


    #update(id, data) {
        const indexItem = this.releves.findIndex(r => r.id === id);

        if (indexItem !== -1) {
            // on créer une copie afin de pouvoir moddifier les informations originaux
            const copy = this.releves[indexItem]

            copy.ville = data.ville
            copy.date = data.date
            copy.tempMin = data.tempMin
            copy.tempMax = data.tempMax
            copy.desc = data.desc
            copy.hum = data.hum

            // on réattribue la copie à l'original
            this.releves[indexItem] = copy

            return copy
        }
    }

  
    #create(data) {
        const ligne = new releves_model((this.releves.length + 1),data.ville, data.date, data.tempMin, data.tempMax, data.desc, data.hum)
        this.releves.push(ligne)
    }

    deleteById(id) {
        let index = this.releves.findIndex(r => r.id === id);

        if (index !== -1) {
            let deleted = this.releves[index]
            releves.splice(index, 1);

            return deleted
        }else{
            return false
        }
    }
}

// on exporte une instance prête à l'emploi (les services l'importent)
export const relevesRepository = new ReleveRepository(config.cheminCsv);