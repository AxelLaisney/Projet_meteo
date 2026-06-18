import { villeService } from "../services/VilleService.js";

export class VilleController {
    constructor(service) {
        this.service = service; // service injecté
    }


    getVilles = async (req, res) => {
        const ville = await this.service.getVilles();
        if (ville) {
            res.status(200).json(ville);
        }else{
            return res.status(404).json({ error: `Aucune information sur des villes` });
        }
    }
}

export const villeController = new VilleController(villeService);