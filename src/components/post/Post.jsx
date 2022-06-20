import React, { useState } from "react";
import ColorState from "./ColorState";
import EditPostForm from "./EditPostForm";
import PostContent from "./PostContent";

export default function Post({ isOwner, post }) {
  const { date, emotion: color, title, content: text } = post;
  const [editing, setEditing] = useState(false);
  return (
    <div>
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
