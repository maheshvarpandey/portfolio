// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkzYC84CILhupclsVuOlOMYDkd_IqG428",
  authDomain: "dev-maheshvar.firebaseapp.com",
  projectId: "dev-maheshvar",
  storageBucket: "dev-maheshvar.appspot.com",
  messagingSenderId: "494318720391",
  appId: "1:494318720391:web:7d48148be413bb2c5faf22",
  measurementId: "G-LG2FNQ5S7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);