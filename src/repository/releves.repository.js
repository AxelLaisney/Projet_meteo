import { readCSV } from "../utils/csv.js";
import { config } from "../config.js";

export class ReleveRepository {
    constructor(cheminCsv) {
        this.cheminCsv = cheminCsv; // l'état encapsulé (plus tard : un cache)
        this.releve = this.findAll()
    }

    async findAll() {
        return await readCSV(this.cheminCsv);
    }
    // à compléter : findById(id), save(releve) -> attribue releve.id = max(ids) + 1, deleteById(id)

    findById(id) {
        return this.releve.findIndex(r => r.id === id);
    }

    save(releve) {

    }

    deleteById(id) {
        let index = this.releve.findIndex(r => r.id === id);

        if (index !== -1) {
            releves.splice(index, 1);
        }
    }
}

// on exporte une instance prête à l'emploi (les services l'importent)
export const relevesRepository = new ReleveRepository(config.cheminCsv);