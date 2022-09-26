import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyASOUa0UgdB15oXBujH8HqQzu8yESVodic",
  authDomain: "zdfronpol13fb.firebaseapp.com",
  databaseURL:
    "https://zdfronpol13fb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zdfronpol13fb",
  storageBucket: "zdfronpol13fb.appspot.com",
  messagingSenderId: "472243446734",
  appId: "1:472243446734:web:450443dbff18758fe7819f",
  measurementId: "G-GWF3DP9S0J",
};

// named export
export const app = initializeApp(firebaseConfig);

