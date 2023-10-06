// store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice";
const store = configureStore({
  reducer: {
    user: userReducer, // Add your slice reducer here
  },
});

export default store;
