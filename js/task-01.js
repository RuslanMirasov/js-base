const categorieItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categorieItems.length}`);

categorieItems.forEach(category => {
   console.log(`Category: ${category.firstElementChild.textContent}`);
   console.log(`Elements: ${category.lastElementChild.children.length}`);
});
