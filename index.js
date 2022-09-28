import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderLoginPage from "./components/LoginPage/renderLoginPage.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { auth } from "./firebaseConfig.js";
// JEDYNY PLIK KTÓRY WYKONA SIĘ PRZY ZAŁADOWANIU STRONY

// reagowanie na zalogowanie i wylogowanie
onAuthStateChanged(auth, (user)=> {
    if (user) {
        // ...
    } else {
        // ...
    }
})

// selecting the content container
const contentContainer = document.querySelector(".content");

// selecting all navbar buttons
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// rendering the home page on inital page load
renderHomePage();

// rendering the home page on home button click

// home button listener
homeButton.addEventListener("click", renderHomePage);

// login button listener
loginButton.addEventListener("click", renderLoginPage);
