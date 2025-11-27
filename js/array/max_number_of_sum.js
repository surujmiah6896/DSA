/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    //sorted for two pointers
    nums.sort((a,b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let operations = 0;

    while(left < right){
        //skip numbers that are too large to form pairs
        while(left < right && nums[left] + nums[right] > k){
            right--;
        }

        //not left big from right when sorted 
        if(left >= right) break;

        if(nums[left] + nums[right] === k){
            operations++;
            left++;
            right--;
        }else{
            left++;
        }
    }

    return operations;

};

//step 1: sorted for use two pointer
//step 2: remove large number from k
//step 3: break loop when left big from right
//step 4: check sum and count operation
//Note if match then shift both other wise shift left


const nums = [1, 2, 3, 4],
  k = 5;


  console.log(maxOperations(nums, k));