import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    return data;
  } catch (error) {
    return error.response.data;
  }
});
