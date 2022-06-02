const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = option;


  return ingredientItem;
});
console.log(ingredients);
ingredientsEl.append(...elements);

// const ingredientItem = ingredients.forEach(function (ingredients) {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.classList.add('item');
//   ingredientItem.textContent = ingredients;

//   const ingredientsList = document.querySelector('.ul');
  
//   ingredientsList.append(...ingredientItem);
//   // ingredientItem.insertAdjacentHTML("beforeend", ingredientItem);
//   console.log(ingredientsList);

//   console.log(ingredients);
// });

