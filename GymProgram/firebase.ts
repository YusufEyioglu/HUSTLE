// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN64QWTPpDRTExRVY95IDfGD0BePojG7g",
  authDomain: "gymprogram-79f35.firebaseapp.com",
  projectId: "gymprogram-79f35",
  storageBucket: "gymprogram-79f35.appspot.com",
  messagingSenderId: "98133321676",
  appId: "1:98133321676:web:f6049d6f8024da6fdc1f69",
  measurementId: "G-N87EK6VFET"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAnalytics(FIREBASE_APP);