var missingNumber = function (nums) {
  n = nums.length;
  expactSum = (n * (n + 1)) / 2;
  sum = nums.reduce((sum, num) => sum + num, 0);
  return expactSum - sum;
};


nums = [3, 0, 1,2];

console.log(missingNumber(nums));