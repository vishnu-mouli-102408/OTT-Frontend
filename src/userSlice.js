// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarItem: "Home", // Initial sidebar items are an empty array
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSidebarItem: (state, action) => {
      state.sidebarItem = action.payload;
    },
  },
});

export const { setSidebarItem } = userSlice.actions;

export default userSlice.reducer;
