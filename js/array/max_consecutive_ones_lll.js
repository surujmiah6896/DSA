/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let zeroCount = 0;

    while(right < nums.length){
        if(nums[right] === 0){
            zeroCount++;
        }

        while(zeroCount > k){
            if(nums[left] === 0){
                zeroCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right-left + 1);
        right++;
    }
    return maxLength;
};

//step 1: init left, right, maxLength and zeroCount;
//step 2: check item is 0 and count 0
//step 3: remove item if 0 max k from left and left increment
//step 4: set max number
//step 5: return max


// const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;

// console.log(longestOnes(nums, k));



/**
 * leet-code 1493
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let zeroCount = 0;

    while(right < nums.length){
        if(nums[right] === 0){
            zeroCount++;
        }

        while(zeroCount > 1){
            if(nums[left] === 0){
                zeroCount--;
            }
            left++;
        }


        maxLength = Math.max(maxLength, right - left);
        right++;
    }

    return maxLength;
};


const nums = [1, 1, 0, 1];


console.log(longestSubarray(nums));
