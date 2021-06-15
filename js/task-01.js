const idCat = document.querySelector("ul");

const cat = idCat.children;

console.log(`В списке ${cat.length} категории.`);

[...cat].forEach((li) => {
  const title = li.querySelector("h2");
  console.log(`Категория: ${title.textContent}`);
  const list = li.querySelector("ul");
  console.log(`Количество элементов: ${list.children.length}`);
});
