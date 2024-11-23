import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLeQRA0npTu0JMFtXkIkoe_17pRjzh4ko",
    authDomain: "msworld-login-auth.firebaseapp.com",
    projectId: "msworld-login-auth",
    storageBucket: "msworld-login-auth.appspot.com",
    messagingSenderId: "514983989548",
    appId: "1:514983989548:web:ec03fa60f3a15e5678dc89",
    measurementId: "G-5D8X4CE362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(() => {
        messageDiv.style.opacity = 0;
    }, 5000);
}

document.getElementById('rSubmit').addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const confirmPassword = document.getElementById('rConfirmPassword').value;

    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'signUpMessage');
        return;
    }

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = { email , password };

            const docRef = doc(db, "users", user.uid);
            return setDoc(docRef, userData);
        })
        .then(() => {
            showMessage('Account created successfully!', 'signUpMessage');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error Code: ${errorCode}, Message: ${errorMessage}`);
            if (errorCode === 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists!', 'signUpMessage');
            } else {
                showMessage(`Unable to create User: ${errorMessage}`, 'signUpMessage');
            }
        });
});