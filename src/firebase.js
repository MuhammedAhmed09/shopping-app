// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE1jD-Ah8CrkFwESk1KzuGcC0dlKURZ1A",
  authDomain: "luna-app-98f57.firebaseapp.com",
  projectId: "luna-app-98f57",
  storageBucket: "luna-app-98f57.firebasestorage.app",
  messagingSenderId: "126340970772",
  appId: "1:126340970772:web:a195900f2a68c0dd4b6a01",
  measurementId: "G-B6624EMWTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);