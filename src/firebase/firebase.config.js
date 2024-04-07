// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW6G0rPq5YlcpThelS6lbjfNw7VYm8QdY",
  authDomain: "auth-relation-b9b33.firebaseapp.com",
  projectId: "auth-relation-b9b33",
  storageBucket: "auth-relation-b9b33.appspot.com",
  messagingSenderId: "678700829314",
  appId: "1:678700829314:web:098465b832cd578d73829b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
