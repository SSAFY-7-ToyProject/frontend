import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchPosts,
  selectPostById,
  selectPostIds,
  selectPostsByUser,
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
      </Link>
    </li>
  );
}
export default function PostList({ userid }) {
  const dispatch = useDispatch();

  const postIds = useSelector(selectPostIds);
  const postsByUser = useSelector((state) => selectPostsByUser(state, userid));
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const byUser = !!userid;
  let postList;
  if (!byUser) {
    postList = postIds.map((id) => {
      return <PostListItem id={id} key={id} />;
    });
  } else {
    postList = postsByUser.map((post) => {
      return <PostListItem id={post.id} key={post.id} />;
    });
  }

  return (
    <div className={styles.postList}>
      <ul className={styles.posts}>{postList}</ul>
    </div>
  );
}
