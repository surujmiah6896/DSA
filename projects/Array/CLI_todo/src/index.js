const yargs = require("yargs");
const argv = require("yargs/yargs")(process.argv.slice(2)).argv;
const path = require('path');
const Todo = require('./Todo');
const {saveFile, readFile} = require('./utils');
const chalk = require('chalk').default;
const { ADD, LIST, COMPLETE, UPDATE, DELETE, NEXT, FIND } = require('./commands');


const fileName = '../data.json';
const filePath = path.resolve(__dirname, fileName);

(async () => {
  let data = readFile(filePath) || [];
  const todo = new Todo(data);
  const { _: baseCommand } = argv;
  console.log(argv);
  
    switch (baseCommand[0]) {
      case ADD:
        todo.addItem(argv.title);
        console.log('Todo Added');
        saveFile(filePath, todo.todoList);
        break;
      case LIST:
        const items = todo.list();
        items.forEach(item => {
          console.log(`${item.id}: ${chalk.blue(item.title)}[${item.createdAt.toLocaleString()}] => ${item.completed ? chalk.green('X') : chalk.red('O')}`);
        });
        break;
      case COMPLETE:
        todo.complete(argv.id);
        console.log('Todo Completed');
        saveFile(filePath, todo.todoList);
        break;
      case UPDATE:
        const updatedItem = todo.update(argv.id, argv.title);
        console.log('Todo Updated', updatedItem);
        saveFile(filePath, todo.todoList);
        break;
      case DELETE:
        todo.delete(argv.id);
        console.log('Todo Deleted');
        saveFile(filePath, todo.todoList);
        break;
      case NEXT:
        const item = todo.next();
        console.log(`${item.id}: ${item.title}[${item.completed ? "X" : " "}]`);
        break;
      case FIND:
        const Items = todo.find(argv.title);
        if (!Items.length) {
          console.log('No Todo Found');
          return;
        }
        for(let item of Items){
          console.log(`${item.id}: ${chalk.blue(item.title)}[${item.createdAt.toLocaleString()}] => ${item.completed ? chalk.green('X') : chalk.red('O')}`);
        }
        break;
      default:
        console.log("Unknown command");
        throw new Error("Unknown command");
    }
})();