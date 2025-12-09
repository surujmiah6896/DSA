/**
 * leetcode 1657. Determine if Two Strings Are Close
 * https://leetcode.com/problems/determine-if-two-strings-are-close/
 * @param {*} word1 
 * @param {*} word2 
 * @returns 
 */
function closeStrings(word1, word2) {
    if(word1.length !== word2.length) return false;

    const charCount1 = new Map();
    const charCount2 = new Map();

    for(const char of word1){
        charCount1.set(char,(charCount1.get(char) || 0) + 1);
    }
    
    for (const char of word2) {
      charCount2.set(char, (charCount2.get(char) || 0) + 1);
    }

    const keys1 = Array.from(charCount1.keys()).sort();
    const keys2 = Array.from(charCount2.keys()).sort();
    if (keys1.length !== keys2.length) return false;

    for (let i = 0; i < keys1.length; i++) {
      if (keys1[i] !== keys2[i]) return false;
    }
    
    const freq1 = Array.from(charCount1.values()).sort((a, b) => a - b);
    const freq2 = Array.from(charCount2.values()).sort((a, b) => a - b);

    for (let i = 0; i < freq1.length; i++) {
      if (freq1[i] !== freq2[i]) return false;
    }

    return true;
}

const word1 = "abc",
  word2 = "bbca";

  console.log(closeStrings(word1, word2));