import React from "react";
import ColorState from "./ColorState";
import ColorSelectForm from "./ColorSelectForm";

export default function EditPostForm({ text }) {
  return (
    <div>
      <ColorSelectForm />
      <ColorState />
      <progress id="bright" max="100" value="70"></progress>
      <form className="post-form">
        <textarea
          type="text"
          value={text}
          placeholder="내용을 입력 "
          autoFocus
        />
        <button type="submit">완료</button>
      </form>
    </div>
  );
}
