import React, { useState } from "react";
import { useParams } from "react-router";
import ColorState from "./ColorState";
import EditPostForm from "./EditPostForm";
import PostContent from "./PostContent";
import styles from "../css/post.module.css";
import WeatherImg from "./WeatherImg";

export default function Post({ isOwner, post }) {
  const { post: postId } = useParams();

  const { date, emotion: color, title, content: text, weather } = post;
  const [editing, setEditing] = useState(false);
  return (
    <div className={styles.diary}>
      <div className={styles.weatherArea}>
        <WeatherImg weather={weather} className={styles.post} />
      </div>
      <div className={styles.contentArea}>
        <div className={styles.content}>
          {isOwner && (
            <div className="buttons">
              <button onClick={() => setEditing(true)}>수정 ✎</button>
              <button>삭제 x </button>
            </div>
          )}
          <WeatherImg weather={weather} />
          <div className={styles.textArea}>
            {editing ? (
              <EditPostForm text={text} />
            ) : (
              <PostContent text={text} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
