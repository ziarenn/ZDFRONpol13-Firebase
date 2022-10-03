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
      });
    }
  });
}
