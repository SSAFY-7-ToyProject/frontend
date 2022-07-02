import React, { useState } from "react";

import WeatherPicker from "./WeatherPick";

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
    }
  };

  const onUpdate = (event) => {
    event.preventDefault();
    const form = { weather, secret, title: DiaryTitle, content };
    console.log(form);
    setEditing(false);
  };

  return (
    <div>
      <WeatherPicker setWeather={setWeather} />
      <form className="post-form">
        <input
          type="text"
          name="title"
          autoFocus
          value={DiaryTitle}
          onChange={onChange}
        />
        <textarea
          type="text"
          name="content"
          autoFocus
          value={content}
          onChange={onChange}
        />
        <button onClick={onUpdate}>완료</button>
        {children}
      </form>
    </div>
  );
}
