import { createSlice } from "@reduxjs/toolkit";
import {
  createFoodItemAsync,
  deleteFoodItemAsync,
  updateFoodItemAsync,
} from "./foodApi";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.success = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createFoodItemAsync.pending, (state, actions) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createFoodItemAsync.fulfilled, (state, actions) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createFoodItemAsync.rejected, (state, actions) => {
      state.success = false;
      state.loading = false;
      state.error = actions.payload;
    });
    builder.addCase(updateFoodItemAsync.pending, (state, actions) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateFoodItemAsync.fulfilled, (state, actions) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateFoodItemAsync.rejected, (state, actions) => {
      state.success = false;
      state.loading = false;
      state.error = actions.payload;
    });
    builder.addCase(deleteFoodItemAsync.pending, (state, actions) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteFoodItemAsync.fulfilled, (state, actions) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteFoodItemAsync.rejected, (state, actions) => {
      state.success = false;
      state.loading = false;
      state.error = actions.payload;
    });
  },
});

export const { clearState } = foodSlice.actions;

export default foodSlice.reducer;
