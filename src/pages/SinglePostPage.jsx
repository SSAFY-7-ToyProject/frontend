import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Post from "../components/post/SinglePost";
import { selectPostById } from "../store/postSlice";

export default function SinglePostPage() {
  const { post: postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  return <Post post={post} />;
}
