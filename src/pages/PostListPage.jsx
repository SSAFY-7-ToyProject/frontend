import React from "react";
import PostList from "../components/post/PostList";

export default function PostListPage({ setAppClassName }) {
  return <PostList userid={"ssafy"} setAppClassName={setAppClassName} />;
}
