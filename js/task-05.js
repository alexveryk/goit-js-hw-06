const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  event.currentTarget.value
    ? (nameOutput.textContent = event.currentTarget.value)
    : (nameOutput.textContent = "Anonymous");
});
