const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const { email, password } = loginForm.elements;
  if (!email.value || !password.value) {
    return alert("Всі поля повинні бути заповнені");
  }
  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);
  event.currentTarget.reset();
}
