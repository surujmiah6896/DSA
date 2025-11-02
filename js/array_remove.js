/**
 * Removes the first occurrence of a specified value from an array.
 * @param {Array} arr - The array to remove the value from.
 * @param {*} value - The value to be removed.
 * @returns {Array} The modified array with the value removed.
 */
function removeValueFromArray(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const valueToRemove = 3;
const updatedArray = removeValueFromArray(myArray, valueToRemove);
console.log(updatedArray); // Output: [1, 2, 4, 5]

//approch 2
function removeValue(arr, value) {
  return arr.filter(item => item !== value);
}

// Example usage:
const anotherArray = [10, 20, 30, 40, 50];
const valueToRemove2 = 30;
const newArray = removeValue(anotherArray, valueToRemove2);
console.log(newArray); // Output: [10, 20, 40, 50]

//approch 3
function removeValueUsingReduce(arr, value) {
  return arr.reduce((acc, item) => {
    if (item !== value) {
      acc.push(item);
    }
    return acc;
  }, []);
}

// Example usage:
const sampleArray = [100, 200, 300, 400, 500];
const valueToRemove3 = 400;
const reducedArray = removeValueUsingReduce(sampleArray, valueToRemove3);
console.log(reducedArray); // Output: [100, 200, 300, 500]  

//approch 4
function removeValueUsingLoop(arr, value) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example usage:
const loopArray = [7, 8, 9, 10, 11];
const valueToRemove4 = 9;
const loopResultArray = removeValueUsingLoop(loopArray, valueToRemove4);
console.log(loopResultArray); // Output: [7, 8, 10, 11]

//approch 5
function removeAllOccurrences(arr, value) {
  let index = arr.indexOf(value);
  while (index !== -1) {
    arr.splice(index, 1);
    index = arr.indexOf(value);
  }
  return arr;
}

// Example usage:
const multiArray = [1, 2, 3, 2, 4, 2, 5];
const valueToRemove5 = 2;
const multiUpdatedArray = removeAllOccurrences(multiArray, valueToRemove5);
console.log(multiUpdatedArray); // Output: [1, 3, 4, 5]


//approch 6
function removeValueUsingSet(arr, value) {
  const resultSet = new Set(arr);
  resultSet.delete(value);
  return Array.from(resultSet);
}

// Example usage:
const setArray = [1, 2, 3, 4, 5];
const valueToRemove6 = 4;
const setResultArray = removeValueUsingSet(setArray, valueToRemove6);
console.log(setResultArray); // Output: [1, 2, 3, 5]    
//approch 7
function removeValueUsingMap(arr, value) {
  const resultMap = new Map();
  arr.forEach(item => {
    if (item !== value) {
      resultMap.set(item, true);
    }
  });
  return Array.from(resultMap.keys());
}

// Example usage:
const mapArray = [6, 7, 8, 9, 10];
const valueToRemove7 = 7;
const mapResultArray = removeValueUsingMap(mapArray, valueToRemove7);
console.log(mapResultArray); // Output: [6, 8, 9, 10]

//approch 8
function removeValueUsingWhile(arr, value) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
}

// Example usage:
const whileArray = [11, 12, 13, 14, 15];
const valueToRemove8 = 13;
const whileResultArray = removeValueUsingWhile(whileArray, valueToRemove8);
console.log(whileResultArray); // Output: [11, 12, 14, 15]  

//approch 9
function removeValueUsingRecursion(arr, value) {
  if (arr.length === 0) {
    return [];
  }
  const [first, ...rest] = arr;
  if (first === value) {
    return removeValueUsingRecursion(rest, value);
  } else {
    return [first, ...removeValueUsingRecursion(rest, value)];
  }
}

// Example usage:
const recursionArray = [16, 17, 18, 19, 20];
const valueToRemove9 = 18;
const recursionResultArray = removeValueUsingRecursion(recursionArray, valueToRemove9);
console.log(recursionResultArray); // Output: [16, 17, 19, 20]

//approch 10
function removeValueUsingIndexLoop(arr, value) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example usage:
const indexLoopArray = [21, 22, 23, 24, 25];
const valueToRemove10 = 22;
const indexLoopResultArray = removeValueUsingIndexLoop(indexLoopArray, valueToRemove10);
console.log(indexLoopResultArray); // Output: [21, 23, 24, 25]  
//approch 11
function removeValueUsingCopy(arr, value) {
  const result = [];
  arr.forEach(item => {
    if (item !== value) {
      result.push(item);
    }
  });
  return result;
}

// Example usage:
const copyArray = [26, 27, 28, 29, 30];
const valueToRemove11 = 29;
const copyResultArray = removeValueUsingCopy(copyArray, valueToRemove11);
console.log(copyResultArray); // Output: [26, 27, 28, 30]

//approch 12
function removeValueUsingFlatMap(arr, value) {
  return arr.flatMap(item => (item === value ? [] : [item]));
}

