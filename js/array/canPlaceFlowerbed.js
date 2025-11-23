/**
 * @title get total place for plant tree
 * @param {*} arr 
 * @param {*} n 
 */
var canPlaceFlowers = function (arr, n){
    let totalCanPossible = 0;
    let start = 0;
    const len = arr.length;

    while(start < len){
        if(arr[start] === 0){
            const leftEmpty = (start === 0) || (arr[start-1] === 0);
            const rightEmpty = (start === len -1) || (arr[start + 1] === 0);

            if(leftEmpty && rightEmpty){
                totalCanPossible++;
                start +=2;
                continue;
            }
        }
        start++;
    }
}


const flowerbed = [1, 0, 0, 0, 1],
  n = 1;

console.log(canPlaceFlowers(flowerbed, n));