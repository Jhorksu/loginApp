
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDr2I6f25jERyv0SFDC_WdFAv2rJUsyAhM",
    authDomain: "loginapp-9d8db.firebaseapp.com",
    projectId: "loginapp-9d8db",
    storageBucket: "loginapp-9d8db.appspot.com",
    messagingSenderId: "218153017461",
    appId: "1:218153017461:web:ccf00af7b99a2716cd583c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)