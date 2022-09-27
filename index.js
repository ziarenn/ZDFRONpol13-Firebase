import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderRegisterForm from "./components/RegisterForm/renderRegisterForm.js";
// JEDYNY PLIK KTÓRY WYKONA SIĘ PRZY ZAŁADOWANIU STRONY

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
loginButton.addEventListener("click", renderRegisterForm);
