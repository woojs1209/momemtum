const clock_title = document.querySelector(".js-clock"),
clock = clock_title.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const sec = date.getSeconds();
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}`:mins}:${sec < 10 ? `0${sec}`:sec}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();