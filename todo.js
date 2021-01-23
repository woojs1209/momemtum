const toDoContainer = document.querySelector(".js-todo-form"),
toDoBox = toDoContainer.querySelector("input"),
toDoList = document.querySelector(".js-todo-list");


const TODO_LIST = "todos"


function makeList(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const toDoValue = toDoBox.value;
    makeList(toDoValue);
    toDoBox.value = "";
}

function loadToDo() {
    localStorage.setItem(TODO_LIST, );
}

function init() {
    loadToDo();
    toDoContainer.addEventListener("submit", handleSubmit);
}

init();