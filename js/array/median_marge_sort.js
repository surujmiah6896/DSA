/**
 * leet-code: 4
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const mid = Math.floor(totalLength/2);

    let i = 0, j = 0;
    let current = 0, prev = 0;

    for(let count = 0; count <= mid; count++){
        prev = current;

        if(i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])){
            current = nums1[i++];
        }else{
            current = nums2[j++];
        }
    }

    if(totalLength % 2 === 0){
        return (prev + current) / 2;
    }else{
        return current;
    }
}