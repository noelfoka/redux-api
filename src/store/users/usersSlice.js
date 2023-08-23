import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersFetch";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isloading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isloading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const userSelector = (state) => state.users;

export default usersSlice.reducer;
