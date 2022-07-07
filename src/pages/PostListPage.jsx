import React, { useEffect } from "react";
import PostList from "../components/post/PostList";

import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/postSlice.js";
export default function PostListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return <PostList userid={undefined} />;
}
