import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./css/MainPage.module.css";

export default function MainPage({ setHeaderShow }) {
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderShow(false);
    return () => setHeaderShow(true);
  }, []);

  const movePage = () => {
    navigate("/post");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.infos}>
          <h1>Main Page - App name area</h1>
          <div className={styles.info}>소개 영역</div>
          <button className={styles.loginBtn} onClick={movePage}>
            Enter
          </button>
        </div>
      </div>
      <div className={styles.weatherImg}></div>
    </div>
  );
}
