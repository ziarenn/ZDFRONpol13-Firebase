// 1. Importy: renderLoginForm, renderRegisterForm, renderHomePage, auth (z firebaseConfig), signInWithEmailAndPassword (z "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";)
// W funkcji:
// 2. Wybierz sekcję content (querySelector) i wyczyść ją (innerHTML)
// 3. Stwórz element <h2>, textContent 'Log in or sign up'
// 4. Stwórz element <p>, textContent "Our authentication mechanism uses Firebase Auth and is 100% secure."
// 4. Stwórz element <label>, textContent 'Log in:'
// 5. Wywołaj funkcję renderLoginForm i zapisz wynik wywołania do zmiennej (const loginForm = renderLoginForm())
// 6. Stwórz element <button>, nadaj mu id 'register-button' i textContent "Register"
// 7. Podepnij elementy do sekcji content w kolejności:
// - h2
// - p
// - label
// - login form
// - register button
// 8. Na register button (pkt 6) nadaj event listener na click, w środku event listenera czyść sekcje content (innerHTML) i wywołaj funckję renderRegisterForm
// 9. Na login form (pkt 5) nadaj event listener na submit, w środku event listenera: event.preventDefault(), ściągacie wartości z inputów z formularza logowania (document.getElementById('id inputa z renderLoginForm)), po ściągnięciu wartości wywołujecie signInWithEmailAndPassword (spójrz w docsy).
// 10. Na wywołanie signInWithEmailAndPassword nadajecie thena w którym będzie console.log(userCredentials) i wywołanie renderHomePage

export default function () {}
