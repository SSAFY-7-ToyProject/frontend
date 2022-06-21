import React, { useState } from "react";
import { useParams } from "react-router";
import ColorState from "./ColorState";
import EditPostForm from "./EditPostForm";
import PostContent from "./PostContent";

export default function Post({ isOwner, post }) {
  const { post: postId } = useParams();

  const { date, emotion: color, title, content: text } = post;
  const [editing, setEditing] = useState(false);
  return (
    <div>
      글 번호 : {postId}
      {isOwner && (
        <div className="buttons">
          <button onClick={() => setEditing(true)}>수정 ✎</button>
          <button>삭제 x </button>
        </div>
      )}
      {editing ? <EditPostForm text={text} /> : <PostContent text={text} />}
    </div>
  );
}
