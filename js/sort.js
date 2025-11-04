let numbers = [4,5,6,1,2,3,8,9,4,5];

/**
 * @title emplement raw sorting function
 */

function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// The sort2 function as written does not perform a valid comparison for sorting.
// If you want to use a comparison function with Array.prototype.sort, it should return a negative, zero, or positive value based on the comparison.

function sort2(a, b) {
    return a - b;
}

// Example usage:
console.log(numbers.sort(sort2)); // [1, 2, 3, 4, 4, 5, 5, 6, 8, 9]


let array = [12, 3, 1, 32, 65, 78, 95, 45, 12, 45, 411, 120];

const binarySearch = (arr, key) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key){
        return mid;
    } 
    if (arr[mid] < key) {
      low = mid + 1;
    } else if (arr[mid] > key) {
      high = mid - 1;
    } 
  }
  return -1;
};

array.sort((a, b) => a - b);

console.log('binary-search',binarySearch(array, 120));