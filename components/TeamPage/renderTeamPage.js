import renderTodoForm from "../todoForm/renderTodoForm.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firestore } from "../../firebaseConfig.js";

export default function () {
  // 1. Wybierz i wyczyść content container
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  // 2. Stwórz element <h2>, textContent "Your team's todos", podepnij h2 do content containera
  const h2 = document.createElement("h2");
  h2.textContent = "Your team's todos";
  contentContainer.appendChild(h2);
  // 3. Wywołaj funkcje renderTodoForm, wynik zapisz w zmiennej
  const todoForm = renderTodoForm();
  // 4. Podepnij todo form do content container
  contentContainer.appendChild(todoForm);
  // 5. Na todo form nałóż event listener.
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // W EL:
    // 6. Ściągnij wartość z todo inputu (todo text)
    const todoText = document.getElementById("todo-input").value;

    // 7. Ściągnij wartość z radio inputów (kategorię)
    const category = [...document.getElementsByName("category")].find(
      (input) => input.checked
    ).value;

    // DODAWANIE DANYCH DO FIRESTORE
    const addDocData = async function (todoText, category) {
      try {
        // Wywołanie funkcji addDoc, addDoc służy do dodawanie (tworzenia) nowych dokumentów w podanej kolekcji, w przypadku powodzenia, zwraca informacje na temat nowo dodanego dokumentu
        const docInfo = await addDoc(collection(firestore, "teams"), {
          todoText,
          category,
        });
        console.log(docInfo);
      } catch (err) {
        console.error(err.message);
      }
    };
    addDocData(todoText, category);
  });
}
