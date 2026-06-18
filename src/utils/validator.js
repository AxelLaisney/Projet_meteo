export function validateId(id){
    if(this.validateNumber(id, 'id')){
        return this.validateNumber(id, 'id');
    } 
    if(id < 0){
        return `Id est négatif Id: ${id}`;
    }
}

function validateString(str, label){
    if(str === 'undefined'){
        return `${label} non défini`;
    }
    if(str === ''){
        return `${label} est vide`;
    }
}

function validateNumber(num, label){
    if(num === 'undefined'){
        return 'Nombre non défini';
    }
    if(Number.isNaN(Number(num))){
        return `${label} n'est pas un nombre valide : ${num}`;
    }
}

function validateDate(date){
    if(this.validateString(date, 'date')){
        return this.validateString(date, 'date');
    }else{
        const dateEle = date.split('/');
        const newDate = dateEle[1] + '/' + dateEle[0] + '/' + dateEle[2];
        if(!isNaN(new Date(newDate))){
            return `La date est invalide: ${date}`;
        }
    }
    
}

export function validateAttribute(params){
    const errors = []
    errors.push(validateString(params.ville, 'ville'));
    errors.push(validateDate(params.date));
    errors.push(validateNumber(params.tempMin, 'temperature minimale'));
    errors.push(validateNumber(params.tempMax, 'temperature maximal'));
    errors.push(validateString(params.description, 'description'));
    errors.push(validateNumber(params.humidite, 'humidité'));
    if(params.id){
        errors.push(validateId(id));
    }

    return errors
}



