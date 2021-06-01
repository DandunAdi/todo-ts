"use strict";
var todoLists = [
    { id: 1, name: "Run", isDone: false },
    { id: 2, name: "Badminton", isDone: false },
    { id: 3, name: "Eat", isDone: true },
];
var listContainer = document.querySelector("ul");
todoLists.forEach(function (todoItem) {
    var li = document.createElement("li");
    li.innerText = todoItem.name;
    if (todoItem.isDone)
        li.classList.add("done");
    listContainer.append(li);
});
