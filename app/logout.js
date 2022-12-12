import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"


const logout = document.querySelector('#logout')

logout.addEventListener('click', async function(){
    await signOut(auth)
    console.log('user signed out')
    showMessage("logged out", "success")
})
