obj1 = { a: null, b: [false, 1] };
obj2 = [null, 0, false, 1];
obj3 = [null, 0, 5, [0], [false, 16]];

var compactObject = function (obj) {
  if(obj === null || typeof obj !== 'object'){
    return obj;
  }

  //array
  if(Array.isArray(obj)){
    const result = [];
    for(let item of obj){
        const compacted = compactObject(item);
        if(Boolean(compacted)){
            result.push(compacted);
        }
    }
    return result;
  }

  const result = {};
  for (let key in obj) {
    const compacted = compactObject(obj[key]);
    if (Boolean(compacted)) {
      result[key] = compacted;
    }
  }
  return result;

};


const r = compactObject(obj2);
console.log("result", r);