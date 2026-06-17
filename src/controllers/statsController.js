import { StatsService } from "../services/StatsService.js";

export class StatsController {
    constructor(service) {
        this.service = service; // service injecté
    }


    getStats = async (req, res) => {
        const stats = await this.service.getStats();

        if (!stats) {
            return res.status(404).json({ error: `Aucune stat a été trouvé` });
        }

        res.json(stats)
    }


}





export const statsController = new StatsController(StatsService);