import React from "react";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  return (
    <Link to={`/post/${post.diaryId}`}>
      <li className="post-list-item">
        postid:{post.diaryId} title:{post.title}
      </li>
    </Link>
  );
}
