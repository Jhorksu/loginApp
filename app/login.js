import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    try {
        const userCredentials = await signInWithEmailAndPassword (auth, email, password) 
        console.log(userCredentials)

        const loginModal =  document.querySelector('#loginModal')
        const modal = bootstrap.Modal.getInstance(loginModal)
        modal.hide() 

        showMessage("Hello " + userCredentials.user.email, "success")
    } 
    
    catch(error) { 
        console.log(error.code)
        if(error.code === "auth/user-not-found"){
            showMessage("User not found", "red")
        } else if (error.code === "auth/wrong-password") {
            showMessage("Wrong Password", "red")
        } else if (error.code){
            showMessage("Something went wrong", "red")
        }

       
    }

    
})