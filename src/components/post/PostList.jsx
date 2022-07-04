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
import date from "../../util/dateFormat.js";
function PostListItem({ id }) {
  const post = useSelector((state) => selectPostById(state, id));
  return (
    <li className={styles.item}>
      <Link to={`/post/${post.id}`} className={styles.thumbnail_card}>
        <WeatherImg weather={post.weather} className={styles.thumbnail} />
        <div className={styles.thumbnail_info}>
          <div className={styles.thumbnail_title}>{post.title}</div>
          <div className={styles.thumbnail_date}>{date(post.regTime)}</div>
        </div>
        {/* <p>{post.regTime}</p> */}
      </Link>
    </li>
  );
}
export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postIds = useSelector(selectPostIds);

  console.log(posts);

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
