const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('input["email"]');
const inputPasswordEl = document.querySelector('input["password"]');

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (login.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, 
  Password: ${password.value}`);
  event.currentTarget.reset();
}
