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



//create array group with array prototype;
Array.prototype.groupBy = function(fn){
  const result = {};
  for(let item of this){
    const key = fn(item);
    if(!result[key]){
      result[key] = []
    }
    result[key].push(item);
  }
  return result;
}

const newarray = [1,1,2,1,2,2,7].groupBy((item)=>item);
console.log(newarray);


//array groupby with reduce use callback
Array.prototype.groupBy = function (fn) {
  return this.reduce((result, item) => {
    const key = fn(item);
    result[key] = result[key] || [];
    result[key].push(item);
    return result;
  }, {});
};