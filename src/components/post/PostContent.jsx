import React from "react";
import ColorState from "./ColorState";

export default function PostContent({ post }) {
  const { title, content, weather, regTime, secret, userName } = post;
  console.log(post);
  return (
    <div>
      <div>{title}</div>
      <div>{regTime}</div>
      <div>{content}</div>
      <div>{secret ? "비밀글" : "공개글"}</div>
    </div>
  );
}
