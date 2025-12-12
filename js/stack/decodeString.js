/**
 * leetcode 394. Decode String
 * https://leetcode.com/problems/decode-string/
 * @param {*} encodedStr 
 */
function decodeString(encodedStr) {
    const stack = [];
    let currentNum = 0;
    let currentStr = '';
    
    for (const char of encodedStr) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push([currentStr, currentNum]);
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            const [prevStr, num] = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += char;
        }
    }
    return currentStr;
}



const input = "3[a]2[bc]";
console.log(decodeString(input));