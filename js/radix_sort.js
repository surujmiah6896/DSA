function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}


function mostDigits(nums){
    let maxDigits = 0;
    for(let num of nums){
        maxDigits = Math.max(maxDigits, digitCount(num))    
    }
    return maxDigits;
}


function radixSort(nums){
    const maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let buckets = Array.from({length: 10}, ()=> []);
        for(let i = 0; i < nums.length; i++){
            const digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i]);
        }

        nums = [].concat(...buckets);
    }

    return nums;
}




const arr = [170, 45, 75, 90, 802, 24, 2141, 66];

const result = getDigit(170, 0);

// mostDigits(arr);
let buckets = Array.from({ length: 10 }, () => []);

console.log(radixSort(arr));
