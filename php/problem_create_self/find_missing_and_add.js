/**
 * sequence wise have one array
 * find which element is missing
 * add this missing element
 */

const arr = [1, 2, 3, 5];

let len = arr.length + 1;
let checkItem = 0;
for (let i = 0; i < len; i++) {
  checkItem += 1;
  if (checkItem != arr[i]) {
    arr[i] = checkItem;
  }
  console.log(i);
}

console.log(arr);
