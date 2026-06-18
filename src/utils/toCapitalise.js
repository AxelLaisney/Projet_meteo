/**
 * 
 * @param {string} str 
 * @param {boolean} lowerRest 
 * @returns {string}
 */
export const capitalize = (str, lowerRest = false) => {
    const [first, ...rest] = str;
    return (
        first.toUpperCase() +
        (lowerRest ? rest.join("").toLowerCase() : rest.join(""))
    );
}