/**
 * add - Adds a value to the end of an array.
 *
 * @param {Array} array The array to which the value will be added.
 * @param {*} value The value to add to the array.
 * @return {Array} The array with the added value.
 */
function add(array, value) {
  array[array.length] = value;
  return array;
}

// Example usage:
const myArray = [1, 2, 3];
const newValue = 4;
const updatedArray = add(myArray, newValue);
console.log(updatedArray); // Output: [1, 2, 3, 4]

// approach 2
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

// Output: [1, 2, 3, 4]

// approach 3   
const array = [1, 2, 3, 5];
const missingNumber = 4;
array.splice(3, 0, missingNumber); // Insert 4 at index 3
console.log(array); // Output: [1, 2, 3, 4, 5]

// approach 4
const array2 = [1, 2, 3, 5];
const expectedLength = array2.length + 1;
const totalSum = (expectedLength * (expectedLength + 1)) / 2;
const actualSum = array2.reduce((acc, num) => acc + num, 0);
const missingNum = totalSum - actualSum;
array2.push(missingNum);
array2.sort((a, b) => a - b);
console.log(array2); // Output: [1, 2, 3, 4, 5]

// Output: [1, 2, 3, 4]

// approach 5
const array3 = [1, 2, 3, 5];
for (let i = 1; i <= array3.length + 1; i++) {
  if (!array3.includes(i)) {
    array3.push(i);
    break;
  }
}
array3.sort((a, b) => a - b);
console.log(array3); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 6
const array4 = [1, 2, 3, 5];
const fullArray = Array.from({ length: array4.length + 1 }, (_, i) => i + 1);
const missingElement = fullArray.find(num => !array4.includes(num));
array4.push(missingElement);
array4.sort((a, b) => a - b);
console.log(array4); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 7
const array5 = [1, 2, 3, 5];
const missingElem = (() => {
  for (let i = 1; i <= array5.length + 1; i++) {
    if (!array5.includes(i)) {
      return i;
    }
  }
})();
array5.push(missingElem);
array5.sort((a, b) => a - b);
console.log(array5); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]
// approach 8
const array6 = [1, 2, 3, 5];
const missingNum2 = (function() {
  const n = array6.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = array6.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
})();
array6.push(missingNum2);
array6.sort((a, b) => a - b);
console.log(array6); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 9
const array7 = [1, 2, 3, 5];
const missingNumber2 = (() => {
  const n = array7.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = array7.reduce((acc, val) => acc + val, 0);
  return total - sum;
})();
array7.push(missingNumber2);
array7.sort((a, b) => a - b);
console.log(array7); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 10
const array8 = [1, 2, 3, 5];
const n = array8.length + 1;
const expectedTotal = (n * (n + 1)) / 2;
const actualTotal = array8.reduce((acc, curr) => acc + curr, 0);
const missingNum3 = expectedTotal - actualTotal;
array8.push(missingNum3);
array8.sort((a, b) => a - b);
console.log(array8); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 11
const array9 = [1, 2, 3, 5];
const missingNum4 = (function() {
  const length = array9.length + 1;
  const expectedSum = (length * (length + 1)) / 2;
  const actualSum = array9.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
})();
array9.push(missingNum4);
array9.sort((a, b) => a - b);
console.log(array9); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 12
const array10 = [1, 2, 3, 5];
const missingNum5 = (() => {
  const len = array10.length + 1;
  const expectedSum = (len * (len + 1)) / 2;
  const actualSum = array10.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
})();
array10.push(missingNum5);
array10.sort((a, b) => a - b);
console.log(array10); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 13
const array11 = [1, 2, 3, 5];
const missingNum6 = (function() {
  const n = array11.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = array11.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
})();
array11.push(missingNum6);
array11.sort((a, b) => a - b);
console.log(array11); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 14
const array12 = [1, 2, 3, 5];
const missingNum7 = (() => {
  const length = array12.length + 1;
  const expectedSum = (length * (length + 1)) / 2;
  const actualSum = array12.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
})();
array12.push(missingNum7);
array12.sort((a, b) => a - b);
console.log(array12); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 15
const array13 = [1, 2, 3, 5];
const missingNum8 = (function() {
  const n = array13.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = array13.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
})();
array13.push(missingNum8);
array13.sort((a, b) => a - b);
console.log(array13); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 16
const array14 = [1, 2, 3, 5];
const missingNum9 = (() => {
  const len = array14.length + 1;
  const expectedSum = (len * (len + 1)) / 2;
  const actualSum = array14.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
})();
array14.push(missingNum9);
array14.sort((a, b) => a - b);
console.log(array14); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 17
const array15 = [1, 2, 3, 5];
for (let i = 1; i <= array15.length + 1; i++) {
  if (!array15.includes(i)) {
    array15.push(i);
    break;
  }
}
array15.sort((a, b) => a - b);
console.log(array15); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 18
const array16 = [1, 2, 3, 5];
const fullArray2 = Array.from({ length: array16.length + 1 }, (_, i) => i + 1);
const missingElement2 = fullArray2.find(num => !array16.includes(num));
array16.push(missingElement2);
array16.sort((a, b) => a - b);
console.log(array16); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4] 

