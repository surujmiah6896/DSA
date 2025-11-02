/**
 * @title: map discution
 */

let names = ["stack js", "stack school", "stack consultancy", "stack solution"];


// Extract Length -> [ 8, 12, 17, 14 ]
// get upperCare Version->[ 'STACK JS', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION' ]
// get sliced version-> [ 'js', 'school', 'consultancy', 'solution' ]

//we have reuse function
function reuse(arr, logic){
    for(let i = 0; i < arr.length; i++){
        logic(arr[i], i, arr);
    }
}


//example 1
const result = [];
reuse(names, value =>{
    result.push(value.length);
});
console.log(result);

//example 2
const result2 = [];
reuse(names, value =>{
    result2.push(value.toUpperCase());
});
console.log(result2);


//example 2
const result3 = [];
reuse(names, value =>{
    result3.push(value.substr(6));
});
console.log(result3);

//here all example are same but different in business logic 
// and all function  create new more result that means create new array that is a result



//is custom map function
function reuseAndMap(arr, logic) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(logic(arr[i], i, arr));
    }
    return  result;
}

let newtest = reuseAndMap(names, value=> value.substr(6));

console.log(newtest);


let newtest2 = reuseAndMap(names, (value) => value.toUpperCase());

console.log(newtest2);

// now we work with js build-in map
const nameLength = names.map((value, index)=> value.length);
console.log(nameLength);

