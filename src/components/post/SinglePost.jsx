import React, { useState } from "react";
import { useParams } from "react-router";
import ColorState from "./ColorState";
import EditPostForm from "./EditPostForm";
import PostContent from "./PostContent";
import styles from "../css/post.module.css";
import WeatherImg from "./WeatherImg";
import ColorPicker from "./ColorPicker";

export default function Post({ isOwner, post }) {
  const { post: postId } = useParams();

  const { date, emotion: color, title, content: text, weather } = post;
  const [editing, setEditing] = useState(false);
  const [bgcolor1, setColor] = useState("#aabbcc");
  const [bgColor, setBgColor] = useState({ first: "#7bb6c4 ", second: "#fff" });
  console.log(bgcolor1);
  const bccolor = `linear-gradient(180deg, ${bgColor.first} 0%, ${bgColor.second} 100%)`;
  return (
    <div className={styles.diary} style={{ background: bccolor }}>
      <ColorPicker color={bgColor} setBgColor={setBgColor} />
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

          <div className={styles.textArea}>
            {/* {editing ? (
              <EditPostForm text={text} />
            ) : (
              <PostContent text={text} />
            )} */}
            <EditPostForm text={text} />
          </div>
        </div>
      </div>
    </div>
  );
}
