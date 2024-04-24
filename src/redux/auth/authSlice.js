import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logInUser, logOut } from "./authOperations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  userId: null,
  userName: null,
  error: null,
  loading: false,
  userData: [],
  currentPage: 1,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.userId;
        state.userName = action.payload.userName;
        state.error = null;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(logInUser.pending, handlePending)
      .addCase(logInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.userId;
        state.userName = action.payload.userName;
        state.error = null;
      })
      .addCase(logInUser.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.userId = null;
        state.userName = null;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
