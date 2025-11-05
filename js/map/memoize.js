/**
 * memoize 
 * leetcode 2623
 */

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
        console.log("hi", cache);
        return cache.get(key);
    }

    const result = fn.apply(this, args);
    console.log("result",result);
    
    cache.set(key, result);
    return result;
  };
}

const fn = memoize(function (a, b) {
         return a + b;
    });

    console.log(fn(3,5))
    console.log(fn(3,5))
    console.log(fn(3,5))