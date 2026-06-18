import { releveService } from "../services/ReleveService.js";
import { validateAttribute, validateId } from "../utils/validator.js";


export class ReleveController {
    constructor(service) {
        this.service = service; // service injecté
    }

    getUnReleve = async (req, res) => {
        const id = req.params.id;
        const errors = validateId(id);
        if( errors ){
            return res.status(404).json({ error: errors });
        }else{
            const releve = await this.service.getUnReleve(id);
            console.log(releve);
            if(releve){
                return res.status(200).json(releve);
            }else{
                return res.status(404).json({ error : 'Aucun relevé est introuvable' });
            }
        }
    };

    getTousLesReleves = async (req, res) => {
        const releves = await this.service.getTousLesReleves();
        if (releves) {
            res.json(releves);
        }else{
            return res.status(404).json({ error: 'Aucun relevé est introuvable' });
        }
    };

    updateReleve = async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const errors = validateAttribute(body, id);
        
        if(errors > 0){
            return res.status(400).json({ errors: errors });
        }else{
            const releve = await this.service.updateReleve(id, body.ville, body.date, body.tempMin, body.tempMax, body.description, body.humidite);
            if(releve){
                return res.status(200).json({ message: "Le relevé à bien été mis a jour", content: releve});
            }else{
                return res.status(404).json({ error: `Echec de la moddification pour ${body}` })
            }
        }
    };

    deleteReleve = async (req, res) => {
        const id = req.params.id;
        const errors = validateId(id);
        if( errors ){
            return res.status(400).json({ errors: errors});
        }else{
            const releve = await this.service.deleteReleve(id);
            if(releve){
                res.status(200).json({ message: "La suppression a été effectuée", content: releve});
            }else{
                return res.status(404).json({ error: `Échec de la  suppression du releve avec l'id: ${id}`});
            }
        }
    }


    createReleve = async (req, res) => {
        const body = req.body;
        const errors =  validateAttribute(body);
        if(errors > 0){
            return res.status(400).json({ errors: errors});
        }else{
            const releve = await this.service.createReleve(body.ville, body.date, body.tempMin, body.tempMax, body.description, body.humidite);
            if(releve){
                return res.status(201).json({ message: 'relevé créé!', content: releve});
            }else{
                return res.status(400).json({ message: 'Erreur lors de la création', content: body});
            }
        }
        
    }

    httpRedirect = async (req, res) => {
        return res.redirect('http://localhost:3001/api-docs');
    }
}

export const releveController = new ReleveController(releveService);