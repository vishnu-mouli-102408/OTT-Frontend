// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarItem: "Home", // Initial sidebar items are an empty array
  secretCode: null,
  userRole: null,
  selectedVideo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSidebarItem: (state, action) => {
      state.sidebarItem = action.payload;
    },
    setSecretCode: (state, action) => {
      state.secretCode = action.payload;
    },
    setUserRoles: (state, action) => {
      state.userRole = action.payload;
    },
    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
  },
});

export const { setSidebarItem, setSecretCode, setUserRoles, setSelectedVideo } =
  userSlice.actions;

export default userSlice.reducer;
