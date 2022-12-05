const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

decrement.addEventListener("click", () => {
  counter.decrement();
  value.textContent = counter.counterValue;
});

increment.addEventListener("click", () => {
  counter.increment();
  value.textContent = counter.counterValue;
});
