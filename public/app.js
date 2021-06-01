import { TodoListManager } from "./classes/TodoListManager.js";
const listContainer = document.querySelector("ul");
const manager = new TodoListManager([], listContainer);
manager.renderAllTodos();
const titleInput = document.getElementById("title");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (titleInput.value)
        manager.addTodo(titleInput.value);
    titleInput.value = "";
});
