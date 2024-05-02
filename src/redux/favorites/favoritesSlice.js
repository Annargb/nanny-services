import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    updateFavorites(state, action) {
      state.favoritesList = action.payload;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { updateFavorites } = favoritesSlice.actions;
