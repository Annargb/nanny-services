import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnkp7Cdlmpf9PjBnpYwp9-0ze0F47L7hE",
  authDomain: "nany-services-9a09d.firebaseapp.com",
  projectId: "nany-services-9a09d",
  storageBucket: "nany-services-9a09d.appspot.com",
  messagingSenderId: "734209943459",
  appId: "1:734209943459:web:bbf6c4586c1423684a5c16",
  measurementId: "G-CPK9PRQMWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
