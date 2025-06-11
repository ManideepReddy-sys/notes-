// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Y1vG2NU7sBPOLE4EYNypKHarZiQMAYc",
  authDomain: "todo-app-10fd1.firebaseapp.com",
  projectId: "todo-app-10fd1",
  storageBucket: "todo-app-10fd1.firebasestorage.app",
  messagingSenderId: "996089445297",
  appId: "1:996089445297:web:3e5af830a73ac1293d9b90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)