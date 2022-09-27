// W funkcji poniżej:
// 1. Wybranie i czyszczenie sekcji content (klasa 'content', querySelector, innerHTML = '')
// 2. Stwórz element <form> i nadaj mu id 'register-form'
// 3. Stwórz element <h2> i nadaj mu textContent 'Register'
// 4. Stwórz element <input>, nadaj mu type 'email', placeholder 'email', id 'input-email-register'
// 5. Stwórz element <input>, nadaj mu type 'password', placeholder 'password', id 'first-input-password-register'
// 6. Stwórz element <input>, nadaj mu type 'password', placeholder 'repeat password', id 'second-input-password-register'
// 7. Stwórz element <button>, nadaj mu type 'submit' i textContent 'Register'
// 8. Podepnij wszystkie elementy do elementu form (pkt 2) w tej kolejności:
// - h2
// - input email
// - input pass 1
// - input pass 2
// - submit button
// 9. Element form podepnij do sekcji content
// 10. Na formularz (pkt 2) nałóż event listener (będziemy reagować na submit, pamiętaj o event.preventDefault())
// 11. W event listenerze:
// - zbieracie zawartość wszystkich inputów do osobnych zmiennych (.value !!!)
// 12. Sprawdź console.logiem czy zbieranie wartości działa
// 13. Zaimportuj funkcję do index.js i podepnij ją pod loginButton
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
  });
}
