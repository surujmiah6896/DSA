var arr = [
  // {name: 'jamal', age:25},
  // {name: 'kamal', age:25},
  // {name: 'Tamal', age:30},

  { name: "Jahid", group: "A" },
  { name: "jamal", group: "B" },
  { name: "kamal", group: "B" },
  { name: "Tamal", group: "C" },
];

function arrayGroupByKey(arr, key) {
  if (typeof arr != "object" || arr == "" || arr == null) {
    console.log("please enter valid array");
    return false;
  }

  var len = arr.length;
  var c = {};
  for (i = 0; i < len; i++) {
    var array = arr[i];
    var arraykey = array[key];

    if (key in array) {
      if (arraykey in c) {
        c[arraykey].push(array);
      } else {
        c[arraykey] = [array];
      }
    }
  }
  return c;
}

console.log(arrayGroupByKey(arr, "group"));
