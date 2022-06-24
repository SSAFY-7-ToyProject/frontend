import React from "react";
import styles from "../css/post.module.css";

export default ({ weather, className }) => {
  const classname = [styles.weather, className ? className : ""]
    .join(" ")
    .trim();
  console.log(classname);

  return (
    <img
      src={`/images/${weather}.png`}
      alt="날씨이미지"
      className={classname}
    />
  );
};
