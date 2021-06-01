type Todo = {
  id: number;
  name: string;
  isDone: boolean;
};

const todoLists: Todo[] = [
  { id: 1, name: "Run", isDone: false },
  { id: 2, name: "Badminton", isDone: false },
  { id: 3, name: "Eat", isDone: true },
];

const listContainer = document.querySelector("ul")!;
todoLists.forEach((todoItem) => {
  const li = document.createElement("li");
  li.innerText = todoItem.name;
  if (todoItem.isDone) li.classList.add("done");
  listContainer.append(li);
});