// approach 19
const array17 = [1, 2, 3, 5];
const missingElem2 = (() => {
  for (let i = 1; i <= array17.length + 1; i++) {
    if (!array17.includes(i)) {
      return i;
    }
  }
})();
array17.push(missingElem2);
array17.sort((a, b) => a - b);
console.log(array17); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 20
const array18 = [1, 2, 3, 5];
const missingNum10 = (function() {
  const n = array18.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = array18.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
})();
array18.push(missingNum10);
array18.sort((a, b) => a - b);
console.log(array18); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]


// approach 21
const array19 = [1, 2, 3, 5];
const missingNumber3 = (() => {
  const n = array19.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = array19.reduce((acc, val) => acc + val, 0);
  return total - sum;
})();
array19.push(missingNumber3);
array19.sort((a, b) => a - b);
console.log(array19); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 22
const array20 = [1, 2, 3, 5];
const n2 = array20.length + 1;
const expectedTotal2 = (n2 * (n2 + 1)) / 2;
const actualTotal2 = array20.reduce((acc, curr) => acc + curr, 0);
const missingNum11 = expectedTotal2 - actualTotal2;
array20.push(missingNum11);
array20.sort((a, b) => a - b);
console.log(array20); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// approach 23
const array21 = [1, 2, 3, 5];   
const missingNum12 = (function() {
  const length = array21.length + 1;
  const expectedSum = (length * (length + 1)) / 2;
  const actualSum = array21.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
})();
array21.push(missingNum12);
array21.sort((a, b) => a - b);
console.log(array21); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

// how to many way add a element in existing array
// approach 1
const arr1 = [1, 2, 3, 5];
arr1.splice(3, 0, 4); // Insert 4 at index 3
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// approach 2
const arr2 = [1, 2, 3, 5];
arr2.push(4);
arr2.sort((a, b) => a - b);
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// approach 3
const arr3 = [1, 2, 3, 5];
const indexToAdd = arr3.indexOf(5);
arr3.splice(indexToAdd, 0, 4);
console.log(arr3); // Output: [1, 2, 3, 4, 5]

// approach 4
const arr4 = [1, 2, 3, 5];
const newArr = [];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] === 5) {
    newArr.push(4);
  }
  newArr.push(arr4[i]);
}
console.log(newArr); // Output: [1, 2, 3, 4, 5]

// approach 5
const arr5 = [1, 2, 3, 5];
const missingValue = 4;
const position = arr5.findIndex(num => num > missingValue);
arr5.splice(position, 0, missingValue);
console.log(arr5); // Output: [1, 2, 3, 4, 5]

// approach 6
const arr6 = [1, 2, 3, 5];
const resultArr = arr6.reduce((acc, num) => {
  if (num === 5) {
    acc.push(4);
  }
  acc.push(num);
  return acc;
}, []);
console.log(resultArr); // Output: [1, 2, 3, 4, 5]

// approach 7
const arr7 = [1, 2, 3, 5];
const missingVal = 4;
const insertIndex = arr7.findIndex(n => n > missingVal);
arr7.splice(insertIndex, 0, missingVal);
console.log(arr7); // Output: [1, 2, 3, 4, 5]

// approach 8
const arr8 = [1, 2, 3, 5];
const newArray = [];
arr8.forEach(num => {
  if (num === 5) {
    newArray.push(4);
  }
  newArray.push(num);
});
console.log(newArray); // Output: [1, 2, 3, 4, 5]

// approach 9
const arr9 = [1, 2, 3, 5];
const missingNum3 = 4;
const idx = arr9.findIndex(el => el > missingNum3);
arr9.splice(idx, 0, missingNum3);
console.log(arr9); // Output: [1, 2, 3, 4, 5]

// approach 10
const arr10 = [1, 2, 3, 5];
const updatedArr = [];
for (const num of arr10) {
  if (num === 5) {
    updatedArr.push(4);
  }
  updatedArr.push(num);
}
console.log(updatedArr); // Output: [1, 2, 3, 4, 5]

// approach 11
const arr11 = [1, 2, 3, 5];
const valToAdd = 4;
const pos = arr11.findIndex(n => n > valToAdd);
arr11.splice(pos, 0, valToAdd);
console.log(arr11); // Output: [1, 2, 3, 4, 5]

// approach 12
const arr12 = [1, 2, 3, 5];
const newArr2 = [];
arr12.forEach(n => {
  if (n === 5) {
    newArr2.push(4);
  }
  newArr2.push(n);
});
console.log(newArr2); // Output: [1, 2, 3, 4, 5]

// approach 13
const arr13 = [1, 2, 3, 5];
const missingNum4 = 4;
const insertPos = arr13.findIndex(el => el > missingNum4);
arr13.splice(insertPos, 0, missingNum4);
console.log(arr13); // Output: [1, 2, 3, 4, 5]

