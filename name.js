const nameContainer = document.querySelector(".js-name-form"),
nameInput = nameContainer.querySelector("input"),
nameText = document.querySelector(".js-name-text");

const CURRENT_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(CURRENT_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentNameValue = nameInput.value;
    greeting(currentNameValue);
    saveName(currentNameValue);

}

function greeting(text) {
    nameContainer.classList.remove(SHOWING_CN);
    nameText.classList.add(SHOWING_CN);
    nameText.innerText = `Hello ${text}`;
}

function askName() {
    nameContainer.classList.add(SHOWING_CN);
    nameContainer.addEventListener("submit", handleSubmit);
}


function init() {
    const currentUser = localStorage.getItem(CURRENT_LS);
    if(currentUser === null) {
        askName();
    } else {
        greeting(currentUser);
    }
}

init();