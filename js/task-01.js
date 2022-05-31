const countCatagory = document.querySelectorAll(".item");
console.log(`Numder of categories:${countCatagory.length}`);

for (const item of countCatagory) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const countItems = item.querySelectorAll("li");
    console.log(`Elements: ${countItems.length}`);
}