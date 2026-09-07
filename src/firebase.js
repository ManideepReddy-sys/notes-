// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP9nBfCxoX1Ye68nD_wpH93ZCsqk5uBk4",
  authDomain: "notes-app-d1ce3.firebaseapp.com",
  projectId: "notes-app-d1ce3",
  storageBucket: "notes-app-d1ce3.firebasestorage.app",
  messagingSenderId: "539941360880",
  appId: "1:539941360880:web:f962fcf87b6fb9aba5de35",
  measurementId: "G-QY6DRB47QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)