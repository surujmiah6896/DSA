/**
 * return third max number and if not exist third number then return max number.
 * @approach brouf
 * @leet-code 414. Third Maximum Number
 * @param {*} nums 
 */

// 3rd max number find so i use sorted then lest 3 item get then return
//step 1: sort
//step 2: remove duplicate
//step 3: check 3rd max is exist
//step 4: return max
//time complexity: O(n log n)
//space complexity: O(n)

var thirdMax = function(nums){
    const distinct = [...new Set(nums)].sort((a, b)=> b - a);
    return distinct.length >= 3 ? distinct[2] : distinct[0];
}

// const nums = [3, 3, 3, 3, 3, 1];

// console.log(thirdMax(nums));



/**
 * solve with Three variables
 * Time Complexity: O(n)
 * Space Comlexity: O(1)
 */


var thirdMaxWithThreeVariables = function (nums) {
    let first = - Infinity;
    let second = - Infinity;
    let third = - Infinity;

    for(let num of nums){
        if(num === first || num === second || num === third){
            continue;
        }

        if(num > first){
            third = second;
            second = first;
            first = num;
        }else if(num > second){
            third = second;
            second = num;
        }else if(num > third){
            third = num;
        }
    }

    return third !== -Infinity ? third : first;
};

const nums = [3, 3, 2, 2, 3, 1];
console.log(thirdMaxWithThreeVariables(nums));