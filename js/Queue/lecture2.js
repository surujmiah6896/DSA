/**
 * @title: Queue Implementation
 * @description: This code implements a simple queue data structure using an array.
 * @description: Queue means First In First Out (FIFO). here use push and shift methods in js.
 */
const MAX_SIZE = 30; // Maximum size of the queue
class Queue {
    constructor() {
        this.front = 0;
        this.rear = 0;
        this.items = new Array(MAX_SIZE);
    }

    // Enqueue an element
    enqueue(element) {
        if (this.rear === MAX_SIZE) {
            console.log("Queue is full");
            return false;
        }
        this.items[this.rear++] = element;
    }

    // Dequeue an element
    dequeue() {
        if (this.front === this.rear) {
          console.log("Queue is full");
          return false;
        }
        const item = this.items[this.front];
        for (let i = 0; i < this.rear - 1; i++) {
            this.items[i] = this.items[i + 1];
        }
        delete this.items[--this.rear];
        return item;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === this.rear;
    }

  

    // Show the elements in the queue
    showQueue() {
        if (this.front === this.rear) {
          console.log("Queue is full");
          return false;
        }
        for(let i = this.front; i < this.rear; i++){
            console.log('Displaying', this.items[i])
        }
    }

    // Get the next element in the queue
    next() {
        if (this.isEmpty()) {
            console.log("Queue is full");
            return null;
        }
        return this.items[this.front];
    }

    // Get the size of the queue
    size() {
        return this.rear - this.front;
    }
}

module.exports = Queue;
