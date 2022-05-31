const inputRange = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const fontSize = inputRange.addEventListener("input",(event) => {
    textEl.style.fontSize = event.currentTarget.value + "px";
    
});