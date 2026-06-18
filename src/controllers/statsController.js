import { statsService } from "../services/StatsService.js";
import { validateString } from "../utils/validator.js";

export class StatsController {
    constructor(service) {
        this.service = service;
    }


    getStats = async (req, res) => {
        const stats = await this.service.getStats();
        if (stats) {
            res.status(200).json(stats)
        }else{
            return res.status(404).json({ error: `Aucune stat a été trouvé` });
        }
    }

    getStatsParVille = async (req, res) => {
        const ville = req.params.ville;
        const errors = validateString(ville)
        if(typeof errors !== 'undefined'){
            res.status(400).json({ error: errors });
        }else{
            const stats = await this.service.getStatsParVille(ville);
            if (stats) {
                res.json(stats);
            }else{
                return res.status(404).json({error: `Aucune stat trouvée pour ${ville}`});
            }
        }
    };
}

export const statsController = new StatsController(statsService);