/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n<=0) return false
    let arr = [...n.toString(3)]
    let oneCount = 0
    for (let num of arr){
        if (num === '1') oneCount++;
        if (num === '2') return false;
    }

    return oneCount === 1
};