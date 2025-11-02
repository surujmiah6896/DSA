/**
 * ForEach vs for loop
 */

let names = [
    ' learn js',
    'learn stack school',
    'stack consultancy',
    'stack solution',
];

//how we do it on for loop
for(let i = 0; i < names.length; i++){
    // console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
//   console.log(`${i + 1}: ${names[i]}`);
}

//iterating logic and business logic
// here iterating is loop and business logic log 

function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    // logic(arr[i], i , arr);
  }
}

function logic(value, index, arr){
    // console.log(`${index + 1}: ${value} => ${arr}`);
}

//we create foreach 
function myForeach(arr, cb){
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr);
    }
}

const nums = [1,2,3,4,5];
let sum = 0;

function sumFunc(v){
    sum += v
}

myForeach(nums, sumFunc);
console.log('sum',sum);
