export class TodoListManager {
    constructor(todoLists, container) {
        this.todoLists = todoLists;
        this.container = container;
        this.loadFromStorage();
        this.renderAllTodos();
    }
    renderAllTodos() {
        if (this.todoLists) {
            this.container.innerHTML = "";
            this.todoLists.forEach((todoItem) => {
                this.renderTodo(todoItem);
            });
        }
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
            id: this.todoLists ? this.todoLists.length : 0,
            title: title,
            isDone: false,
        };
        this.todoLists.push(newTodo);
        this.renderTodo(newTodo);
        this.saveToStorage();
    }
    deleteTodo(title) {
        const i = this.todoLists.findIndex((t) => t.title === title);
        this.todoLists.splice(i, 1);
        this.saveToStorage();
        this.renderAllTodos();
    }
    saveToStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todoLists));
    }
    loadFromStorage() {
        const savedTodo = localStorage.getItem("todos");
        this.todoLists = savedTodo ? JSON.parse(savedTodo) : [];
    }
}
