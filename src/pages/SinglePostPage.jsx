import React from "react";
import Post from "../components/post/SinglePost";

export default function SinglePostPage() {
  const post = [
    {
      diaryId: "1",
      userId: "ssafy",
      regTime: "2022-06-10 11:32:35",
      category: "",
      emotion: "blue",
      secret: false,
      title: "일기의 제목입니당당당",
      weather: "sunny",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
    },
  ];
  return <Post isOwner={true} post={post[0]} />;
}
