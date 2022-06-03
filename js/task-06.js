const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
    const countOfSymbols = Number(inputEl.dataset["length"]);
    if (inputEl.value.length === countOfSymbols) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
    else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
})