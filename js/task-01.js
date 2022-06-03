const categoriesList = document.querySelector(`#categories`);
const numberOfCategories = categoriesList.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

[...categoriesList.children].forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const countOfCategoryElevents = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${countOfCategoryElevents}`);
});