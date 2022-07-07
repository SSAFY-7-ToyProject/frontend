import React, { useEffect } from "react";
import PostList from "../components/post/PostList";

export default function PostListPage({ userid, setAppClassName }) {
  return <PostList userid={undefined} setAppClassName={setAppClassName} />;
}
