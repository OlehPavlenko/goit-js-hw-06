const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientItem = ingredients.forEach(function (ingredients) {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredients;

  const ingredientsList = document.querySelector('#ingredients');
  ingredientsList.appendChild(ingredientItem);
  console.log(ingredientsList);

  console.log(ingredients);
});

