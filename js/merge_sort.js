function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    console.log(mid);
    
    const left = mergeSort(arr.slice(0, mid)); 
    const right = mergeSort(arr.slice(mid));
    // console.log(arr[mid]);
    
    console.log(left);
    console.log(right);
    
    return merge(left, right);
}

function merge(left, right){
    const merged = [];
    let i = j = 0;

    //merged two sorted values
    while (i < left.length && j<right.length){
        if(left[i] <= right[j]){
            merged.push(left[i]);
            console.log("i", left[i]);
            
            i++;
        }else{
            merged.push(right[j]);
            console.log("j", right[j]);
            j++;
        }
    }

    //add remaining elements
    return merged.concat(left.slice(i)).concat(right.slice(j));

}



const arr = [38, 27, 43, 3, 9, 82, 10, 23];
const sorted = mergeSort(arr);
console.log(sorted);


