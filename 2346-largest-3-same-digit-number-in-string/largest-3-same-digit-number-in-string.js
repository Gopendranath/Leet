/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    if (num.length < 3) return ""
    let i = 0
    let j = 3
    let maxnum = ""
    while(j < num.length+1){
        let numStr = num.slice(i, j)
        let checkSame = [...new Set(numStr.split(""))]
        if (checkSame.length === 1){
            if(numStr > maxnum){
                maxnum = numStr
            }
        }
        i++
        j++
    }
    return maxnum
};