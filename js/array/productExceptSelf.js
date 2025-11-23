/**
 * @title 
 * @condition Cannot use division
 * @condition Must run in O(n) time
 * @condition Must use O(1) extra space (excluding output array)
 * @param {*} nums 
 */

//is divide approch
var productExceptSelfByDivide = function (nums) {
  const result = [];
  let sum = 1;
  //total sum
  for (let i = 0; i < nums.length; i++) {
    sum *= nums[i];
    console.log(sum);
  }
  //get result
   console.log(sum);
  for (let i = 0; i < nums.length; i++) {
    let r = sum / nums[i];
    result.push(r);
  }
  return result;
};


//is brufe with loop
var productExceptSelfByLoop = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
};

//Using Left and Right Arrays (More Intuitive)
var productExceptSelfLeftRight = function (nums) {
  const n = nums.length;
  const left = new Array(n);
  const right = new Array(n);
  const answer = new Array(n);

  //calculate left products
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  //calculate left products
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  //multify left and right
  for(let i = 0; i < n; i++){
    answer[i] = left[i] * right[i];
  }
  return answer;
};


var productExceptSelf = function(nums){
    const n = nums.length;
    const result = new Array(n);

    //prefix products
    result[0] = 1;
    for(let i = 1; i < n; i++){
        result[i] = result[i - 1] * nums[i - 1];
    }

    //suffix product and multiply
    let suffix = 1;
    for(let i = n - 1; i >= 0; i--){
        result[i] = result[i] * suffix;
        suffix *= nums[i];
    }
    return result;
}




const nums = [1, 2, 3, 4];

console.log('divide: ',productExceptSelfByDivide(nums));
console.log('loops: ',productExceptSelfByLoop(nums));
console.log("leftRight: ", productExceptSelfLeftRight(nums));
console.log("prefix suffix: ", productExceptSelf(nums));