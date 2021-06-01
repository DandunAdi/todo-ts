export class TodoListManager {
    constructor(todoLists) {
        this.todoLists = todoLists;
    }
}
class Todo {
    constructor(id, title, isDone) {
        this.id = id;
        this.title = title;
        this.isDone = isDone;
    }
    toggleIsDone() {
        this.isDone = !this.isDone;
    }
}
