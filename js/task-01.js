const categories = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categories.length}`);

const header = document.querySelectorAll("h2");

categories.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.dir(`Elements: ${elem.children[1].children.length}`);
});
