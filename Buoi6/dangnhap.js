import { auth } from "../Buoi6/config.js";
import { signInWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// lay the input gom email va password
// add event listener 
// signInWithEmailAndPassword 

const emailInput= document.getElementById('email')
const passwordInput= document.getElementById('password')
const loginButton= document.getElementById('loginButton')

const xulydangnhap= ()=>{
     // lay value nguoi dung nhap vao 
     const email = emailInput.value 
     const password= passwordInput.value 
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
     alert('Ok dang nhap thanh cong')
     window.location='/index.html'
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert(errorMessage)
     // ..
   });
}
loginButton.addEventListener('click', xulydangnhap)
