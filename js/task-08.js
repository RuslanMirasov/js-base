const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', login);

function login(event) {
   event.preventDefault();
   const formEmail = this.elements.email.value;
   const formPassword = this.elements.password.value;
   if (!formEmail || !formPassword) {
      alert('Всі поля повинні бути заповнені');
      return;
   }
   const formData = { email: formEmail, password: formPassword };
   console.log(formData);
   this.reset();
}
