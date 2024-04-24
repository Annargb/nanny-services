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
    try {
      const database = getDatabase();
      const dbRef = ref(database);
      let dbQuery;

      switch (option) {
        case "az":
          dbQuery = query(dbRef, orderByChild("name"));
          break;
        case "za":
          dbQuery = query(dbRef, orderByChild("name"));
          break;
        case "less":
          dbQuery = query(dbRef, orderByChild("price_per_hour"), endAt(10));
          break;
        case "greater":
          dbQuery = query(dbRef, orderByChild("price_per_hour"), startAt(10));
          break;
        case "popular":
          dbQuery = query(dbRef, orderByChild("rating"));
          break;
        case "notPopular":
          dbQuery = query(dbRef, orderByChild("rating"));
          break;
        case "all":
          dbQuery = query(dbRef, orderByKey());
          break;
      }

      const snapshot = await get(dbQuery);
      let data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });

      switch (option) {
        case "za":
          data.sort((a, b) => (a.name < b.name ? 1 : -1));
          break;
        case "popular":
          data.sort((a, b) => b.rating - a.rating);
          break;
      }

      return data;
    } catch (error) {
      toast.error("Error fetching data");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
