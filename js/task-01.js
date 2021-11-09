"use strict";

const categoriesNumberRef = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesNumberRef}`);

const categoriesNamesRef = document.querySelectorAll("li.item");
categoriesNamesRef.forEach((name) => {
  const title = name.querySelector("h2").textContent;
  const itemLength = name.querySelectorAll("li").length;
  console.log(`Category: ${title} ${itemLength}`);
});
