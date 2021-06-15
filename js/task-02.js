const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ref = document.querySelector("#ingredients");

const listItem = ingredients.map((li) => {
  const list = document.createElement("li");
  list.textContent = li;
  return list;
});

ref.append(...listItem);
console.log(ref);
