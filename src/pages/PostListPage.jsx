import React, { useEffect } from "react";
import PostList from "../components/post/PostList";

export default function PostListPage({ setAppClassName, setHeaderShow }) {
  useEffect(() => {
    setHeaderShow(true);
    return () => setHeaderShow(false);
  }, []);
  return <PostList userid={"ssafy"} setAppClassName={setAppClassName} />;
}
