// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRij115Isv8w9DorpSwIspMpFbQb6fS7g",
  authDomain: "torneo-9317a.firebaseapp.com",
  projectId: "torneo-9317a",
  storageBucket: "torneo-9317a.firebasestorage.app",
  messagingSenderId: "461501887397",
  appId: "1:461501887397:web:b4cfdf642a5b4e8b16ae4c",
  measurementId: "G-QE4VY5Z58Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);