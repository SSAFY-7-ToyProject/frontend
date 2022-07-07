import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts } from "../../store/postSlice";

import styles from "../css/post.module.css";
import WeatherImg from "./WeatherImg";
import date from "../../util/dateFormat.js";
function PostListItem({ post }) {
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
export default function PostList() {
  const posts = useSelector(selectAllPosts);
  const postList = posts.map((post) => {
    return <PostListItem id={post.id} key={post.id} post={post} />;
  });

  return (
    <div className={styles.postList}>
      <ul className={styles.posts}>{postList}</ul>
    </div>
  );
}