// Example usage:
const flatMapArray = [31, 32, 33, 34, 35];
const valueToRemove12 = 34;
const flatMapResultArray = removeValueUsingFlatMap(flatMapArray, valueToRemove12);
console.log(flatMapResultArray); // Output: [31, 32, 33, 35]

//approch 13
function removeValueUsingConcat(arr, value) {
  let result = [];
  arr.forEach(item => {
    if (item !== value) {
      result = result.concat(item);
    }
  });
  return result;
}

// Example usage:
const concatArray = [36, 37, 38, 39, 40];
const valueToRemove13 = 37;
const concatResultArray = removeValueUsingConcat(concatArray, valueToRemove13);
console.log(concatResultArray); // Output: [36, 38, 39, 40]
//approch 14
function removeValueUsingShift(arr, value) {
  const result = [];
  while (arr.length > 0) {
    const item = arr.shift();
    if (item !== value) {
      result.push(item);
    }
  }
  return result;
}

// Example usage:
const shiftArray = [41, 42, 43, 44, 45];
const valueToRemove14 = 43;
const shiftResultArray = removeValueUsingShift(shiftArray, valueToRemove14);
console.log(shiftResultArray); // Output: [41, 42, 44, 45]

//approch 15
function removeValueUsingPop(arr, value) {
  const result = [];
  while (arr.length > 0) {
    const item = arr.pop();
    if (item !== value) {
      result.unshift(item);
    }
  }
  return result;
}

// Example usage:
const popArray = [46, 47, 48, 49, 50];
const valueToRemove15 = 48;
const popResultArray = removeValueUsingPop(popArray, valueToRemove15);
console.log(popResultArray); // Output: [46, 47, 49, 50]
//approch 16
function removeValueUsingForOf(arr, value) {
  const result = [];
  for (const item of arr) {
    if (item !== value) {
      result.push(item);
    }
  }
  return result;
}

// Example usage:
const forOfArray = [51, 52, 53, 54, 55];
const valueToRemove16 = 52;
const forOfResultArray = removeValueUsingForOf(forOfArray, valueToRemove16);
console.log(forOfResultArray); // Output: [51, 53, 54, 55]
//approch 17
function removeValueUsingWhileLoop(arr, value) {
  const result = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] !== value) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}

// Example usage:
const whileLoopArray = [56, 57, 58, 59, 60];
const valueToRemove17 = 59;
const whileLoopResultArray = removeValueUsingWhileLoop(whileLoopArray, valueToRemove17);
console.log(whileLoopResultArray); // Output: [56, 57, 58, 60]
//approch 18
function removeValueUsingSome(arr, value) {
  const result = [];
  arr.some(item => {
    if (item !== value) {
      result.push(item);
    }
    return false;
  });
  return result;
}

// Example usage:
const someArray = [61, 62, 63, 64, 65];
const valueToRemove18 = 64;
const someResultArray = removeValueUsingSome(someArray, valueToRemove18);
console.log(someResultArray); // Output: [61, 62, 63, 65]
//approch 19
function removeValueUsingForEach(arr, value) {
  const result = [];
  arr.forEach(item => {
    if (item !== value) {
      result.push(item);
    }
  });
  return result;
}

// Example usage:
const forEachArray = [66, 67, 68, 69, 70];
const valueToRemove19 = 67;
const forEachResultArray = removeValueUsingForEach(forEachArray, valueToRemove19);
console.log(forEachResultArray); // Output: [66, 68, 69, 70]
//approch 20
function removeValueUsingFilterMethod(arr, value) {
  return arr.filter(function(item) {
    return item !== value;
  });
}

// Example usage:
const filterMethodArray = [71, 72, 73, 74, 75];
const valueToRemove20 = 73;
const filterMethodResultArray = removeValueUsingFilterMethod(filterMethodArray, valueToRemove20);
console.log(filterMethodResultArray); // Output: [71, 72, 74, 75]
//approch 21
function removeValueUsingArrowFunction(arr, value) {
  return arr.filter(item => item !== value);
}

// Example usage:
const arrowFunctionArray = [76, 77, 78, 79, 80];
const valueToRemove21 = 78;
const arrowFunctionResultArray = removeValueUsingArrowFunction(arrowFunctionArray, valueToRemove21);
console.log(arrowFunctionResultArray); // Output: [76, 77, 79, 80]
//approch 22
function removeValueUsingTraditionalFunction(arr, value) {
  return arr.filter(function(item) {
    return item !== value;
  });
}

