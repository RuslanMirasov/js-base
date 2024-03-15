const sizeController = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeController.addEventListener('input', event => {
   textEl.style.fontSize = `${event.target.value}px`;
});
