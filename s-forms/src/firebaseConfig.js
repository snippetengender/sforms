// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDkyRad7NOIp6Ji7lz6OXabu42jhsSNjg",
  authDomain: "react-oauth-app-fdf05.firebaseapp.com",
  projectId: "react-oauth-app-fdf05",
  storageBucket: "react-oauth-app-fdf05.firebasestorage.app",
  messagingSenderId: "781301048250",
  appId: "1:781301048250:web:0bd5c52cc4144d7faab383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider};