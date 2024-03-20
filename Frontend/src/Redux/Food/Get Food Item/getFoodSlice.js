import { createSlice } from "@reduxjs/toolkit";
import { getFoodItemAsync } from "./getFoodApi";
import {
  createFoodItemAsync,
  deleteFoodItemAsync,
  updateFoodItemAsync,
} from "../Food/foodApi";

const initialState = {
  foodItems: [],
  loading: false,
  error: null,
};

const getFoodApi = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoodItemAsync.pending, (state, action) => {
      state.loading = true;
      state.foodItems = [];
      state.error = null;
    });
    builder.addCase(getFoodItemAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.foodItems = action.payload;
      state.error = null;
    });
    builder.addCase(getFoodItemAsync.rejected, (state, action) => {
      state.loading = false;
      state.foodItems = [];
      state.error = action.payload;
    });
    builder.addCase(createFoodItemAsync.fulfilled, (state, action) => {
      state.foodItems.push(action.payload.food);
    });
    builder.addCase(deleteFoodItemAsync.fulfilled, (state, action) => {
      state.foodItems = state.foodItems.filter(
        (item) => item._id !== action.payload
      );
    });
    builder.addCase(updateFoodItemAsync.fulfilled, (state, action) => {
      state.foodItems = state.foodItems.map((item) => {
        if (item._id === action.payload.food._id) {
          return action.payload.food;
        } else {
          return item;
        }
      });
    });
  },
});

export const {} = getFoodApi.actions;

export const foodItemState = (state) => state.foodItems;

export default getFoodApi.reducer;
