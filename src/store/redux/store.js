import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
