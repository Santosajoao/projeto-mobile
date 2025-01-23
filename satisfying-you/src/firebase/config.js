// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_ljDBMRLzyQNR675urf0hZHI8CX2azlw",
  authDomain: "satisfying-youu.firebaseapp.com",
  projectId: "satisfying-youu",
  storageBucket: "satisfying-youu.firebasestorage.app",
  messagingSenderId: "641138697337",
  appId: "1:641138697337:web:656b7a6759481e7c3620a8",
  measurementId: "G-320JZTJC3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);;

export { auth, app, db };