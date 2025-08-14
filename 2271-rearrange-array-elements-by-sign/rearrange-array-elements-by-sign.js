/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    if (nums.length <= 2){
        return nums.sort((a,b) => (b - a))
    }
    let allNeg = nums.filter((elm) => elm < 0)
    let negC = 0
    let allPos = nums.filter((elm) => elm > 0)
    let posC = 0
    let com = []
    for(let i = 0; i<= nums.length -1; i++){
        if ((i+1)%2 == 0){
            com.push(allNeg[negC])
            negC++
        } else {
            com.push(allPos[posC])
            posC++
        }
    }
    return com
};