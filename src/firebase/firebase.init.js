// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3BWNldvbq15bmtP0NOB4IexJljJpIEUE",
  authDomain: "assignment-10-8a9e3.firebaseapp.com",
  projectId: "assignment-10-8a9e3",
  storageBucket: "assignment-10-8a9e3.firebasestorage.app",
  messagingSenderId: "180840220311",
  appId: "1:180840220311:web:ecb6cfea0f881b42b6cbd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);