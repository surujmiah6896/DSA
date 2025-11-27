/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
     const freqMap = new Map();
     for(const num of arr){
        freqMap.set(num,(freqMap.get(num) || 0) + 1);
     }

     const freqSet = new Set();
     for (const count of freqMap.values()) {
        if(freqSet.has(count)){
           return false; 
        }
        freqSet.add(count);
     }

     return true;

};


const arr = [1, 2, 2, 1, 1, 3];

console.log(uniqueOccurrences(arr));
