const categoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesEl.length} категории`);

const quantityEl = document.querySelectorAll("li.item");
quantityEl.forEach((el) =>
  console.log(
    "Категория:",
    el.firstElementChild.textContent,
    "Количество елементов:",
    el.lastElementChild.children.length
  )
);
