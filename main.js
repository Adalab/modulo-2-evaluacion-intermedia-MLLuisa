"use strict";

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const text = document.querySelector('.js-text');
const numberText = document.querySelector('.js-numberText');

let randomNumber;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
randomNumber = getRandomNumber(100);
console.log(randomNumber); // para ver que numero aleatorio sale//

function compareNumber() {
    const inputValue = parseInt(input.value);
    if (inputValue < 1 || inputValue > 100) {
        text.innerHTML = "El numero tiene que estar entre 1 y 100";
    } else if (inputValue === randomNumber) {
        text.innerHTML = "Has ganado campeona!";
    } else if (inputValue > randomNumber) {
        text.innerHTML = "Demasiado alto";
    } else if (inputValue < randomNumber) {
        text.innerHTML = "Demasiado bajo";
    }
}

let attempt = 0;

function attemptNumber() {
    attempt += 1;
}

function handleClick(ev) {
    ev.preventDefault();
    compareNumber();
    attemptNumber();
    numberText.innerHTML = `Numero de intentos: ${attempt}`;
}

button.addEventListener('click' , handleClick);