// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqrLnTyr51fAmCnnAasxDKNGk1UkVr4w",
  authDomain: "flavorfusion-65382.firebaseapp.com",
  projectId: "flavorfusion-65382",
  storageBucket: "flavorfusion-65382.appspot.com",
  messagingSenderId: "592044537070",
  appId: "1:592044537070:web:1a97295a8d5c297203afff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
