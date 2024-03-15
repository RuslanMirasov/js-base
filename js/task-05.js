const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', () => {
   if (!inputEl.value.trim()) {
      outputEl.textContent = 'Anonymous';
      return;
   }
   outputEl.textContent = inputEl.value.trim();
});
