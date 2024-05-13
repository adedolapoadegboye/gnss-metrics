// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const Firebase = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpLgg7AH-3cTkWO89ROQxIMjNHTrtgAMo",
    authDomain: "gnssmetrics.firebaseapp.com",
    projectId: "gnssmetrics",
    storageBucket: "gnssmetrics.appspot.com",
    messagingSenderId: "276017567622",
    appId: "1:276017567622:web:9a765fa6d7c0b6fbf97e07",
    measurementId: "G-1EW4FBNF71",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
};

export default Firebase;
