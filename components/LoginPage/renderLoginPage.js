import renderLoginForm from "../LoginForm/renderLoginForm.js";
import renderRegisterForm from "../RegisterForm/renderRegisterForm.js";
import renderHomePage from "../HomePage/renderHomePage.js";
import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// W funkcji:

// 10. Na wywołanie signInWithEmailAndPassword nadajecie thena w którym będzie console.log(userCredentials) i wywołanie renderHomePage

export default function () {
  // 2.
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  // 3.
  const h2 = document.createElement("h2");
  h2.textContent = "Log in or sign up";

  // 4.
  const p = document.createElement("p");
  p.textContent =
    "Our authentication mechanism uses Firebase Auth and is 100% secure.";

  // 5.
  const label = document.createElement("label");
  label.textContent = "Sign in:";

  // 6.
  const loginForm = renderLoginForm();

  // 7.
  const registerButton = document.createElement("button");
  registerButton.setAttribute("id", "register-button");
  registerButton.textContent = "Register";

  // 8.
  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);
  contentContainer.appendChild(label);
  contentContainer.appendChild(loginForm);
  contentContainer.appendChild(registerButton);

  // 9.
  registerButton.addEventListener("click", renderRegisterForm);

  // 10.
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("input-email-login").value;
    const password = document.getElementById("input-password-login").value;

    // 11.
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("Logged in, user creds:", userCredentials);
        renderHomePage();
      })
      .catch((err) => {
        console.log("Failed to log in");
        console.error(err);
      });
  });
}
