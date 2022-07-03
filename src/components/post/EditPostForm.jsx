import React, { useState } from "react";

import WeatherPicker from "./WeatherPick";
import styles from "../css/post.module.css";

export default function EditPostForm({
  text,
  title,
  setWeather,
  weather,
  secret,
  setEditing,
  children,
}) {
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

  const onUpdate = (event) => {
    event.preventDefault();
    const form = { weather, secret, title: DiaryTitle, content };
    console.log(form);
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

          <button onClick={onUpdate} className={styles.edit_button}>
            완료
          </button>
        </div>
        {children}
      </form>
    </div>
  );
}
