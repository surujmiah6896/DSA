/**
 * Removes all star elements from the stack.
 * @title: remove stars from stack
 * @returns {void}
 * leetcode 2390. Removing Stars From a Stack
 * https://leetcode.com/problems/removing-stars-from-a-stack/
 */
function removeStars(){
    const stack = [];
    for(const char of input){
        if(char === '*'){
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}

const input = "leet**cod*e";
console.log(removeStars(input));