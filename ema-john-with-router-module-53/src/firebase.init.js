// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB27mFSz1RAYC-l8o0mEyxu1PiPuZqJO4w",
    authDomain: "emazon-39d1e.firebaseapp.com",
    projectId: "emazon-39d1e",
    storageBucket: "emazon-39d1e.appspot.com",
    messagingSenderId: "437403813468",
    appId: "1:437403813468:web:9f93ffe16b1a1ed76b8899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth