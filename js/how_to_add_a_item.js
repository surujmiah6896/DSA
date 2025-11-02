/**
 * how to add a item in an array many ways
 * here are some approaches: just question is to add an item in array
 */
//approach 1: using push method
//approach 2: using length property
//approach 3: using splice method
//approach 4: using spread operator
//approach 5: using concat method
//approach 6: using unshift method
//approach 7: using index assignment
//approach 8: using array.from method
//approach 9: using flat method
//approach 10: using apply method
//approach 11: using fill method
//approach 12: using copyWithin method
//approach 13: using map method
//approach 14: using reduce method
//approach 15: using for loop
//approach 16: using while loop
//approach 17: using do while loop
//approach 18: using forEach method
//approach 19: using unshift method to add at the beginning
//approach 20: using splice method to add at specific index
//approach 21: using array destructuring
//approach 22: using Object.assign method
//approach 23: using push with apply method
//approach 24: using new Array and fill method
//approach 25: using fromEntries method
//approach 26: using set method of Set object
//approach 27: using WeakSet (not common for array but possible)
//approach 28: using custom function to add item
//approach 29: using recursion (not common but possible)
//approach 30: using generator function (advanced way)
//approach 31: using array methods chaining (advanced way)
//approach 32: using Proxy object (advanced way)
//approach 33: using Reflect API (advanced way)
//approach 34: using TypedArray (for specific data types)
//approach 35: using Immutable.js library (for immutable data structures)
//approach 36: using Lodash library (utility functions for arrays)
//approach 37: using Ramda library (functional programming utilities)
//approach 38: using custom class with array methods
//approach 39: using ES6 features (like Symbols, Iterators)
//approach 40: using third-party libraries (like RxJS for reactive programming)
//approach 41: using functional programming techniques (like currying)
//approach 42: using async/await with array operations (for asynchronous data)
//approach 43: using Promises with array operations (for asynchronous data)
//approach 44: using event-driven programming to add items (like event listeners)
//approach 45: using Web Workers for background array operations (for performance)
//approach 46: using Service Workers for offline data handling (advanced web apps)
//approach 47: using IndexedDB for persistent array storage (for large data sets)
//approach 48: using LocalStorage for simple persistent array storage
//approach 49: using SessionStorage for session-based array storage
//approach 50: using cookies for small array data storage (not recommended for large data)
//approach 51: using GraphQL for array data fetching and manipulation (for APIs)
//approach 52: using REST APIs for array data fetching and manipulation (for APIs)
//approach 53: using WebSockets for real-time array data updates (for live data)
//approach 54: using Firebase for real-time database operations (for cloud data)
//approach 55: using MongoDB for NoSQL array data storage (for flexible schemas)
//approach 56: using SQL databases for structured array data storage (for relational data)
//approach 57: using ORM libraries for database array operations (like Sequelize, TypeORM)
//approach 58: using Graph databases for complex array relationships (like Neo4j)
//approach 59: using in-memory databases for fast array operations (like Redis)
//approach 60: using data visualization libraries to display array data (like D3.js, Chart.js)

// Example implementation of approach 1: using push method
let array1 = [1, 2, 3];
array1.push(4);
console.log("After push:", array1);

// Example implementation of approach 2: using length property
let array2 = [1, 2, 3];
array2[array2.length] = 4;
console.log("Using length property:", array2);

// Example implementation of approach 3: using splice method
let array3 = [1, 2, 3];
array3.splice(3, 0, 4); // add 4 at index 3
console.log("Using splice method:", array3);

// Example implementation of approach 4: using spread operator
let array4 = [1, 2, 3];
array4 = [...array4, 4];
console.log("Using spread operator:", array4);

// Example implementation of approach 5: using concat method
let array5 = [1, 2, 3];
array5 = array5.concat(4);
console.log("Using concat method:", array5);

// You can implement other approaches similarly as needed.

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

// Output the final array with the missing element added
console.log("Final array with missing element added:", arr);


// Example implementation of approach 6: using unshift method to add at the beginning
let array6 = [2, 3, 4];
array6.unshift(1);
console.log("Using unshift method:", array6);

// Example implementation of approach 7: using index assignment
let array7 = [1, 2, 3];
array7[3] = 4;
console.log("Using index assignment:", array7);

// Example implementation of approach 8: using Array.from method
let array8 = Array.from([1, 2, 3]);
array8.push(4);
console.log("Using Array.from method:", array8);

// Example implementation of approach 9: using flat method
let array9 = [[1, 2], [3]];
array9 = array9.flat();
array9.push(4);
console.log("Using flat method:", array9);

