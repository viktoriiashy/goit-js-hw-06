"use strict";

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", onValidSimbolsInput);

// function onValidSimbolsInput(event) {
// if (event.currentTarget.value.length === Number(input.dataset.length)) {
//   event.currentTarget.classList.add("valid");
//   } else {
//     event.currentTarget.classList.add("invalid");
//   }
// }
// .........................................................

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onValidSimbolsInput);

function onValidSimbolsInput(event) {
  function classAddRemove(classAdd, classRemove) {
    event.currentTarget.classList.add(classAdd);
    event.currentTarget.classList.remove(classRemove);
  }
  classAddRemove("invalid");
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    classAddRemove("valid", "invalid");
  }
}
