import { StatsService } from "../services/StatsService.js";

export class StatsController {
    constructor(service) {
        this.service = service;
    }


    getStats = async (req, res) => {
        const stats = await this.service.getStats();

        if (!stats) {
            return res.status(404).json({ error: `Aucune stat a été trouvé` });
        }

        res.json(stats)
    }

    getStatsParVille = async (req, res) => {
        const stats = await this.service.getStatsParVille(req.params.ville);

        if (!stats) {
            return res.status(404).json({error: `Aucune stat trouvée pour ${req.params.ville}`});
        }

        res.json(stats);
    };


}





export const statsController = new StatsController(StatsService);