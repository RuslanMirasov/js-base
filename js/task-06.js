const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', event => {
   const symbolCount = event.target.value.length;
   const symbolMax = inputEl.dataset.length;
   inputEl.classList.remove('invalid');
   inputEl.classList.remove('valid');
   if (symbolCount > 0) {
      if (symbolCount != symbolMax) {
         inputEl.classList.add('invalid');
         return;
      }
      inputEl.classList.add('valid');
   }
});
