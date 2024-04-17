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
