import { readCSV } from "../utils/csv.js";


export class releves_model {
    #id;
    #ville;
    #date;
    #tempMin;
    #tempMax;
    #description;
    #humidite;

    constructor(id, ville, date, tempMin, tempMax, desc, hum){
        this.id = id;
        this.ville = ville;
        this.date = date;
        this.tempMin = tempMin;
        this.tempMax = tempMax;
        this.description = desc;
        this.humidite = hum;
    }

    set id(id){
        if(!Number.isNaN(Number(id)) && id > -1){
            this.#id = parseInt(id);
        }else{
            this.#id = null;
        }
    }

    get id(){
        return this.#id;
    }

    set ville(ville = ''){
        this.#ville = ville.toString();
    }

    get ville(){
        return this.#ville;
    }

    set date(date = ''){
        this.#date = date.toString();
    }

    get date(){
        return this.#date;
    }

    set tempMin(tempMin){
        if(!Number.isNaN(Number(tempMin))){
            this.#tempMin = parseFloat(tempMin);
        }else{
            this.#tempMin = null;
        }
    }

    get tempMin(){
        return this.#tempMin;
    }

    set tempMax(tempMax){
        if(!Number.isNaN(Number(tempMax))){
            this.#tempMax = parseFloat(tempMax);
        }else{
            this.#tempMax = null;
        }
    }

    get tempMax(){
        return this.#tempMax;
    }

    set description(description = ''){
        this.#description = description.toString();
    }

    get description(){
        return this.#description;
    }

    set humidite(humidite){
        if(!Number.isNaN(Number(humidite))){
            this.#humidite = parseFloat(humidite);
        }else{
            this.#humidite = null;
        }
    }

    get humidite(){
        return this.#humidite;
    }


    /**
     * 
     * @param {string} line 
     * @param {number} index 
     * @returns {releves_model}
     */
    static depuisLigneCsv(line, index){
        const column = line.split(';');
        const releve = new releves_model(index, column[0], column[1], column[2], column[3], column[4], column[5], column[6]);
        return releve;
    }

    /**
     * 
     * @returns {JSON}
     */
    toJSON(){
        return {
            id : this.id,
            ville: this.ville,
            date: this.date,
            tempMin: this.tempMin,
            tempMax: this.tempMax,
            description: this.description,
            humidite: this.humidite
        };
    }
}