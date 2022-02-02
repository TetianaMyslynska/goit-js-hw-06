const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]'
);
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]'
);
const decrement = () => {
  counterValue.textContent--;
};
const increment = () => {
  counterValue.textContent++;
};
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
