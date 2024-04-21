import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  // doc,
  // getDocs,
  addDoc,
  // deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import toast from "react-hot-toast";
// import { set } from "firebase/database";

export const addToFavorites = createAsyncThunk(
  "favorites/addToFavorites",
  async (object, { rejectWithValue }) => {
    const user = auth.currentUser;
    if (!user) {
      toast.error("You must be logged in to add favorites!");
      return rejectWithValue("User is not logged in!");
    }

    const objectsRef = db
      .collection("users")
      .doc(user.uid)
      .collection("favorites");

    try {
      const objectSnapshot = await objectsRef
        .where("name", "==", object.name)
        .get();
      if (objectSnapshot.empty) {
        await objectsRef.add(object);
        return object;
      } else {
        console.log("Object already exists in favorites:", object);
        return null; // Повертаємо null, якщо об'єкт вже існує
      }
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async (_, { rejectWithValue }) => {
    const user = auth.currentUser;

    if (!user) {
      console.error("User is not logged in!");
      return rejectWithValue("User is not logged in!");
    }

    const objectsRef = db
      .collection("users")
      .doc(user.uid)
      .collection("objects");

    try {
      const objectSnapshot = await objectsRef.get();
      const favorites = [];

      // Зчитування даних з колекції та запис у масив favorites
      objectSnapshot.forEach((doc) => {
        favorites.push({ id: doc.id, ...doc.data() });
      });

      return favorites; // Повертаємо дані з операції fetchFavorites
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const toggleFavorites = createAsyncThunk(
  "favorites/toggleFavorite",
  async (object, { rejectWithValue }) => {
    const user = auth.currentUser;

    if (!user) {
      console.error("User is not logged in!");
      return rejectWithValue("User is not logged in!");
    }

    const favoritesRef = collection(db, "users", user.uid, "favorites");
    console.log(favoritesRef);

    // const docRef = dbUD.collection("data").doc().set({1: "hello"});

    try {
      const docRef = await addDoc(favoritesRef, object);
      console.log(await docRef.id);
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue(error.message);
    }

    // try {
    //   const docRef = await addDoc(favoritesRef, object);
    //   console.log(await docRef);
    // } catch (error) {
    //   console.error("Error:", error);
    //   return rejectWithValue(error.message);
    // }

    // try {
    //   const favoritesSnapshot = await getDocs(favoritesRef);

    //   console.log(favoritesSnapshot);
    //   const favoriteExists = !favoritesSnapshot.empty;

    //   if (favoriteExists) {
    //     // Видалення об'єкта
    //     favoritesSnapshot.forEach(async (doc) => {
    //       await deleteDoc(doc.ref);
    //       console.log("Object deleted successfully!");
    //     });
    //   } else {
    //     // Додавання нового об'єкта
    //     const docRef = await addDoc(favoritesRef, object);
    //     console.log("Object added with ID: ", docRef.id);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   return rejectWithValue(error.message);
    // }
  }
);