// approach 14
const arr14 = [1, 2, 3, 5];
const resultArr2 = [];
for (const num of arr14) {
  if (num === 5) {
    resultArr2.push(4);
  }
  resultArr2.push(num);
}
console.log(resultArr2); // Output: [1, 2, 3, 4, 5]

// approach 15
const arr15 = [1, 2, 3, 5];
const valToInsert = 4;
const position2 = arr15.findIndex(n => n > valToInsert);
arr15.splice(position2, 0, valToInsert);
console.log(arr15); // Output: [1, 2, 3, 4, 5]

// approach 16
const arr16 = [1, 2, 3, 5];
const newArr3 = [];
arr16.forEach(n => {
  if (n === 5) {
    newArr3.push(4);
  }
  newArr3.push(n);
});
console.log(newArr3); // Output: [1, 2, 3, 4, 5]

// approach 17
const arr17 = [1, 2, 3, 5];
const missingNum5 = 4;
const insertPos2 = arr17.findIndex(el => el > missingNum5);
arr17.splice(insertPos2, 0, missingNum5);
console.log(arr17); // Output: [1, 2, 3, 4, 5]

// approach 18
const arr18 = [1, 2, 3, 5];
const resultArr3 = [];
for (const num of arr18) {
  if (num === 5) {
    resultArr3.push(4);
  }
  resultArr3.push(num);
}
console.log(resultArr3); // Output: [1, 2, 3, 4, 5]

// approach 19  
const arr19 = [1, 2, 3, 5];
const valToInsert2 = 4;
const position3 = arr19.findIndex(n => n > valToInsert2);
arr19.splice(position3, 0, valToInsert2);
console.log(arr19); // Output: [1, 2, 3, 4, 5]

// approach 20
const arr20 = [1, 2, 3, 5];
const newArr4 = [];
arr20.forEach(n => {
  if (n === 5) {
    newArr4.push(4);
  }
  newArr4.push(n);
});
console.log(newArr4); // Output: [1, 2, 3, 4, 5]

// approach 21
const arr21 = [1, 2, 3, 5];
const missingNum6 = 4;
const insertPos3 = arr21.findIndex(el => el > missingNum6);
arr21.splice(insertPos3, 0, missingNum6);
console.log(arr21); // Output: [1, 2, 3, 4, 5]

// approach 22
const arr22 = [1, 2, 3, 5];
const resultArr4 = [];
for (const num of arr22) {
  if (num === 5) {
    resultArr4.push(4);
  }
  resultArr4.push(num);
}
console.log(resultArr4); // Output: [1, 2, 3, 4, 5]

// approach 23
const arr23 = [1, 2, 3, 5];
const valToInsert3 = 4;
const position4 = arr23.findIndex(n => n > valToInsert3);
arr23.splice(position4, 0, valToInsert3);
console.log(arr23); // Output: [1, 2, 3, 4, 5]

// approach 24
const arr24 = [1, 2, 3, 5];
const newArr5 = [];
arr24.forEach(n => {
  if (n === 5) {
    newArr5.push(4);
  }
  newArr5.push(n);
});
console.log(newArr5); // Output: [1, 2, 3, 4, 5]

// approach 25
const arr25 = [1, 2, 3, 5];
const missingNum7 = 4;
const insertPos4 = arr25.findIndex(el => el > missingNum7);
arr25.splice(insertPos4, 0, missingNum7);
console.log(arr25); // Output: [1, 2, 3, 4, 5]

// approach 26
const arr26 = [1, 2, 3, 5];
const resultArr5 = [];
for (const num of arr26) {
  if (num === 5) {
    resultArr5.push(4);
  }
  resultArr5.push(num);
}
console.log(resultArr5); // Output: [1, 2, 3, 4, 5]

// approach 27
const arr27 = [1, 2, 3, 5];
const valToInsert4 = 4;
const position5 = arr27.findIndex(n => n > valToInsert4);
arr27.splice(position5, 0, valToInsert4);
console.log(arr27); // Output: [1, 2, 3, 4, 5]

// approach 28
const arr28 = [1, 2, 3, 5];
const newArr6 = [];
arr28.forEach(n => {
  if (n === 5) {
    newArr6.push(4);
  }
  newArr6.push(n);
});
console.log(newArr6); // Output: [1, 2, 3, 4, 5]

// approach 29  
const arr29 = [1, 2, 3, 5];
const missingNum8 = 4;
const insertPos5 = arr29.findIndex(el => el > missingNum8);
arr29.splice(insertPos5, 0, missingNum8);
console.log(arr29); // Output: [1, 2, 3, 4, 5]

// approach 30
const arr30 = [1, 2, 3, 5];
const resultArr6 = [];
for (const num of arr30) {
  if (num === 5) {
    resultArr6.push(4);
  }
  resultArr6.push(num);
}
console.log(resultArr6); // Output: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4]

