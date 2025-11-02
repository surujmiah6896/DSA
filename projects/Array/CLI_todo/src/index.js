const yargs = require("yargs");
const argv = require("yargs/yargs")(process.argv.slice(2)).argv;
const path = require('path');
const Todo = require('./Todo');
const {saveFile, readFile} = require('./utils');
const { ADD, LIST, COMPLETE, UPDATE, DELETE, NEXT, FIND } = require('./commands');
const { log } = require("console");

const fileName = '../data.json';
const filePath = path.resolve(__dirname, fileName);

(async () => {
  let data = readFile(filePath) || [];
  const todo = new Todo(data);
  const { _: baseCommand } = argv;
//   console.log(argv);
  
    switch (baseCommand[0]) {
      case ADD:
        todo.addItem(argv.title);
        console.log('Todo Added');
        saveFile(filePath, todo.todoList);
        break;
      case LIST:
        const items = todo.list();
        items.forEach(item => {
          console.log(`${item.id}: ${item.title}[${item.createdAt.toLocaleString()}] => ${item.completed ? 'X' : 'O'}`);
        });
        break;
      case COMPLETE:
        todo.complete(argv.id);
        console.log('Todo Completed');
        saveFile(filePath, todo.todoList);
        break;
      case UPDATE:
        todo.update(argv.id, argv.title);
        console.log('Todo Updated');
        saveFile(filePath, todo.todoList);
        break;
      case DELETE:
        todo.delete(argv.id);
        console.log('Todo Deleted');
        saveFile(filePath, todo.todoList);
        break;
      case NEXT:
        const item = todo.next();
        console.log(`${item.id}: ${item.task}[${item.completed ? 'X' : ' '}]`);
        break;
      case FIND:
        const foundItems = todo.find(argv.title);
        console.log('Todo Found:', foundItems);
        break;
      default:
        console.log("Unknown command");
        throw new Error("Unknown command");
    }
})();