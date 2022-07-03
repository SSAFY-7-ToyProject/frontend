import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./css/MainPage.module.css";

export default function MainPage({ setHeaderShow }) {
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderShow(false);
    return () => setHeaderShow(true);
  }, []);

  const movePage = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.infos}>
          <h1>내 마음 일기 예보</h1>
          <div className={styles.info}>소개 영역</div>
          <button
            className={styles.loginBtn}
            onClick={() => {
              movePage("login");
            }}
          >
            로그인
          </button>
          <button
            className={styles.loginBtn}
            onClick={() => {
              movePage("signup");
            }}
          >
            회원가입
          </button>
          <button
            className={styles.loginBtn}
            onClick={() => {
              movePage("post");
            }}
          >
            Enter
          </button>
        </div>
      </div>
      <div className={styles.weatherImg}></div>
    </div>
  );
}
