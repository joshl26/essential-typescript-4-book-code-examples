"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getToDoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getToDoById(id) {
        return this.itemMap.get(id);
    }
    getToDoItems(includeComplete) {
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete);
    }
    markComplete(id, complete) {
        const todoItem = this.getToDoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getToDoItems(false).length,
        };
    }
}
exports.TodoCollection = TodoCollection;
