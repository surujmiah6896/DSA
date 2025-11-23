const arr = ["a", "b", "c"];
const letters = new Set(arr);

const add = letters.add('f');
console.log('add item: ', add);
//note: add methods return create all items

const remove = letters.delete('c');
console.log('remove item: ', remove);
//note: delete methods return true

const clear = letters.clear();
console.log('clear :', clear);
//note: clear methods return undefined when clear all


console.log('letters :', letters);

// console.log(Object.prototype.toString.call(letters));
