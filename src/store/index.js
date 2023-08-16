import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Authentication/AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default store;
