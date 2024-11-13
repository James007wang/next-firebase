// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyBFBrwtnWSlBsVyn9JkUPQ8Kv-qCVnAV9A",
  authDomain: "balmy-platform-423519-j4.firebaseapp.com",
  projectId: "balmy-platform-423519-j4",
  storageBucket: "balmy-platform-423519-j4.firebasestorage.app",
  messagingSenderId: "825233968869",
  appId: "1:825233968869:web:bbc4c065c3c28b08254e0c",
  measurementId: "G-H9ST35XH3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
