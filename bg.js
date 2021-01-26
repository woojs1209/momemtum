const body = document.querySelector("body");

const IMG_NUMBER = 5;

function getNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintImg(number) {
    const image = new Image();
    image.src = `image/${number+1}.jpg`;
    body.append(image);
    // add img tag in body
    image.classList.add("bgImg");
}

function init() {
    const randomNumber = getNumber();
    paintImg(randomNumber);
}

init();