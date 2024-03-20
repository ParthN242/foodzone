import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

export const getAllUserAsync = createAsyncThunk(
  "users/all",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/user/all");

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

const allUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUserAsync.fulfilled, (state, action) => {
      state.users = action.payload.users;
    });
  },
});

export const {} = allUserSlice.actions;

export default allUserSlice.reducer;
