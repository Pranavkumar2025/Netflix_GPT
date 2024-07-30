// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtiT3V2w7ZFW5LNjY_N_EBbC2WqoM8w6k",
  authDomain: "netflixgpt-b1500.firebaseapp.com",
  projectId: "netflixgpt-b1500",
  storageBucket: "netflixgpt-b1500.appspot.com",
  messagingSenderId: "743279158082",
  appId: "1:743279158082:web:c1e40bb5ec5514a8245edb",
  measurementId: "G-9412C8N73T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);