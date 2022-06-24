import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.nav}>
        <span>home</span>
      </Link>
      <Link to="/login" className={styles.nav}>
        <span>login</span>
      </Link>
      <Link to="/signup" className={styles.nav}>
        <span>signup</span>
      </Link>
      <Link to="/mypage" className={styles.nav}>
        <span>mypage</span>
      </Link>
    </header>
  );
}
