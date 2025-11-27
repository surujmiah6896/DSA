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
//Time Complexity: O(n log n)
//Space Complexity: O(1) or O(n) depending on sort implementation

// const nums = [1, 2, 3, 4],
//   k = 5;


//   console.log(maxOperations(nums, k));


  //Hash Map for optimal.is apply when we can not use sorted

  var maxOperationsWithHash = function (nums, k) {
    const freq = new Map();
    console.log(freq);
    let operations = 0;

    for(const num of nums){
        const complement = k - num;

        if(freq.has(complement) && freq.get(complement) > 0){
            operations++;
            freq.set(complement, freq.get(complement) - 1);
        }else{
            freq.set(num, (freq.get(num) || 0) + 1);
        }
    }

    return operations;
  };


  //step 1: create map for hash
  //step 2: create complement from k
  //step 3: check and count if exist and big of 0
  //step 4: set hash with number
  //step 5: return operations


  const nums = [1, 2, 3, 4],
    k = 5;

  console.log(maxOperationsWithHash(nums, k));
