const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.getElementById('ingredients');
const ingredientsElements = ingredients.map(ingredient => {
   const element = document.createElement('li');
   element.textContent = ingredient;
   element.classList.add('item');
   return element;
});

ingredientsList.append(...ingredientsElements);
