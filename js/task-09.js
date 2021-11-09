function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
btnChangeColor.addEventListener("click", onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  spanRef.textContent = color;
}
