import { releveService } from "../services/ReleveService.js";


export class ReleveController {
    constructor(service) {
        this.service = service; // service injecté
    }

    // fonction fléchée en propriété : garde le bon `this` quand on la passe au router
    listerReleves = async (req, res) => {
        const releves = await this.service.getTousLesReleves();
        res.json(releves);
    };

    getUnReleve = async (req, res) => {
        const releve = await this.service.getUnReleve(req.params.id);
        if (!releve) {
            return res.status(404).json({ error: `Le relevé ${req.params.id} est introuvable` });
        }

        res.json(releve);
    };

    getTousLesReleves = async (req, res) => {
        const releves = await this.service.getTousLesReleves();
        if (!releves) {
            return res.status(404).json({ error: `Aucun relevé est introuvable` });
        };

        res.json(releves);
    };

    updateReleve = async (req, res) => {
        const releve = await this.service.updateReleve(req.params);
        if (!releve) {
            return res.status(404).json({ error: `Echec de la moddification pour ${req.params}` })
        }

        res.json(releve);
    };

    deleteReleve = async (req, res) => {
        const releve = await this.service.deleteReleve(req.params.id)
        if (!releve) {
            return res.status(404).json({ error: `La supression pour ${req.params.id} a échoué` })
        }
        res.json(releve);
    }


    createReleve = async (req, res) => {
        const releve = await this.service.createReleve(req.params.ville, req.params.date, req.params.tempMin, req.params.tempMax, req.params.description, req.params.humidite)
        if (!releve) {
            return res.status(404).json({ error: `La création pour ${req.params.body} a échoué` })
        }
        res.json(releve);
    }
}

export const releveController = new ReleveController(releveService);