// Example implementation of approach 10: using apply method
let array10 = [1, 2, 3];
Array.prototype.push.apply(array10, [4]);
console.log("Using apply method:", array10);

// You can continue implementing other approaches as needed.
// Example implementation of approach 11: using fill method
let array11 = new Array(4).fill(0);
array11[0] = 1;
array11[1] = 2;
array11[2] = 3;
array11[3] = 4;
console.log("Using fill method:", array11);

// Example implementation of approach 12: using copyWithin method
let array12 = [1, 2, 3, 0];
array12.copyWithin(3, 2, 3); // copy element at index 2 to index 3
console.log("Using copyWithin method:", array12);

// Example implementation of approach 13: using map method
let array13 = [1, 2, 3];
array13 = array13.map((item, index) => (index === 3 ? 4 : item));
array13.push(4);
console.log("Using map method:", array13);

// Example implementation of approach 14: using reduce method
let array14 = [1, 2, 3];
array14 = array14.reduce((acc, curr) => {
  acc.push(curr);
  return acc;
}, []);
array14.push(4);
console.log("Using reduce method:", array14);

// Example implementation of approach 15: using for loop
let array15 = [1, 2, 3];
for (let i = 4; i <= 4; i++) {
  array15.push(i);
}
console.log("Using for loop:", array15);

// Example implementation of approach 16: using while loop
let array16 = [1, 2, 3];
let i = 4;
while (i <= 4) {
  array16.push(i);
  i++;
}
console.log("Using while loop:", array16);

// Example implementation of approach 17: using do while loop
let array17 = [1, 2, 3];
let j = 4;
do {
  array17.push(j);
  j++;
} while (j <= 4);
console.log("Using do while loop:", array17);

// Example implementation of approach 18: using forEach method
let array18 = [1, 2, 3];
[4].forEach((item) => array18.push(item));
console.log("Using forEach method:", array18);

// Example implementation of approach 19: using unshift method to add at the beginning
let array19 = [2, 3, 4];
array19.unshift(1);
console.log("Using unshift method to add at the beginning:", array19);

// Example implementation of approach 20: using splice method to add at specific index
let array20 = [1, 2, 4];
array20.splice(2, 0, 3); // add 3 at index 2
console.log("Using splice method to add at specific index:", array20);

// Example implementation of approach 21: using array destructuring
let array21 = [1, 2, 3];
[array21[3]] = [4];
console.log("Using array destructuring:", array21);

// Example implementation of approach 22: using Object.assign method
let array22 = [1, 2, 3];
Object.assign(array22, { 3: 4 });
console.log("Using Object.assign method:", array22);

// Example implementation of approach 23: using push with apply method
let array23 = [1, 2, 3];
Array.prototype.push.apply(array23, [4]);
console.log("Using push with apply method:", array23);

// Example implementation of approach 24: using new Array and fill method
let array24 = new Array(4).fill(0);
array24[0] = 1;
array24[1] = 2;
array24[2] = 3;
array24[3] = 4;
console.log("Using new Array and fill method:", array24);

// Example implementation of approach 25: using fromEntries method
let array25 = [1, 2, 3];
array25 = Array.from(Object.entries({ 0: 1, 1: 2, 2: 3, 3: 4 }).map(([key, value]) => value));
console.log("Using fromEntries method:", array25);

// Example implementation of approach 26: using set method of Set object
let array26 = [1, 2, 3];
let set26 = new Set(array26);
set26.add(4);
array26 = Array.from(set26);
console.log("Using set method of Set object:", array26);

// Example implementation of approach 27: using WeakSet (not common for array but possible)
let array27 = [1, 2, 3];
let weakSet27 = new WeakSet();  
array27.forEach(item => weakSet27.add(item));
weakSet27.add(4);
array27 = Array.from(weakSet27);
console.log("Using WeakSet (not common for array but possible):", array27);

// Example implementation of approach 28: using custom function to add item
function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}
let array28 = [1, 2, 3];
array28 = addItemToArray(array28, 4);
console.log("Using custom function to add item:", array28);

// Example implementation of approach 29: using recursion (not common but possible)
function addItemRecursively(arr, item, index = 0) {
  if (index === arr.length) {
    arr.push(item);
    return arr;
  }
  return addItemRecursively(arr, item, index + 1);
}
let array29 = [1, 2, 3];
array29 = addItemRecursively(array29, 4);
console.log("Using recursion (not common but possible):", array29);

// Example implementation of approach 30: using generator function (advanced way)
function* addItemGenerator(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
  yield item;
}
let array30 = [1, 2, 3];
array30 = Array.from(addItemGenerator(array30, 4));
console.log("Using generator function (advanced way):", array30);

// You can continue implementing other approaches as needed.    
