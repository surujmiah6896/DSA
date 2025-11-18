function isValid(s){
    const stack = [];
    const map = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    for(let ch of s){
        console.log('ch', ch)
        if(ch in map){
            stack.push(ch);
            console.log('stack', stack);
            
        }else{
            if(stack.length === 0) return false;
            if(map[stack.pop()] !== ch) return false;
        }
    }
    return stack.length === 0;
}


const s = "()";
console.log(isValid(s))