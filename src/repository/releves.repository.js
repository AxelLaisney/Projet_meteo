import { parseCsv } from "../utils/csv.js";
import { config } from "../config.js";

export class ReleveRepository {
    constructor(cheminCsv) {
        this.cheminCsv = cheminCsv; // l'état encapsulé (plus tard : un cache)
    }

    async findAll() {
        return parseCsv(this.cheminCsv);
    }
    // à compléter : findById(id), save(releve) -> attribue releve.id = max(ids) + 1, deleteById(id)

    findById(id){

    }

    save(releve){

    }

    deleteById(id){

    }
}

// on exporte une instance prête à l'emploi (les services l'importent)
export const relevesRepository = new ReleveRepository(config.cheminCsv);