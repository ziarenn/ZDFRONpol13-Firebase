export default function () {
  // 1.
  const form = document.createElement("form");
  form.setAttribute("id", "todo-form");

  // 2.
  const input = document.createElement("input");
  input.setAttribute("id", "todo-input");

  // 3.
  const fieldset = document.createElement("fieldset");
  fieldset.setAttribute("id", "todo-fieldset");

  // 4.
  const legend = document.createElement("legend");
  legend.setAttribute("id", "todo-legend");
  legend.textContent = "Select a category";
  fieldset.appendChild(legend);
  // 5.
  const categories = ["work", "life", "sport", "education"];
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.setAttribute("id", `div-${category}`);
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("id", `radio-${category}`);
    radioInput.setAttribute("name", "category");
    radioInput.setAttribute("value", category);
    const label = document.createElement("label");
    label.setAttribute("for", `radio-${category}`);
    label.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    div.appendChild(radioInput);
    div.appendChild(label);
    fieldset.appendChild(div);
  });

  // 7.
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "todo-form-submit-button");
  submitButton.textContent = "Add todo";

  // 8.
  form.appendChild(input);
  form.appendChild(fieldset);
  form.appendChild(submitButton);

  // 9.
  return form;
}
/* <div id="div-work">
    <input type="radio" id="radio-work" name="category" value="work"/>
    <label for="radio-work">Work</label>
</div>
<div id="div-life">
    <input type="radio" id="radio-life" name="category" value="life"/>
    <label for="radio-life">Life</label>
</div> */
