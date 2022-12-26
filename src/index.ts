import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true),
];

let collection: TodoCollection = new TodoCollection("Adam", todos);
let showCompleted = true;

// console.clear();

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List` +
      `(${collection.getItemCounts().incomplete} items to do)`
  );
  collection.getToDoItems(showCompleted).forEach((item) => item.printDetails());
}

enum Commands {
  Toggle = "Show/Hide Completed",
  Quit = "Quit",
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Commands.Toggle:
          showCompleted = !showCompleted;
          promptUser();
          break;
      }
    });
}
promptUser();
// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getToDoById(newId);
// console.log(JSON.stringify(todoItem));
// todoItem.printDetails();

//collection.addTodo(todoItem);
// collection.removeComplete();
