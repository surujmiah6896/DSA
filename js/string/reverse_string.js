/**
 * @title- reverseString
 * @params - array of string
 * @return - array of string
 * @description - i use Two Pointer
 */

function reverseString(s){
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}

let s1 = ["j", "u", "r", "u", "s"];
let r = reverseString(s1);
// console.log(s1); 
console.log(r); 


/**
 * @title- reverseString
 * @params - array of string
 * @return - array of string
 * @description - i use recursive approach
 */
function reverseStringWithRecursive(s, left = 0, right= s.length -1){
    if(left >= right)return;

    [s[left], s[right]] = [s[right], s[left]];
    reverseStringWithRecursive(s, left + 1, right - 1);
}