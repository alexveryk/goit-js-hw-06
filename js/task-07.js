const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.dir(sizeControl.value);

sizeControl.addEventListener("input", fontSize);

function fontSize() {
  text.style.fontSize = sizeControl.value + "px";
}
