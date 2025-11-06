/**
 * implement chunk of array
 */

//this is raw way
arr = [1, 2, 3, 4, 5], size = 2;

var chunk = (arr, size) =>{
    const result = [];
    let currentChunk = [];

    for(let i = 0; i < arr.length; i++){
        currentChunk.push(arr[i]);

        if(currentChunk.length === size){
            result.push(currentChunk);
            currentChunk = [];
        }
    }

    if(currentChunk > size){
        result.push(currentChunk);
    }

    return result;
}

const r = chunk(arr, size);
console.log('chunk array:', r);


