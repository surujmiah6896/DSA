/**
 * leet-code: 283
 * @param {*} nums 
 */
var moveZeroes = function(nums) {
    let nonZeroPos = 0;

    //phase 1: move all non-zero elements
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[nonZeroPos] = nums[i];
            nonZeroPos++;
        }
    }

    //phase 2: fill remaining positions with zeros
    for(let i = nonZeroPos; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
}

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));