"use strict";

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onValidSimbolsInput);

function onValidSimbolsInput(event) {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
}
