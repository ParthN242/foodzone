import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Sign In
export const signInUserAsync = createAsyncThunk(
  "auth/signin",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", userData);

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

// Sign Up
export const signUpUserAsync = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/create", userData);

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

// Sign Out
export const signOutUserAsync = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/auth/signOut");

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);
