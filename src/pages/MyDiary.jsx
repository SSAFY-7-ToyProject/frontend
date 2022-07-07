import React, { useEffect } from "react";
import PostList from "../components/post/PostList";

import { useDispatch, useSelector } from "react-redux";
import { fetchMyPosts, selectAllPosts } from "../store/postSlice.js";
export default function PostListPage({ userid, setAppClassName }) {
  const dispatch = useDispatch();
  dispatch(fetchMyPosts(userid));
  return <PostList userid={userid} setAppClassName={setAppClassName} />;
}