// Example usage:
const traditionalFunctionArray = [81, 82, 83, 84, 85];
const valueToRemove22 = 84;
const traditionalFunctionResultArray = removeValueUsingTraditionalFunction(traditionalFunctionArray, valueToRemove22);
console.log(traditionalFunctionResultArray); // Output: [81, 82, 83, 85]
//approch 23
function removeValueUsingLoopAndPush(arr, value) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example usage:
const loopAndPushArray = [86, 87, 88, 89, 90];
const valueToRemove23 = 87;
const loopAndPushResultArray = removeValueUsingLoopAndPush(loopAndPushArray, valueToRemove23);
console.log(loopAndPushResultArray); // Output: [86, 88, 89, 90]
//approch 24
function removeValueUsingArrayFrom(arr, value) {
  const resultArray = Array.from(arr);
  const index = resultArray.indexOf(value);
  if (index !== -1) {
    resultArray.splice(index, 1);
  }
  return resultArray;
}

// Example usage:
const arrayFromArray = [91, 92, 93, 94, 95];
const valueToRemove24 = 92;
const arrayFromResultArray = removeValueUsingArrayFrom(arrayFromArray, valueToRemove24);
console.log(arrayFromResultArray); // Output: [91, 93, 94, 95]  
//approch 25
function removeValueUsingSlice(arr, value) {
  const index = arr.indexOf(value);
  if (index === -1) {
    return arr;
  }
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

// Example usage:
const sliceArray = [96, 97, 98, 99, 100];
const valueToRemove25 = 99;
const sliceResultArray = removeValueUsingSlice(sliceArray, valueToRemove25);
console.log(sliceResultArray); // Output: [96, 97, 98, 100]

//approch 26
function removeValueUsingDestructuring(arr, value) {
  const index = arr.indexOf(value);
  if (index === -1) {
    return arr;
  }
  const [removed] = arr.splice(index, 1);
  return arr;
}

// Example usage:
const destructuringArray = [101, 102, 103, 104, 105];
const valueToRemove26 = 104;
const destructuringResultArray = removeValueUsingDestructuring(destructuringArray, valueToRemove26);
console.log(destructuringResultArray); // Output: [101, 102, 103, 105]

//approch 27
function removeValueUsingTypedArray(arr, value) {
  const typedArray = new Uint8Array(arr);
  const result = [];
  for (let i = 0; i < typedArray.length; i++) {
    if (typedArray[i] !== value) {
      result.push(typedArray[i]);
    }
  }
  return result;
}

// Example usage:
const typedArray = [106, 107, 108, 109, 110];
const valueToRemove27 = 108;
const typedArrayResult = removeValueUsingTypedArray(typedArray, valueToRemove27);
console.log(typedArrayResult); // Output: [106, 107, 109, 110]

//approch 28
function removeValueUsingProxy(arr, value) {
  const handler = {
    get(target, prop) {
      if (prop === 'length') {
        return target.filter(item => item !== value).length;
      }
      return target[prop];
    }
  };
  const proxy = new Proxy(arr, handler);
  return Array.from({ length: proxy.length }, (_, i) => proxy[i]);
}

// Example usage:
const proxyArray = [111, 112, 113, 114, 115];
const valueToRemove28 = 113;
const proxyResultArray = removeValueUsingProxy(proxyArray, valueToRemove28);
console.log(proxyResultArray); // Output: [111, 112, 114, 115]

//approch 29
function removeValueUsingGenerator(arr, value) {
  function* generator() {
    for (const item of arr) {
      if (item !== value) {
        yield item;
      }
    }
  }
  return Array.from(generator());
}

// Example usage:
const generatorArray = [116, 117, 118, 119, 120];
const valueToRemove29 = 117;
const generatorResultArray = removeValueUsingGenerator(generatorArray, valueToRemove29);
console.log(generatorResultArray); // Output: [116, 118, 119, 120]
//approch 30
function removeValueUsingReduceRight(arr, value) {
  return arr.reduceRight((acc, item) => {
    if (item !== value) {
      acc.unshift(item);
    }
    return acc;
  }, []);
}

// Example usage:
const reduceRightArray = [121, 122, 123, 124, 125];
const valueToRemove30 = 124;
const reduceRightResultArray = removeValueUsingReduceRight(reduceRightArray, valueToRemove30);
console.log(reduceRightResultArray); // Output: [121, 122, 123, 125]

//approch 31
function removeValueUsingArrayPrototype(arr, value) {
  const result = Array.prototype.filter.call(arr, item => item !== value);
  return result;
}

// Example usage:
const arrayPrototypeArray = [126, 127, 128, 129, 130];
const valueToRemove31 = 128;
const arrayPrototypeResultArray = removeValueUsingArrayPrototype(arrayPrototypeArray, valueToRemove31);
console.log(arrayPrototypeResultArray); // Output: [126, 127, 129, 130]

//approch 32
function removeValueUsingLodash(arr, value) {
  // Assuming lodash is available
  return _.without(arr, value);
}

// Example usage:
const lodashArray = [131, 132, 133, 134, 135];
const valueToRemove32 = 133;
const lodashResultArray = removeValueUsingLodash(lodashArray, valueToRemove32);
console.log(lodashResultArray); // Output: [131, 132, 134, 135] 
// Note: The last approach assumes that lodash library is included in the project.
// End of code approaches for removing a value from an array in JavaScript