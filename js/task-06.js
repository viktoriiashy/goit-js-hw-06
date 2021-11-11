"use strict";

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", onValidSimbolsInput);

// function onValidSimbolsInput(event) {
//   function classAddRemove(classAdd, classRemove) {
//     event.currentTarget.classList.add(classAdd);
//     event.currentTarget.classList.remove(classRemove);
//   }
//   classAddRemove("invalid");
//   if (event.currentTarget.value.length === Number(input.dataset.length)) {
//     classAddRemove("valid", "invalid");
//   }
// }
// .......................................................
const input = document.querySelector("#validation-input");

input.addEventListener("blur", onValidSimbolsInput);

function onValidSimbolsInput(event) {
  classAddRemove("invalid");
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    classAddRemove("valid", "invalid");
  }
}
function classAddRemove(classAdd, classRemove) {
  event.currentTarget.classList.add(classAdd);
  event.currentTarget.classList.remove(classRemove);
}
