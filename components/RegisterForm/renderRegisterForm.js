import { auth } from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

export default function () {
  // 1.
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  // 2.
  const form = document.createElement("form");
  form.setAttribute("id", "register-form");

  // 3.
  const h2 = document.createElement("h2");
  h2.textContent = "Register";

  // 4.
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "email");
  inputEmail.setAttribute("id", "input-email-register");

  // 5.
  const firstPasswordInput = document.createElement("input");
  firstPasswordInput.setAttribute("type", "password");
  firstPasswordInput.setAttribute("placeholder", "password");
  firstPasswordInput.setAttribute("id", "first-input-password-register");

  // 6.
  const secondPasswordInput = document.createElement("input");
  secondPasswordInput.setAttribute("type", "password");
  secondPasswordInput.setAttribute("placeholder", "password");
  secondPasswordInput.setAttribute("id", "second-input-password-register");

  // 7.
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Register";

  // 8.
  form.appendChild(h2);
  form.appendChild(inputEmail);
  form.appendChild(firstPasswordInput);
  form.appendChild(secondPasswordInput);
  form.appendChild(submitButton);

  // 9.
  contentContainer.appendChild(form);

  // 10.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // 11.
    const email = inputEmail.value;
    const password1 = firstPasswordInput.value;
    const password2 = secondPasswordInput.value;
    // 12.
    console.log(email, password1, password2);

    if (
      password1 === password2 &&
      password1.length > 6 &&
      password2.length > 6
    ) {
      // właściwa rejestracja użytkownika
      createUserWithEmailAndPassword(auth, email, password1)
        .then((userCredentials) => console.log(userCredentials))
        .catch((err) => console.log(err));
    } else {
      console.log("hasla sie nie zgadzaja lub są za krótkie");
    }
  });
}
