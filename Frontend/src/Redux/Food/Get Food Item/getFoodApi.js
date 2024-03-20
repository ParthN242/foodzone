import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFoodItemAsync = createAsyncThunk(
  "food/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/food/get");

      return data.food;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);
