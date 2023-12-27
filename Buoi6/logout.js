import { auth } from "../Buoi6/config.js";
import {signOut} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const btnLogout = document.getElementById('logout');

const handleLogout=()=>{
    signOut(auth).then(() => {
        window.location='./dangnhap.html'
      }).catch((error) => {
        // An error happened.
        alert(error.message)
      });
}
btnLogout.addEventListener('click',handleLogout)