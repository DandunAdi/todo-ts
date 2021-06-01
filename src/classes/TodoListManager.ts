export class TodoListManager {
  constructor(private todoLists: Todo[], private container: HTMLUListElement) {
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

  renderTodo(todo: Todo) {
    const li = document.createElement("li");
    li.innerText = todo.title;
    if (todo.isDone) li.classList.add("done");
    this.container.append(li);
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: this.todoLists ? this.todoLists.length : 0,
      title: title,
      isDone: false,
    };
    this.todoLists.push(newTodo);
    this.renderTodo(newTodo);
    this.saveToStorage();
  }

  deleteTodo(title: string) {
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

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};
