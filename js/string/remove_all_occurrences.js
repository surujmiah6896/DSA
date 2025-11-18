function removeOccurrences(s, part){
  const  stack = [];
  const  partLength = part.length;

    for(let char of s){
        stack.push(char);

        //stack matches the part
        if(stack.length >= partLength){
            let match = true;
            for(let i = 0; i < partLength; i++){
                if(stack[stack.length - partLength + i] !== part[i]){
                    match = false;
                    break;
                }
            }
            if(match){
                for(let i = 0; i < partLength; i++){
                    stack.pop();
                }
            }
        }
    }
    return stack.join('');
}

function removeOccurrences(s, part) {
  while (s.includes(part)) {
    s = s.replace(part, "");
  }
  return s;
}

const s = "daabcbaabcbc";
const part = "abc";

console.log(removeOccurrences(s, part));