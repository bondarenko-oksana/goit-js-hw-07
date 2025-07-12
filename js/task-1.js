//Task 1
const ulElem = document.querySelector('#categories');
const numberCategories = ulElem.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberCategories}`);

//Task 2
const items = document.querySelectorAll('#categories .item');

items.forEach(item => {
  const category = item.querySelector('h2').textContent;
  const elementsNumber = item.querySelectorAll('ul li').length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elementsNumber}`);
});