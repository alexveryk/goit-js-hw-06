function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const backgrounColor = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  let color = getRandomHexColor();
  backgrounColor.textContent = color;
  document.body.style.backgroundColor = color;
});
