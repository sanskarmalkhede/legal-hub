// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIlgySS4xTOCbIqG9kruUnCkwVQXtnNRM",
  authDomain: "legal-hub-69292.firebaseapp.com",
  projectId: "legal-hub-69292",
  storageBucket: "legal-hub-69292.appspot.com",
  messagingSenderId: "217724544333",
  appId: "1:217724544333:web:482f369bc62ad31a88c304",
  measurementId: "G-95GT5JY5S9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
