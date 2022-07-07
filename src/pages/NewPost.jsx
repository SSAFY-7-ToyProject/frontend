import React, { useEffect } from "react";
import Post from "../components/post/SinglePost";

export default function SinglePostPage() {
  const post = [
    {
      id: "",
      uid: "",
      userName: "",
      regTime: "",
      weather: "SNOW",
      secret: false,
      title: "",
      backgroundColor: "#7bb6c4,#fff",
      content: "",
    },
  ];
  return <Post post={post[0]} isWrite={true} />;
}
