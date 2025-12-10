
function asteroidCollision(asteroids) {
    const stack = [];
    for (let asteroid of asteroids) {
        while(stack.length && asteroid < 0 && stack[stack.length - 1] > 0){
            const diff = asteroid + stack[stack.length - 1];

            if(diff < 0){
                stack.pop();
                continue;
            }else if(diff === 0){
                stack.pop();
                asteroid = 0;
                break;
            }else{
                asteroid = 0;
                break;
            }
        }

        if(asteroid !== 0){
            stack.push(asteroid);
        }
        
    }
    return stack;
}


const input = [5, 10, -5];
console.log(asteroidCollision(input));