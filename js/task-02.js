"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liRefs = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  liRef.classList.add("item");
  return liRef;
});

const listRef = document.querySelector("ul#ingredients");
listRef.append(...liRefs);

// console.log(listRef);
// console.log(liRefs);
