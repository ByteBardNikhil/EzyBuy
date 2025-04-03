// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD87X8LNnbyhjjpmMbnQWQI0XWlVgpgCxQ",
  authDomain: "ezybuy-fe895.firebaseapp.com",
  projectId: "ezybuy-fe895",
  storageBucket: "ezybuy-fe895.firebasestorage.app",
  messagingSenderId: "180372986313",
  appId: "1:180372986313:web:efdcc3e2ce21963945f018",
  measurementId: "G-Y5F1ZTY2RX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const collectionRef = collection(db, "ezybuy");
export { db, auth, analytics, collectionRef };
