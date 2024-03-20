import { createSlice } from "@reduxjs/toolkit";
import { signInUserAsync, signOutUserAsync, signUpUserAsync } from "./authApi";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //Sign In
    builder.addCase(signInUserAsync.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(signInUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(signInUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
    //Sign Up
    builder.addCase(signUpUserAsync.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(signUpUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(signUpUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
    // Sign Out
    builder.addCase(signOutUserAsync.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(signOutUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    });
    builder.addCase(signOutUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
  },
});

export const { clearState } = authSlice.actions;

export default authSlice.reducer;
