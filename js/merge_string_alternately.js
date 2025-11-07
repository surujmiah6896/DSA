/**
 * create merge strings alternately
 * leetcode: 1768
 */

var mergeAlternately = function (word1, word2) {
  let result = "";
  const len1 = word1.length;
  const len2 = word2.length;
  const len = Math.max(len1, len2);
  console.log("len", len);

  for (let i = 0; i < len; i++) {
      console.log("i", i);
    if (i < len1) {
       result += word1[i];
    }
    if (i < len2) {
       result += word2[i];
    }
  }

  return result;
};

word1 = "abc", word2 = "pqr";

const r = mergeAlternately(word1, word2);
console.log('result', r);