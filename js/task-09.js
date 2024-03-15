function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const colorTitle = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');

colorChangeBtn.addEventListener('click', () => {
   const newColor = getRandomHexColor();
   colorTitle.textContent = newColor;
   document.body.style.backgroundColor = newColor;
});
