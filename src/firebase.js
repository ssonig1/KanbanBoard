// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGlowRanugRmaxXm0nVmJVyLBzpYHeE5s",
  authDomain: "react-app-aeb5e.firebaseapp.com",
  projectId: "react-app-aeb5e",
  storageBucket: "react-app-aeb5e.appspot.com",
  messagingSenderId: "460029650429",
  appId: "1:460029650429:web:e8e8cd20fbc53500ff2594",
  measurementId: "G-SYQFZM385X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);