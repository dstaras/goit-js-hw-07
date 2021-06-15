const ref = {
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  spanValue: document.querySelector("#value"),
};

let counterValue = +ref.spanValue.textContent;

ref.btnDecrement.addEventListener("click", (event) => {
  counterValue -= 1;
  ref.spanValue.textContent = counterValue;
  console.log(counterValue);
});

ref.btnIncrement.addEventListener("click", (event) => {
  counterValue += 1;
  ref.spanValue.textContent = counterValue;
  console.log(counterValue);
});
