import React from "react";
import ColorState from "./ColorState";

export default function PostContent({ text }) {
  return (
    <div>
      <ColorState />
      <div className="post-content">{text}</div>
    </div>
  );
}
