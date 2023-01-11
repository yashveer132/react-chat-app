// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk1MxYCyqjRZtzZyGAXAZ_MJMinI0-p10",
  authDomain: "react-chat-app-d3b5c.firebaseapp.com",
  projectId: "react-chat-app-d3b5c",
  storageBucket: "react-chat-app-d3b5c.appspot.com",
  messagingSenderId: "696874414582",
  appId: "1:696874414582:web:807d679d179e30005697d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
