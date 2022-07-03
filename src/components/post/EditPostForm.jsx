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
  const { content: text, title, weather, secret, backgroundColor } = post;
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
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onUpdate(DiaryTitle, content, isSecret);
    setEditing(false);
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
        />
        <textarea
          type="text"
          name="content"
          autoFocus
          value={content}
          onChange={onChange}
          className={styles.edit_text}
        />
        <div className={styles.btn}>
          <div className={styles.secret_btn}>
            <input
              type="radio"
              name="secret"
              value="secret"
              onChange={onChange}
            />{" "}
            비밀글
            <input
              type="radio"
              name="secret"
              value="open"
              onChange={onChange}
            />{" "}
            공개글
          </div>

          <button onClick={onSubmit} className={styles.edit_button}>
            완료
          </button>
        </div>
        {children}
      </form>
    </div>
  );
}
