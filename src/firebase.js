// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6dixKOay1oGHpj_uefazMCRP7rsxjMRc",
  authDomain: "findyourden-react.firebaseapp.com",
  projectId: "findyourden-react",
  storageBucket: "findyourden-react.appspot.com",
  messagingSenderId: "591364687473",
  appId: "1:591364687473:web:1dff81f37d6bf2e5aabdd0",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
