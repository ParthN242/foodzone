import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create food
export const createFoodItemAsync = createAsyncThunk(
  "food/create",
  async (foodData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/food/create", foodData);

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

// update food
export const updateFoodItemAsync = createAsyncThunk(
  "food/update",
  async (foodData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `/api/food/update/${foodData.foodId}`,
        foodData.data
      );

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

// delete food
export const deleteFoodItemAsync = createAsyncThunk(
  "food/delete",
  async (foodId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/food/delete/${foodId}`);

      return foodId;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);
