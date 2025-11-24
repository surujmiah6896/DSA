var increasingTriplet = function(){
    if(nums.length < 3) return false;

    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;

    for(let num of nums){
        if(num <= first){
            first = num;
        }else if(num <= second){
            second = num;
        }else{
            return true;
        }
    }

    return false;
}


const nums = [5,4,3,2,1];
console.log(increasingTriplet(nums));