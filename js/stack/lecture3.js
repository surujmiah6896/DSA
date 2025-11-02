/**
 * @title: Array push and pop
 */
const Stack = require("./lecture2");

const stack = new Stack();
const text = "Hello";

for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i));
}

let reversed = "";
while (!stack.isEmpty()) {
    console.log(stack)
    reversed += stack.pop();
}
// console.log(reversed);
// console.log(stack);


// stack use with array
const text2 = "Hello";
const array = [];

// Push characters onto the array
for (let i = 0; i < text2.length; i++) {
    array.push(text2.charAt(i));
}

// Pop characters from the array
let textReversed = "";
while (array.length > 0) {
    textReversed += array.pop();
}
console.log('with array:', textReversed);

/**
 * @question What is the time complexity of pushing and popping elements from the stack implemented using an array?
 * @answer The time complexity of both pushing and popping elements from a stack implemented using an array is O(1), or constant time. This is because both operations involve adding or removing an element from the end of the array, which does not require shifting other elements.
 * @explanation In a stack, elements are added and removed from the top. When using an array to implement a stack, the push operation adds an element to the end of the array, and the pop operation removes the last element. Since these operations do not depend on the size of the array, they can be performed in constant time.
 * @Therefore, both push and pop operations have a time complexity of O(1).
 * @Note: stack already implemented in js built-in array so we can use array as stack directly.
 */ 