import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredData, fetchUserData } from "./nanniesOperations";

const initialState = {
  error: null,
  loading: false,
  nannyList: [],
  currentPage: 1,
  isVisibleButton: true,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {
    updateCurrentPage(state) {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        const fetchedArr = state.nannyList.some(
          (item) => item.id === action.payload[0].id
        );

        if (!fetchedArr) {
          state.nannyList.push(...action.payload);
        }
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredData.fulfilled, (state, action) => {
        state.loading = false;
        state.isVisibleButton = false;
        state.nannyList = action.payload;
        state.error = null;
      })
      .addCase(fetchFilteredData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const nanniesReducer = nanniesSlice.reducer;
export const { updateCurrentPage } = nanniesSlice.actions;
