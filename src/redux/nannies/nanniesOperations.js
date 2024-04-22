import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDatabase,
  query,
  orderByKey,
  limitToFirst,
  ref,
  get,
  startAt,
  orderByChild,
  endAt,
} from "firebase/database";

import toast from "react-hot-toast";

export const fetchUserData = createAsyncThunk(
  "nanny/fetchUserData",
  async (page, thunkAPI) => {
    try {
      const database = getDatabase();
      const dbRef = ref(database);
      const dbQuery = query(
        dbRef,
        orderByKey(),
        startAt(String((page - 1) * 3)),
        limitToFirst(3)
      );

      const snapshot = await get(dbQuery);

      let data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });

      return data;
    } catch (error) {
      toast.error("Error fetching data");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredData = createAsyncThunk(
  "nanny/fetchFilteredData",
  async (option, thunkAPI) => {
    // Змінено аргумент на опцію
    try {
      const database = getDatabase();
      const dbRef = ref(database);
      let dbQuery;

      // Відповідно до опції створюємо відповідний запит до Firebase
      switch (option) {
        case "az":
          dbQuery = query(dbRef, orderByChild("name"));
          console.log(dbQuery);
          break;
        case "za":
          dbQuery = query(dbRef, orderByChild("name"), endAt("A"));
          break;
        default:
          // За замовчуванням, якщо опція не визначена, використовуйте стандартний запит all
          dbQuery = query(dbRef, orderByKey());
          break;
      }

      const snapshot = await get(dbQuery);
      console.log(snapshot);

      let data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });
      console.log(data);
      return data;
    } catch (error) {
      toast.error("Error fetching data");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchUserData = createAsyncThunk(
//   "auth/fetchUserData",
//   async (_, { rejectWithValue }) => {
//     try {
//       const database = getDatabase();
//       const dbRef = ref(database);
//       const dbQuery = query(dbRef, orderByKey(), limitToFirst(3));

//       let data;

//       const snapshot = await get(dbQuery);

//       if (snapshot.exists()) {
//         data = snapshot.val();
//       } else {
//         console.log("No data available");
//       }

//       console.log(data);
//       return data;
//     } catch (error) {
//       toast.error("Error fetching user data");
//       return rejectWithValue(error.message);
//     }
//   }
// );
