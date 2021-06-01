export class TodoListManager {
    constructor(todoLists, container) {
        this.todoLists = todoLists;
        this.container = container;
    }
    renderAllTodos() {
        this.container.innerHTML = "";
        this.todoLists.forEach((todoItem) => {
            this.renderTodo(todoItem);
        });
    }
    renderTodo(todo) {
        const li = document.createElement("li");
        li.innerText = todo.title;
        if (todo.isDone)
            li.classList.add("done");
        this.container.append(li);
    }
    addTodo(title) {
        const newTodo = {
            id: this.todoLists.length,
            title: title,
            isDone: false,
        };
        this.todoLists.push(newTodo);
        this.renderTodo(newTodo);
    }
}
