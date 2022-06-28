import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
