function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const boxesEl = document.getElementById('boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const elementsArrey = [];
let divWidth = 20;
let divHeight = 20;

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
   destroyBoxes();
   const inputNumber = document.getElementById('controls').firstElementChild.value;
   for (let i = 0; i < inputNumber; i += 1) {
      divWidth += 10;
      divHeight += 10;
      elementsArrey.push(`<div style="background-color:${getRandomHexColor()}; width:${divWidth}px; height:${divHeight}px;"></div>`);
   }
   const boxesHtml = elementsArrey.map(element => {
      return element;
   });
   boxesEl.insertAdjacentHTML('beforeEnd', boxesHtml.join(''));
}

function destroyBoxes() {
   elementsArrey.length = 0;
   divWidth = 20;
   divHeight = 20;
   boxesEl.innerHTML = '';
}
