const incrBtn = document.querySelector("[data-action='increment']");
const descrBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector("#value");
let counterValue = 0;
incrBtn.addEventListener("click", () => {
    counterValue += 1;
    valueNum.textContent = counterValue;
});

descrBtn.addEventListener("click", () => {
    valueNum.textContent = counterValue;
    counterValue -= 1;
});