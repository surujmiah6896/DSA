const Queue = require('./lecture2');

const queue = new Queue();

queue.enqueue('Task One');
queue.enqueue('Task Two');
queue.enqueue('Task Three');
queue.showQueue();
queue.dequeue();
queue.showQueue();
console.log(queue.next());
console.log(queue);


// now queue Implement with js array push and shift methods
const q = [];
q.push("Task One");
q.push("Task Two");
q.push("Task Three");
console.log('before shift', q);
q.shift();
q.shift();
console.log('q',q);
