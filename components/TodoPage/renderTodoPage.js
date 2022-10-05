import renderTodoForm from "../todoForm/renderTodoForm.js";
import { app, auth, database } from "../../firebaseConfig.js";
import {
  ref,
  onValue,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

const renderH2 = () => {
  const h2 = document.createElement("h2");
  h2.textContent = "Add, remove and edit your todos";
  return h2;
};

const appendElements = (rootEl, elsToAppend) => {
  elsToAppend.forEach((el) => rootEl.appendChild(el));
};

export default function () {
  const contentContainer = document.querySelector(".content");

  const todoRef = ref(database, "todos/" + auth.currentUser.uid);
  const todoFormHandler = (event) => {
    event.preventDefault();
    const todoText = document.getElementById("todo-input").value;
    const category = [...document.getElementsByName("category")].find(
      (input) => input.checked
    ).value;
    push(todoRef, {
      todoText,
      category,
    })
      .then(() => console.log("Pushed the data successfully"))
      .catch(() => console.log("Failed to push the data"));
  };
  onValue(todoRef, (snapshot) => {
    const data = snapshot.val();

    if (!data) {
      // 1.
      contentContainer.innerHTML = "";

      // 2.
      const h2 = renderH2();
      // 3.
      contentContainer.appendChild(h2);

      // 4.
      const todoForm = renderTodoForm();

      // 5.
      contentContainer.appendChild(todoForm);

      // 6. Podepnij event listener fo todo forma (event submit)
      todoForm.addEventListener("submit", todoFormHandler);
    } else {
      console.log(data);
      // 1. Wyciągnij same obiekty todo z obiektu data (Object.values()) i zapisz do zmiennej todos
      const todos = Object.values(data);

      // 2. Stwórz element <h2>, textContent "Add, remove and edit your todos"
      const h2 = renderH2();

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
        appendElements(div, [span, editButton, removeButton]);

        // 10. Do li (pkt 4) podepnij diva (pkt 5)
        li.appendChild(div);

        // 11. Z metody map zwróc li (return)
        return li;
      });

      // 12. console.log(listItems)
      console.log(listItems);

      // 1. Stwórz element <ul>
      const ul = document.createElement("ul");
      // 2. Na zmiennej listItems wywołaj metode forEach. W s®odku forEacha podpinaj elementy do listy ul (pkt 1)
      listItems.forEach((el) => ul.appendChild(el));
      // 3. Wyczyść contentContainer
      contentContainer.innerHTML = "";
      // 4. Do content containera podepnij h2, todoForm (cC.apc(renderTodoForm())), ul (pkt 1)
      appendElements(contentContainer, [h2, renderTodoForm(), ul]);
      // 1. Wybierz todoForm przez getElementById, id "todo-form"
      const todoForm = document.getElementById("todo-form");
      // 2. Na todoForm (pkt 1) nakładacie event listener na submit (będzie to 1:1 ten sam EL co wyżej)
      todoForm.addEventListener("submit", todoFormHandler);
      // 3. Zrób refactor (przeanalizuj, uporządkuj, skróć i ulepsz kod) w pliku renderTodoPage.js

      // EDIT BUTTON
      // 1. Wybierz wszystkie edit buttony (getElementsByClassName, "edit-button") i zamień na zwykły array (zapisujecie do zmiennej)
      // 2. Na liście edit buttonów (pkt 1) wywołaj metode forEach (parametry: el, i)
      // 3. Na el (parametr forEach) nakładacie event listener na click (w środku zwykła funkcja, nie strzałkowa!!!)
      // W event listenerze:
      // 4. Usuń z DOMu element który został kliknięty (w środku EL sprawdź co to this, sprawdź .remove())
      // 5. Wybierz diva (getElementById, `div-${i}`)
      // 6. Wywołaj funkcję renderTodoForm i zapisz wynik do zmiennej
      // 7. todoForm'owi (pkt 6) nadaj id `todo-form-${i}`
      // 8. Do diva (pkt 5) podepnij todoForm (pkt 6)
      // 9. Na todoForm (pkt 6) nadaj event listener (submit)
      // W EL:
      // 10. Ściągnij todoText (this, childNodes)
      // 11. Ściągnij kategorię (getElementsByTagName, można wywołać na this)
      // 12. Stwórz obiekt updates (const updates = {})
      // 13. Do obiektu updates wrzuć właśność "todos/*uid usera*/*id todosa*": { category, todoText }
      // 14. Wywołaj funkcję update z FB
      // const editButtons = [...document.getElementsByClassName("edit-button")];
      // console.log(editButtons);
      // console.log(Object.keys(data));

      const editButtons = [...document.getElementsByClassName("edit-button")];
      editButtons.forEach((el, i) => {
        el.addEventListener("click", function () {
          this.remove();
          const div = document.getElementById(`div-${i}`);
          const todoForm = renderTodoForm();
          todoForm.setAttribute("id", `todo-form-${i}`);
          div.appendChild(todoForm);
          todoForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const todoText = this.childNodes[0].value;
            console.log(todoText);
            const category = [...this.getElementsByTagName("input")]
              .slice(1, 5)
              .find((input) => input.checked).value;
            console.log(category);
            const updates = {};
            updates[`todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`] = {
              category,
              todoText,
            };
            update(ref(database), updates);
          });
        });
      });

      // 1. Wybranie remove buttonów (analogicznie do edit buttonow)
      // 2. Na liście z pkt 1 wywołaj metode forEach (el, i)
      // W forEach:
      // 3. Na el (parametr forEach'a) nakładacie EL na click
      // W środku EL:
      // 4. Usuwacie całe <li> do którego należał kliknięty remove button (this, parentElement * 2, .remove())
      // 5. Wywołanie metody remove (z firebase), usuń nią klikniętego todosa
      const removeButtons = [
        ...document.getElementsByClassName("remove-button"),
      ];
      removeButtons.forEach((el, i) => {
        el.addEventListener("click", function () {
          //this.parentElement.parentElement.remove();
          remove(
            ref(
              database,
              `todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`
            )
          );
        });
      });
    }
  });
}
