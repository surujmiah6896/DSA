/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    console.log(vowels);
    let maxCount = 0;
    let currentCount = 0;

    //count vowels in first window
    for(let i = 0; i < k; i++){
        if(vowels.has(s[i])){
            currentCount++;
        }
    }
    console.log("currentCount", currentCount);
    
    maxCount = currentCount;

    //slide the window
    for(let i = k; i<s.length; i++){
        //remove left character
        if(vowels.has(s[i - k])){
            currentCount--;
        }
        //add right character
        if(vowels.has(s[i])){
            currentCount++;
        }

        maxCount = Math.max(maxCount, currentCount);

        //early exit if we found maximum possible
        if(maxCount === k) return k;
    }

    return maxCount;

};


const s = "abciiidef",
  k = 3;

  console.log(maxVowels(s, k));