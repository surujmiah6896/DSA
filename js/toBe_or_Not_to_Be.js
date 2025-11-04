/**
 * explain toBe and notToBe
 */

var expect = function(val){
    let v1 = val;
    return{
        toBe(v2){
            if(v1 === v2){
                return true;
            }else{
                throw new Error('Not Equal');
            }
        },
        notToBe(v3){
            if(v1 !== v3){
                return true
            }else{
                throw new Error('Equal');
            }
        }
    }
}

console.log(expect(5).toBe('5'))