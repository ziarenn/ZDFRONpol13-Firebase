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
    console.log(data);
    // 1. Wyciągnij same obiekty todo z obiektu data (Object.values()) i zapisz do zmiennej todos
    const todos = Object.values(data);

    // 2. Stwórz element <h2>, textContent "Add, remove and edit your todos"
    const h2 = document.createElement("h2");
    h2.textContent = "Add, remove and edit your todos";

    // 3. Stwórz zmienną listItems. Wartość zmiennej listItems to wywołanie metody .map((el, i) => { ... }) na liście todos (pkt 1).
    const listItems = todos.map((el, i) => {
      // W metodzie map:
      // 4. Stwórz element <li>, id `li-${i}`
      const li = document.createElement("li");
      li.setAttribute("id", `li-${i}`);

      // 5. Stwórz element <div>, id `div-${i}`
      const div = document.createElement("div");
      div.setAttribute("id", `div-${i}`);

      // 6. Stwórz element <span>, textContent ma zawierać todoText i category
      const span = document.createElement("span");
      span.textContent = `${el.todoText} (${el.category})`;

      // 7. Stwórz element <button>, id `edit-button-${i}`, class "edit-button", textContent "Edit"
      const editButton = document.createElement("button");
      editButton.setAttribute("id", `edit-button-${i}`);
      editButton.setAttribute("class", "edit-button");
      //  editButton.classList.add('edit-button')
      editButton.textContent = "Edit";

      // 8. Stwórz element <button>, id `remove-button-${i}`, class "remove-button", textContent "Remove"
      const removeButton = document.createElement("button");
      removeButton.setAttribute("id", `remove-button-${i}`);
      removeButton.setAttribute("class", "remove-button");
      removeButton.textContent = "Remove";

      // 9. Do diva (pkt 5) podepnij span (pkt 6), edit button (pkt 7), remove button (pkt 8)
      div.appendChild(span);
      div.appendChild(editButton);
      div.appendChild(removeButton);

      // 10. Do li (pkt 4) podepnij diva (pkt 5)
      li.appendChild(div);

      // 11. Z metody map zwróc li (return)
      return li;
    });

    // 12. console.log(listItems)
    console.log(listItems);
  });
}
