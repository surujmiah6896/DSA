/**
 * Create Todo class
 */

function generateId(arr) {
    if (arr.length === 0) {
        return 1;
    } else {
        return arr[arr.length - 1].id + 1;
    }
}

/**
 * @property {Array} todoList - Array of todo objects
 * @method addItem - Add a new todo
 * @method list - Get all todos
 * @method update - Update a todo by id
 * @method delete - Delete a todo by id
 * @method complete - Mark a todo as completed by id
 * @method next - Generate next id
 * @method find - Find a todo by any property
 */


class Todo {
  constructor(todoList = []) {
    this.todoList = todoList;
  }

  addItem(title) {
    let item = {
      id: generateId(this.todoList),
      title: title,
      completed: false,
      createdAt: new Date(),
    };
    this.todoList.push(item);
  }

  update(id, updatedTask) {
    let item;
    for (let t of this.todoList) {
      if (t.id === id) {
        item = t;
        break;
      }
    }
    if (item) {
      item.task = updatedTask;
    }
  }

  complete(id) {
    let item;
    for (let t of this.todoList) {
      if (t.id === id) {
        item = t;
        break;
      }
    }
    if (item) {
      item.completed = true;
    }
    return item;
  }

  list() {
    return this.todoList;
  }

  next() {
    return this.todoList[0];
  }

  find(title) {
    console.log('check title', title);
    
    const results = [];
    for (let t of this.todoList) {
      if (t.title.toLowerCase().includes(title.toLowerCase())) {
        results.push(t);
      }
    }
    return results.length > 0 ? results : null;
  }

  delete(id) {
    let item;
    for (let t of this.todoList) {
      if (t.id === id) {
        item = t;
        break;
      }
    }
    if (item) {
      this.todoList = slice(this.todoList).remove(item).toArray();
    }
  }
}

module.exports = Todo;