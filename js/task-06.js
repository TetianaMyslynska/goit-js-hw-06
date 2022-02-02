const inputEl = document.querySelector("#validation-input");
const dataLength = document.querySelector('[data-length="6"]');

inputEl.addEventListener("blur", onInputBlur);

function addClassInput(a, r) {
  inputEl.classList.add(a);
  inputEl.classList.remove(r);
}
function onInputBlur({ target }) {
  const inputText = target.value;
  console.log(+target.dataset.length);
  if (inputText.length == +target.dataset.length) {
    addClassInput("valid", "invalid");
  } else {
    addClassInput("invalid", "valid");
  }
}
