import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import toast from "react-hot-toast";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName });
      toast.success("Success register");
      return {
        userId: userCredential.user.uid,
        userName: userCredential.user.displayName,
      };
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("This user are already exist");
      } else {
        toast.error("errror");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "auth/logInUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Log in successful");
      return {
        userId: userCredential.user.uid,
        userName: userCredential.user.displayName,
      };
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        toast.error("Email or password are wrong!");
      } else {
        toast.error("errror");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      toast.success("Log out successful");
    } catch (error) {
      toast.error("errror");
      return rejectWithValue(error.message);
    }
  }
);

// const loadNextData = (page, perPage, callback) => {
//   const database = getDatabase();
//   const dbRef = ref(database);
//   const dbQuery = query(dbRef, orderByKey(), limitToFirst(perPage * page));

//   // Слухаємо зміни за певним запитом
//   const unsubscribe = onValue(dbQuery, (snapshot) => {
//     const data = snapshot.val();
//     callback(data);

//     // Відключаємо слухач після отримання даних
//     off(dbQuery, "value", unsubscribe);
//   });
// };

// export const fetchUserData = createAsyncThunk(
//   "auth/fetchUserData",
//   async (_, { rejectWithValue }) => {
//     try {
//       // Завантажуємо наступну порцію даних з бази даних
//       await loadNextData(1, 3, (data) => {
//         // Повертаємо дані користувача
//         console.log(data);
//         return data;
//       });
//     } catch (error) {
//       toast.error("Error fetching user data");
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const loadNextData = (page, perPage, callback) => {
//   const dbRef = ref(getDatabase());

//   // Створюємо запит з пагінацією
//   const query = ref.orderByKey().limitToFirst(perPage * page);

//   // Слухаємо зміни за певним запитом
//   onValue(query, (snapshot) => {
//     const data = snapshot.val();
//     callback(data);
//   });
// };
