import { createSlice } from "@reduxjs/toolkit";
import { fetchFavorites, toggleFavorites } from "./favoritesOperations";

const initialState = {
  error: null,
  loading: false,
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log(action.payload);
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(toggleFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const existingFavoriteIndex = state.favorites.findIndex(
          (favorite) => favorite.id === action.payload.id
        );
        if (existingFavoriteIndex === -1) {
          state.favorites.push(action.payload);
        }
      })
      .addCase(toggleFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
