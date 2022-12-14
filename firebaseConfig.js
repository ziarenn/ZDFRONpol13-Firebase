import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

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
export const auth = getAuth(app);
export const database = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
