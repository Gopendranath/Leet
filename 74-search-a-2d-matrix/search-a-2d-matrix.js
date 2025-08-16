/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    function binsearch(arr, target) {
        let left = 0
        let right = arr.length - 1
        while (left <= right){
            let mid = left + Math.floor((right - left) / 2)
            if (arr[mid] === target){
                return true
            } else if(arr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
        return false
    }

    let mLeft = 0
    let mRight = matrix.length - 1
    let mArr = matrix[0].length - 1
    while(mLeft <= mRight){
        let mid = mLeft + Math.floor((mRight - mLeft)/2)
        if(target >= matrix[mid][0] && target <= matrix[mid][mArr]){
            return binsearch(matrix[mid], target)
        } else if(target < matrix[mid][0]){
            mRight = mid - 1
        } else {
            mLeft = mid + 1;
        }
    }
    return false
};