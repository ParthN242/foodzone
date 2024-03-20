import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  success: false,
  loading: false,
  user: null,
  error: null,
};

export const getUserDetailAsync = createAsyncThunk(
  "user/me",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/user/me");

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

const UserDetailSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetailAsync.pending, (state, action) => {
      state.success = false;
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(getUserDetailAsync.fulfilled, (state, action) => {
      state.success = true;
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    });
    builder.addCase(getUserDetailAsync.rejected, (state, action) => {
      state.success = false;
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    });
  },
});

export default UserDetailSlice.reducer;
