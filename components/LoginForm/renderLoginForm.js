export default function () {
  // 1.
  const form = document.createElement("form");
  form.setAttribute("id", "login-form");

  // 2.
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "input-email-login");
  inputEmail.setAttribute("placeholder", "email");

  // 3.
  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "input-password-login");
  inputPassword.setAttribute("placeholder", "password");

  // 4.
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Sign in";

  // 5.
  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(submitButton);

  // 6.
  return form;
}
