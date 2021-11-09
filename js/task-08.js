"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please, fill in all the fields!");
  }
  const formElements = event.currentTarget.elements;

  const emailEl = formElements.email.value;
  const passwordEl = formElements.password.value;

  console.log(`Email: ${emailEl}, Password: ${passwordEl}`);

  event.currentTarget.reset();
}
