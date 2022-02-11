// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYpqGkYCAiYcF5t-TtXNFHCF9Il42q5ZA",
  authDomain: "blog-app-3e995.firebaseapp.com",
  projectId: "blog-app-3e995",
  storageBucket: "blog-app-3e995.appspot.com",
  messagingSenderId: "899810879414",
  appId: "1:899810879414:web:eb17ed1fd2ca5acbb60317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();