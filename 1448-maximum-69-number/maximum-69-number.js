/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let strarr = JSON.stringify(num).split("")
    for (let i = 0; i< strarr.length; i++){
        if (strarr[i] == 6){
            strarr[i] = '9'
            break;
        }
    }

    return parseInt(strarr.join(""))
};