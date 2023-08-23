import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isloading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: {},
});

export const userSelector = (state) => state.users;

export default usersSlice.reducer;
