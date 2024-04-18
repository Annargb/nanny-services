import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDatabase,
  query,
  orderByKey,
  limitToFirst,
  ref,
  get,
  startAt,
} from "firebase/database";

import toast from "react-hot-toast";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
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

      //   console.log(data);
      return data;
    } catch (error) {
      toast.error("Error fetching user data");
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
