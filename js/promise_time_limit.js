var timeLimit = function(fn, t){
    return function(...args){
        return new Promise((resolve, reject)=>{
            const timeId = setTimeout(()=>reject("Time Limit Exceeded"),t);
            fn(...args).then(resolve).catch(reject).finally(()=>clearTimeout(timeId));
        });
    }
}


fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

inputs = [5];
t = 200;
const r = timeLimit(fn,t);
const rr = r(5).catch(console.log);
console.log("r", rr);