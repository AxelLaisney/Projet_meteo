/**
 * 
 * @param {number} id 
 * @returns {string|undefined}
 */
export function validateId(id){
    const result = validateNumber(id, 'id');
    if(result){
        return result;
    } 
    if(id < 0){
        return `Id est négatif Id: ${id}`;
    }
}

/**
 * 
 * @param {object} params 
 * @param {number} id 
 * @returns {Array}
 */
export function validateAttribute(params, id = false){
    const errors = []
    if(id){
        errors.push(validateId(id));
    }
    errors.push(validateString(params.ville, 'ville'));
    errors.push(validateDate(params.date));
    errors.push(validateNumber(params.tempMin, 'temperature minimale'));
    errors.push(validateNumber(params.tempMax, 'temperature maximal'));
    errors.push(validateString(params.description, 'description'));
    errors.push(validateNumber(params.humidite, 'humidité'));

    const errorsList = errors.filter(error => typeof error !== 'undefined');
    return errorsList;
}

/**
 * 
 * @param {string} str 
 * @param {string} label 
 * @returns {string|undefined}
 */
export function validateString(str, label){
    if(typeof str === 'undefined'){
        return `${label} non défini`;
    }
    if(str === ''){
        return `${label} est vide`;
    }
}

/**
 * 
 * @param {number} num 
 * @param {string} label 
 * @returns {string|undefined}
 */
function validateNumber(num, label){
    if(typeof num === 'undefined'){
        return 'Nombre non défini';
    }
    if(Number.isNaN(Number(num))){
        return `${label} n'est pas un nombre valide : ${num}`;
    }
}

/**
 * 
 * @param {string} date 
 * @returns {string|undefined}
 */
function validateDate(date){
    // const result =  validateString(date, 'date');
    // if(result){
    //     return result;
    // }else{
    //     if(new Date(date)){
    //         return `La date est invalide: ${date}`;
    //     }
    // }
    if(isNaN(new Date(date))){
            return `La date est invalide: ${date}`;
        }
}





