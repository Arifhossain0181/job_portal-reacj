// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXBdgtg0qF9TIxp6XqLcG48dJjkKVERBk",
  authDomain: "job-portal-1e822.firebaseapp.com",
  projectId: "job-portal-1e822",
  storageBucket: "job-portal-1e822.firebasestorage.app",
  messagingSenderId: "983034118780",
  appId: "1:983034118780:web:848e701e0f9aae135b3ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;