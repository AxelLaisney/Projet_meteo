import { readCSV } from "../utils/csv.js";
import { config } from "../config.js";
import { releves_model } from "../../../ProjetAPIMeteo/src/models/releve.model.js";

export class ReleveRepository {
    constructor(cheminCsv) {
        this.cheminCsv = cheminCsv; // l'état encapsulé (plus tard : un cache)
        this.releve = this.findAll().slice(1).map(ligne, index => { releves_model.depuisLigneCsv(ligne, index) })
    }

    async findAll() {
        return await readCSV(this.cheminCsv);
    }
    // à compléter : findById(id), save(releve) -> attribue releve.id = max(ids) + 1, deleteById(id)

    findById(id) {
        return this.releve.findIndex(r => r.id === id);
    }

    save(releve) {
        // si ya déjà un id on update sinon on créer
    }

    #update(id, data) {
        const getItem = this.findById(id)
        if (getItem) {
            for ({id,ville, date, tempMin, tempMax, desc, hum } in data) {
                getItem.ville = ville
                getItem.date = date
                getItem.tempMin = tempMin
                getItem.tempMax = tempMax
                getItem.desc = desc
                getItem.hum = hum
            }
        }
    }

    // update(id, données)
    // create(données)

    deleteById(id) {
        let index = this.releve.findIndex(r => r.id === id);

        if (index !== -1) {
            releves.splice(index, 1);
        }
    }
}

// on exporte une instance prête à l'emploi (les services l'importent)
export const relevesRepository = new ReleveRepository(config.cheminCsv);