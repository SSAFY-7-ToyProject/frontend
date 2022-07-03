import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postSlice";
import authReducer from "../store/authSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});
