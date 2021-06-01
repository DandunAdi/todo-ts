export class TodoListManager {
  constructor(private todoLists: Todo[], private container: HTMLUListElement) {}

  renderAllTodos() {
    this.container.innerHTML = "";
    this.todoLists.forEach((todoItem) => {
      this.renderTodo(todoItem);
    });
  }

  renderTodo(todo: Todo) {
    const li = document.createElement("li");
    li.innerText = todo.title;
    if (todo.isDone) li.classList.add("done");
    this.container.append(li);
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: this.todoLists.length,
      title: title,
      isDone: false,
    };
    this.todoLists.push(newTodo);
    this.renderTodo(newTodo);
  }
}

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};
