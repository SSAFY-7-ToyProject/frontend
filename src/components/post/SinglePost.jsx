import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import ColorState from "./ColorState";
import EditPostForm from "./EditPostForm";
import PostContent from "./PostContent";
import styles from "../css/post.module.css";
import WeatherImg from "./WeatherImg";
import ColorPicker from "./ColorPicker";

export default function Post({ isOwner, post }) {
  const { post: postId } = useParams();

  const {
    id,
    uid,
    userName,
    regTime,
    weather,
    secret,
    title,
    content: text,
  } = post;
  const [selectedWeather, setSelectedWeatehr] = useState(weather);
  const [editing, setEditing] = useState(false);
  const [bgcolor1, setColor] = useState("#aabbcc");
  const [bgColor, setBgColor] = useState({ first: "#7bb6c4 ", second: "#fff" });
  // console.log(bgColor);

  const navigate = useNavigate();
  const bccolor = `linear-gradient(180deg, ${bgColor.first} 0%, ${bgColor.second} 100%)`;
  return (
    <div className={styles.diaryPage} style={{ background: bccolor }}>
      <div className={styles.diary}>
        <div className={styles.weatherArea}>
          <WeatherImg weather={selectedWeather} className={styles.post} />
        </div>
        <div className={styles.contentArea}>
          <div className={styles.content}>
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
            {isOwner && (
              <div className="buttons">
                <button onClick={() => setEditing(true)}>수정 ✎</button>
                <button>삭제 x </button>
              </div>
            )}

            <div className={styles.textArea}>
              {editing ? (
                <EditPostForm
                  text={text}
                  title={title}
                  setWeather={setSelectedWeatehr}
                  weather={selectedWeather}
                  secret={secret}
                  setEditing={setEditing}
                >
                  <ColorPicker color={bgColor} setBgColor={setBgColor} />
                </EditPostForm>
              ) : (
                <PostContent post={post} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
