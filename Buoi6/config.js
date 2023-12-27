// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXY8lV7i6rZjN0dwT0IrguDNGaxztPUTk",
  authDomain: "hnhn-b9d45.firebaseapp.com",
  projectId: "hnhn-b9d45",
  storageBucket: "hnhn-b9d45.appspot.com",
  messagingSenderId: "785619813552",
  appId: "1:785619813552:web:294cbcdfa3f494c85fa775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);