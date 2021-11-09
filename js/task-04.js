"use strict";
let counterValue = 0;
const buttonDecrement = document.querySelector("button[data-action=decrement]"); //-1
const buttonIncrement = document.querySelector("button[data-action=increment]"); //+1
let valueRef = document.querySelector("#value");

const onDecrementClick = () => {
  counterValue -= 1;
  valueRef.textContent = `${counterValue}`;
};
const onIncrementClick = () => {
  counterValue += 1;
  valueRef.textContent = `${counterValue}`;
};
buttonDecrement.addEventListener("click", onDecrementClick);
buttonIncrement.addEventListener("click", onIncrementClick);
