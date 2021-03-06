import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import EditPostForm from "./EditPostForm";
import PostContent from "./PostContent";
import styles from "../css/post.module.css";
import WeatherImg from "./WeatherImg";
import ColorPicker from "./ColorPicker";
import { useDispatch, useSelector } from "react-redux";
import {
  postUpdated,
  modifyPost,
  addNewPost,
  deletePost,
} from "../../store/postSlice.js";
import { getUid } from "../../store/authSlice.js";
export default function Post({ post, isWrite }) {
  const { id, weather, backgroundColor, uid: userId } = post;
  const [selectedWeather, setSelectedWeather] = useState(weather);
  const [editing, setEditing] = useState(false);
  const [bgColor, setBgColor] = useState({ first: "#7bb6c4 ", second: "#fff" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uid = useSelector(getUid);
  const isOwner = userId === uid;

  useEffect(() => {
    const colors = backgroundColor.split(",");
    setBgColor({ first: colors[0], second: colors[1] });
    if (isWrite) {
      setEditing(true);
    }
  }, [backgroundColor, isWrite]);
  const onUpdate = (title, content, secret) => {
    const form = {
      id,
      uid,
      title,
      content,
      secret,
      backgroundColor: `${bgColor.first},${bgColor.second}`,
      weather: selectedWeather,
    };
    console.log("완료 버튼", form);
    let allWrited = true;
    if (title === "" || content === "" || secret === "") allWrited = false;

    if (!allWrited) {
      alert("모든 항목을 작성해주세요.");
      return false;
    }
    if (isWrite) {
      console.log("새 글 작성", form);
      dispatch(addNewPost(form));
      navigate("/post");
    } else {
      console.log("글 수정", form);
      dispatch(postUpdated(form));
      dispatch(modifyPost(form));
      // navigate(`/posts/${id}`);
    }
    return true;
  };

  const onDelete = () => {
    dispatch(deletePost(id));
    navigate(-1);
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
              {isOwner ? (
                <div className={styles.buttonOwner}>
                  <button
                    onClick={() => setEditing(true)}
                    className={styles.edit_btn}
                  >
                    ✎
                  </button>
                  <button onClick={onDelete} className={styles.edit_btn}>
                    x
                  </button>
                </div>
              ) : (
                <div></div>
              )}
              <button onClick={() => navigate(-1)} className={styles.edit_btn}>
                닫기
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
