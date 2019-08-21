import { without } from 'lodash';

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let button = document.getElementById("randomButton");
let body = document.getElementById("gradient");

setGradient();

function backgroundStyle() {
    return css.textContent = body.style.background + ";";
}

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    backgroundStyle();
}

// from stackoverflow
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGradient() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    backgroundStyle();
}

button.addEventListener("click", setRandomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


