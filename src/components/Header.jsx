import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.nav}>
        <span>home</span>
      </Link>
      {/* <Link to="/login" className={styles.nav}>
        <span>login</span>
      </Link> */}
      {/* <Link to="/signup" className={styles.nav}>
        <span>signup</span>
      </Link> */}
      <Link to="/post" className={styles.nav}>
        <span>My Diary</span>
      </Link>
      <Link to="/write" className={styles.nav}>
        <span>일기 쓰기</span>
      </Link>
      <Link to="/mypage" className={styles.nav}>
        <span>mypage</span>
      </Link>
      <div className={styles.nav}>
        <span>Log out</span>
      </div>
    </header>
  );
}
