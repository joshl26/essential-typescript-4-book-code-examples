"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        //no statements required
    }
    addTodo(task) {
        while (this.getToDoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getToDoById(id) {
        return this.todoItems.find((item) => item.id === id);
    }
    markComplete(id, complete) {
        const todoItem = this.getToDoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.TodoCollection = TodoCollection;
