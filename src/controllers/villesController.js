import { VilleService } from "../services/VilleService";

export class VilleController {
    constructor(service) {
        this.service = service; // service injecté
    }


    getVilles = async (req, res) => {
        const ville = await this.service.getVilles();

        if (!ville) {
            return res.status(404).json({ error: `Aucune information sur des villes` });
        }

        res.json(ville)
    }








}





export const releveController = new ReleveController(VilleService);