// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFUYuRU1F5e__Exk7GPd-KtMLs3KHYLFk",
  authDomain: "club-bajonero.firebaseapp.com",
  projectId: "club-bajonero",
  storageBucket: "club-bajonero.appspot.com",
  messagingSenderId: "403509651588",
  appId: "1:403509651588:web:28119d6892bc6a1f573ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)