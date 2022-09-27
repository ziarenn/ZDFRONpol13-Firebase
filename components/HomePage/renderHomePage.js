export default function () {
  // 1.
  const contentContainer = document.querySelector(".content");

  // 2.
  contentContainer.innerHTML = "";

  // 3.
  const h2 = document.createElement("h2");
  h2.textContent = "Welcome!";

  //4.
  const p = document.createElement("p");
  p.textContent =
    "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.";

  // 5.
  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);
}
