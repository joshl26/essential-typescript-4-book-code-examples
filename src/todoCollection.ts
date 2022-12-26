import { TodoItem } from "./todoItem";

export class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    //no statements required
  }

  addTodo(task: string): number {
    while (this.getToDoById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getToDoById(id: number): TodoItem {
    return this.todoItems.find((item) => item.id === id);
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getToDoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}
