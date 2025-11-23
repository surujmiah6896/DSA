var singleNumber = function (nums) {
    const set = new Set();
    for(let num of nums){
        if (set.has(num)) {
         set.delete(num);
        } else {
         set.add(num);
        }
    }
   return Array.from(set)[0];
};


const nums = [2,2,1];
console.log(singleNumber(nums));