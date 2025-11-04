var arr = [
  1,
  2,
  3,
  [4, 6, 7],
  [
    [8, 9, 10],
    [11, 12, 13],
  ],
];

// console.log('flat-array:',arr.flat()); is work only one step


function createNewArray(arr) {
  if (typeof arr != "object" || arr == "" || arr == null) {
    console.log("please enter valid array");
    return false;
  }

  const newArray = [];
  function flatten(input) {
    var len = input.length;
    for (i = 0; i < len; i++) {
      const item = input[i];
      if (Number.isInteger(item)) {
        newArray.push(item);
      } else if (Array.isArray(item)) {
        flatten(item);
      }
    }
  }

  flatten(arr);
  return newArray;
}

console.log(createNewArray(arr));
