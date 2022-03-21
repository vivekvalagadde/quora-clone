// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHqr78ML_MgdHiNAKxWttgn2btNkJoyV4",
  authDomain: "quora-clone-d12b8.firebaseapp.com",
  projectId: "quora-clone-d12b8",
  storageBucket: "quora-clone-d12b8.appspot.com",
  messagingSenderId: "270829414790",
  appId: "1:270829414790:web:ca8b61aacb9817664a6407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
