import React, { useEffect } from "react";
import Post from "../components/post/SinglePost";

export default function SinglePostPage({ setHeaderShow }) {
  const post = [
    {
      id: "a967785bf325e3472abe01182abb4fe776a3b045cc79582a728438b3ce369dd2",
      uid: "674270c5f850a78f721228eb9c9da82d78b7ead519caa3d974815c45eeca2053",
      userName: "james",
      regTime: "2022-06-27T01:20:29.06302",
      weather: "SNOW",
      secret: false,
      title: "오늘의 일기",
      content: "즐거움",
    },

    useEffect(() => {
      setHeaderShow(false);
      return () => {
        setHeaderShow(true);
      };
    }, []),
  ];
  return <Post isOwner={true} post={post[0]} />;
}
