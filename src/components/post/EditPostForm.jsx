import React, { useState } from "react";

import WeatherPicker from "./WeatherPick";
import styles from "../css/post.module.css";

export default function EditPostForm({
  post,
  setEditing,
  setWeather,
  onUpdate,
  children,
}) {
  const { content: text, title, secret } = post;
  console.log(post);
  const [DiaryTitle, setTitle] = useState(title);
  const [content, setContent] = useState(text);
  const [isSecret, setSecret] = useState(secret);

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    switch (name) {
      case "title":
        return setTitle(value);
      case "content":
        return setContent(value);
      case "secret":
        return value === "secret" ? setSecret(true) : setSecret(false);
      default:
        return;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const res = onUpdate(DiaryTitle, content, isSecret);
    if (res) setEditing(false);
  };

  return (
    <div className={styles.diary_items}>
      <WeatherPicker setWeather={setWeather} />
      <form className={styles.edit_form}>
        <input
          type="text"
          name="title"
          autoFocus
          value={DiaryTitle}
          onChange={onChange}
          className={styles.edit_title}
          required
        />
        <textarea
          type="text"
          name="content"
          autoFocus
          value={content}
          onChange={onChange}
          className={styles.edit_text}
          required
        />
        <div className={styles.btn}>
          <div className={styles.secret_btn}>
            <input
              type="radio"
              name="secret"
              value="secret"
              onChange={onChange}
              checked={isSecret && "checked"}
            />{" "}
            비밀글
            <input
              type="radio"
              name="secret"
              value="open"
              onChange={onChange}
              checked={!isSecret && "checked"}
            />
            공개글
          </div>

          <button onClick={onSubmit} className={styles.edit_btn}>
            완료
          </button>
        </div>
        {children}
      </form>
    </div>
  );
}
