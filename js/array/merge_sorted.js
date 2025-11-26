/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index = m + n - 1;
    let i = m - 1;
    let j = n - 1;

    while(i >= 0 && j >= 0){
        if(nums1[i] >= nums2[j]){
            nums1[index--] = nums1[i--];
        }else{
            nums1[index--] = nums2[j--];
        }
    }

    while(j >=0){
        nums1[index--] = nums2[j--];
    }
    return nums1;
};




const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

  console.log(merge(nums1, m, nums2, n));


