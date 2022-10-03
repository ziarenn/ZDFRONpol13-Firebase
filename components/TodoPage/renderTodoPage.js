import renderTodoForm from "../todoForm/renderTodoForm.js";
import { auth, database } from "../../firebaseConfig.js";
import {
  ref,
  onValue,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

export default function () {
  const contentContainer = document.querySelector(".content");

  const todoRef = ref(database, "todos/" + auth.currentUser.uid);
  onValue(todoRef, (snapshot) => {
    const data = snapshot.val();

    if (!data) {
      // 1.
      contentContainer.innerHTML = "";

      // 2.
      const h2 = document.createElement("h2");
      h2.textContent = "Add, remove and edit your todos";

      // 3.
      contentContainer.appendChild(h2);

      // 4.
      const todoForm = renderTodoForm();

      // 5.
      contentContainer.appendChild(todoForm);

      // 6. Podepnij event listener fo todo forma (event submit)
      todoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // 7. Wybranie todo inputa (id: "todo-input") i ściągnięcie z niego wartości (.value)
        const todoText = document.getElementById("todo-input").value;

        // 3. Użyj funkcji push (z firebase'a) do wrzucenia danych do bazy.
        // Zamiast funkcji ref() użyj zmiennej todoRef (wyżej w tym pliku)
        // 4. Na funkcji push dodaj thena z console.log'iem "Pushed the data" i catcha z console.log'iem "failed to push"
        // push(todoRef, {
        //  todoText,
        // category,
        //}) tutaj then i catch

        // 1. Ściągnij odpowiednią kategorie z formularza (z radio inputów), wszystkie radio inputy mają atrybut name "category", istnieje selektor do wybierania elementów po atrybucie name. Zamień nodeListe na zwykły array. Do znalezienia inputa który jest zaznaczony użyj metody .find(). Input zaznaczony będzie miał własność checked, po niej szukaj właściwego inputu.
        const category = [...document.getElementsByName("category")].find(
          (input) => input.checked
        ).value;
        push(todoRef, {
          todoText,
          category,
        })
          .then(() => console.log("Pushed the data successfully"))
          .catch(() => console.log("Failed to push the data"));
      });
    }
  });
}
