import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import EditPostForm from "./EditPostForm";
import PostContent from "./PostContent";
import styles from "../css/post.module.css";
import WeatherImg from "./WeatherImg";
import ColorPicker from "./ColorPicker";
import { useDispatch } from "react-redux";
import { postUpdated, modifyPost } from "../../store/postSlice.js";

export default function Post({ isOwner, post, isWrite }) {
  const { id, weather, secret, title, backgroundColor, content: text } = post;
  const [selectedWeather, setSelectedWeather] = useState(weather);
  const [editing, setEditing] = useState(false);
  const [bgColor, setBgColor] = useState({ first: "#7bb6c4 ", second: "#fff" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const colors = backgroundColor.split(",");
    setBgColor({ first: colors[0], second: colors[1] });
    if (isWrite) {
      setEditing(true);
    }
  }, []);
  const onUpdate = (title, content, secret) => {
    const form = {
      id,
      title,
      content,
      secret,
      backgroundColor: `${bgColor.first},${bgColor.second}`,
      weather: selectedWeather,
    };
    if (isWrite) {
      console.log("새 글 작성", form);
    } else {
      console.log("글 수정", form);
      dispatch(postUpdated(form));
      dispatch(modifyPost(form));
      // navigate(`/posts/${id}`);
    }
  };
  const bccolor = `linear-gradient(180deg, ${bgColor.first} 0%, ${bgColor.second} 100%)`;
  return (
    <div className={styles.diaryPage} style={{ background: bccolor }}>
      <div className={styles.diary}>
        <div className={styles.weatherArea}>
          <WeatherImg weather={selectedWeather} className={styles.post} />
        </div>
        <div className={styles.contentArea}>
          <div className={styles.content}>
            <div className={styles.buttons}>
              {isOwner && (
                <div className={styles.buttonOwner}>
                  <button onClick={() => setEditing(true)}>수정 ✎</button>
                  <button>삭제 x </button>
                </div>
              )}
              <button
                onClick={() => navigate(-1)}
                className={styles.buttonClose}
              >
                X
              </button>
            </div>

            <div className={styles.textArea}>
              {editing ? (
                <EditPostForm
                  post={post}
                  setEditing={setEditing}
                  setWeather={setSelectedWeather}
                  onUpdate={onUpdate}
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
