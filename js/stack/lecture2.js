/**
 * @title: implement a basic stack
 */
const MAX_SIZE = 30;
class Stack {
  constructor() {
    this.items = new Array(MAX_SIZE);
    this.top = -1;
  }

  push(item) {
    if(this.top >= MAX_SIZE){
        console.log('Stack Overflow');
        return false;
    }
    
    this.items[++this.top] = item;
    return true;
  }

  pop() {
    if(this.isEmpty()){
        console.log('Stack Underflow');
        return false;
    }
    const item = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return item;
  }

  peek() {
    if(this.isEmpty()){
        console.log('Stack Underflow');
        return false;
    }
    return this.items[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  size() {
    return this.items.length;
  }
}
