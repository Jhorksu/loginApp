import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'


const registerForm =  document.querySelector('#register-form')


registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = registerForm['register-email'].value
    const password = registerForm['register-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        // close the register modal
        const registerForm =  document.querySelector('#register-form')
        const modal = bootstrap.Modal.getInstance(registerModal)
        modal.hide() 

        showMessage("Welcome " + userCredentials.user.email, "success")
    } 
    
    catch (error) {
        console.log(error.message)
        console.log(error.code)

        if(error.code === 'auth/invalid-email'){
            showMessage('invalid email', 'error')
        } else if (error.code === 'auth/weak-password') {
            showMessage('Password is too weak', 'error')
        } else if (error.code === 'auth/email-already-in-use'){
            showMessage('Email already in use', 'error')
        } else if (error.code) {
            showMessage('Something went wrong', 'error')
        }

        

       
    } 
    
})

