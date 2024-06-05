const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const sexoInput = document.querySelector("#sexo");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //verifica se o nome esta vazio
  if (nameInput.value === "") {
    alert("Por Favor, preencha o seu nome");
    return;
  }
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por Favor, digite seu email");
    return;
  }
  form.submit();
});

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}
