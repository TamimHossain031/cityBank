// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0bbMasZ3CP9sI4NJHLMbAMX7LD8402bI",
  authDomain: "first-506a2.firebaseapp.com",
  projectId: "first-506a2",
  storageBucket: "first-506a2.appspot.com",
  messagingSenderId: "374073409048",
  appId: "1:374073409048:web:edb22ba301d333fa1c8d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);