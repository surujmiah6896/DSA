/**
 * brute force (naive)
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 */
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j <= i+k && j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
}


// const nums = [1, 2, 3, 1], k = 3;

// console.log(containsNearbyDuplicate(nums, k));



var containsNearbyDuplicateWithMap = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }

    map.set(num, i);
  }

  return false;
};