import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredData, fetchUserData } from "./nanniesOperations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  error: null,
  loading: false,
  nannyList: [],
  // filteredList: [],
  // currentPage: 1,
  // filter: null,
  isVisibleButton: true,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {
    // setFilterOption(state, action) {
    //   state.filter = action.payload;
    // },
    // resetFilterOption(state) {
    //   state.filter = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, handlePending)
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.filter = null;
        state.isVisibleButton = true;

        const fetchedArr = state.nannyList.some(
          (item) => item.id === action.payload[0].id
        );

        if (!fetchedArr) {
          state.nannyList.push(...action.payload);
        } else {
          state.nannyList = action.payload;
        }

        if (action.payload.length < 3) {
          state.isVisibleButton = false;
        }
        state.error = null;
      })
      .addCase(fetchUserData.rejected, handleRejected)
      .addCase(fetchFilteredData.pending, handlePending)
      .addCase(fetchFilteredData.fulfilled, (state, action) => {
        state.loading = false;
        state.isVisibleButton = false;

        state.nannyList = action.payload;
        state.error = null;
      })
      .addCase(fetchFilteredData.rejected, handleRejected);
  },
});

export const nanniesReducer = nanniesSlice.reducer;
export const { setFilterOption, resetFilterOption } = nanniesSlice.actions;
// export const { updateCurrentPage } = nanniesSlice.actions;
