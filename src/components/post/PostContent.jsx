import React from "react";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherImg from "./WeatherImg";
import styles from "../css/post.module.css";
const dateFormat = (regTime) => {
  const regtime = regTime.split("T");
  const date = regtime[0];
  const time = regtime[1];
  return date.split("-").join("/");
};
export default function PostContent({ post }) {
  const { title, content, weather, regTime, secret, userName } = post;

  const lock = (function () {
    return (
      <span className={styles.lock}>
        {secret ? (
          <FontAwesomeIcon icon={faLock} />
        ) : (
          <FontAwesomeIcon icon={faLockOpen} />
        )}
      </span>
    );
  })();

  return (
    <div className={styles.diary_items}>
      {lock}
      <div className={styles.diary_weather}>
        <WeatherImg weather={weather} />
      </div>

      <h2 className={styles.title}>{title}</h2>
      <div className={styles.date}>{dateFormat(regTime)}</div>
      <div className={styles.text}>
        <p className={styles.text_content}>{content}</p>
      </div>
    </div>
  );
}
