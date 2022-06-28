import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchPosts,
  selectAllPosts,
  selectPostById,
  selectPostIds,
} from "../../store/postSlice";
import styles from "../css/post.module.css";
import WeatherImg from "./WeatherImg";

function PostListItem({ id }) {
  console.log(id);
  const post = useSelector((state) => selectPostById(state, id));
  console.log(post);
  return (
    <li className={styles.item}>
      <Link to={`/post/${post.id}`}>
        <WeatherImg weather={post.weather} className={styles.thumbnail} />
        {/* <p>{post.regTime}</p> */}
      </Link>
    </li>
  );
}
export default function PostList({ userid: username, setAppClassName }) {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postIds = useSelector(selectPostIds);
  console.log("username", username);
  console.log(posts);

  useEffect(() => {
    if (username) {
      setAppClassName("app night");
    } else {
      setAppClassName("app day");
    }
    return () => {
      setAppClassName("app");
    };
  }, [username]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postList = postIds.map((id) => {
    return <PostListItem id={id} key={id} />;
  });

  return (
    <div className={styles.postList}>
      <ul className={styles.posts}>{postList}</ul>
    </div>
  );
}
