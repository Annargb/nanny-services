import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGIN_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAnkp7Cdlmpf9PjBnpYwp9-0ze0F47L7hE",
//   authDomain: "nany-services-9a09d.firebaseapp.com",
//   databaseURL:
//     "https://nany-services-9a09d-default-rtdb.europe-west1.firebasedatabase.app/",
//   projectId: "nany-services-9a09d",
//   storageBucket: "nany-services-9a09d.appspot.com",
//   messagingSenderId: "734209943459",
//   appId: "1:734209943459:web:bbf6c4586c1423684a5c16",
//   measurementId: "G-CPK9PRQMWC",
// };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
