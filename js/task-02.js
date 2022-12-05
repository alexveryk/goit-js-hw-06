const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsItem = [];
const list = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  ingredientsItem.push(li);
});

list.append(...ingredientsItem);
