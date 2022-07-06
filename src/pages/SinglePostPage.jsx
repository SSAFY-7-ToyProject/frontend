import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Post from "../components/post/SinglePost";
import { selectPostById } from "../store/postSlice";

export default function SinglePostPage({ setHeaderShow }) {
  // const post = [
  //   {
  //     id: "a967785bf325e3472abe01182abb4fe776a3b045cc79582a728438b3ce369dd2",
  //     uid: "674270c5f850a78f721228eb9c9da82d78b7ead519caa3d974815c45eeca2053",
  //     userName: "james",
  //     regTime: "2022-06-27T01:20:29.06302",
  //     weather: "SNOW",
  //     secret: false,
  //     title: "오늘의 일기",
  //     backgroundColor: "#959af4,#7bb6c4",
  //     content:
  //       "일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트",
  //   },
  // ];
  useEffect(() => {
    setHeaderShow(false);
    return () => {
      setHeaderShow(true);
    };
  }, []);
  const { post: postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  return <Post post={post} />;
}
