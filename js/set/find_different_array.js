/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const answer1 = [];
  const answer2 = [];
  
  // Find elements in nums1 not in nums2
  for (const num of set1) {
    if (!set2.has(num)) {
      answer1.push(num);
    }
  }

  // Find elements in nums2 not in nums1
  for (const num of set2) {
    if (!set1.has(num)) {
      answer2.push(num);
    }
  }

  return [answer1, answer2];
};


const nums1 = [1, 2, 3],
  nums2 = [2, 4, 6];

  console.log(findDifference(nums1, nums2));
  