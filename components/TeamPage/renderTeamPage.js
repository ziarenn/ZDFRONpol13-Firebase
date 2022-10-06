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

  // 1. Stwórz element <ul>, id "teams-todo-list"
  const ul = document.createElement("ul");
  ul.setAttribute("id", "teams-todo-list");
  // 2. Stwórz funkcję asynchroniczną readDocData
  const readDocData = async function () {
    // W readDocData:
    // 3. Stwórz zmienną querySnapshot i wywołaj w niej funkcję getDocs
    const querySnapshot = await getDocs(collection(firestore, "teams"));
    // Funkcja getDocs przyjmuje 1 argument, jest to referencja do grupy dokumentów (kolekcji)
    // Aby uzyskać referencję do interesującej nas kolekcji musimy użyć funkcji collection, przyjmuje ona 2 argumenty: obiekt ref do firestore i nazwę kolekcji w stringu
    // 4. Na zmiennej querySnapshot wywołaj forEach'a.

    querySnapshot.forEach((el) => {
      // W FE:
      // 5. Stwórz zmienną docData i przypisz jej wywołanie funkcji data() na elemencie po którym aktualnie iterujesz (1 par z FE)
      const docData = el.data();
      // 6. Stwórz element <li>, textContent ma zawierać todoText i category, jedno i drugie znajdziesz w zmiennej docData (pkt 5)
      const li = document.createElement("li");
      li.textContent = `${docData.todoText} (${docData.category})`;
      // 7. Podepnij li (pkt 6) do ul (pkt 1)
      ul.appendChild(li);
      // KONIEC FE
    });
  };

  // 8. Wywołanie readDocData
  readDocData();
  // 9. Podepnij ul (pkt 1) do contentContainera.
  contentContainer.appendChild(ul);
}
