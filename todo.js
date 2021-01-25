const doContainer = document.querySelector(".js-todo-form"),
    doInput = doContainer.querySelector("input"),
    doList = document.querySelector(".js-todo-list");


const TODOS = "todos";
let TODO_LIST = [];

function deleteBtn(event) {
    const btn = event.target;
    const delLt = btn.parentNode;
    doList.removeChild(delLt);
    const cleanList = TODO_LIST.filter(function(toDos) {
        return toDos.id !== parseInt(delLt.id);
    });
    TODO_LIST = cleanList;
    saveList();
}

function saveList() {
    localStorage.setItem(TODOS, JSON.stringify(TODO_LIST));
}

function printList(text) {
    const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span"),
    newId = TODO_LIST.length + 1;
    
    delBtn.innerHTML = "X";
    span.innerText = text;

    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteBtn);
    li.appendChild(span);
    li.id = newId;
    doList.appendChild(li);
    

    const doObj = {
        text,
        id : newId
    }
    TODO_LIST.push(doObj);
    saveList();
}

function handleSubmit(event) {
    event.preventDefault()
    const currentValue = doInput.value;
    printList(currentValue);
    doInput.value = "";
}


function loadToDo() {
    const TODOS_KEY = localStorage.getItem(TODOS);
    if(TODOS_KEY !== null) {
        const parsedToDos = JSON.parse(TODOS_KEY);
        parsedToDos.forEach(function(todo) {
            printList(todo.text);
        })
    }
}


function init(){
    loadToDo();
    doContainer.addEventListener("submit", handleSubmit);
}

init();