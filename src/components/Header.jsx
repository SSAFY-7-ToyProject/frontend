import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./css/header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice.js";

export default function Header({ isLogined }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isDiary = location.pathname.split("/").length == 3 ? true : false;
  const dispatch = useDispatch(logout);

  if (
    isDiary ||
    location.pathname === "/" ||
    location.pathname === "/write" ||
    location.pathname === "/login" ||
    location.pathname === "/signup"
  )
    return;

  const onLogout = () => {
    console.log("logout");
    dispatch(logout);
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      {/* <Link to="/" className={styles.nav}>
        <span>home</span>
      </Link> */}
      {/* <Link to="/login" className={styles.nav}>
        <span>login</span>
      </Link> */}
      {/* <Link to="/signup" className={styles.nav}>
        <span>signup</span>
      </Link> */}
      <Link to="/post" className={styles.nav}>
        <span>모든 일기</span>
      </Link>
      <Link to="/mydiary" className={styles.nav}>
        <span>My Diary</span>
      </Link>
      <Link to="/write" className={styles.nav}>
        <span>일기 쓰기</span>
      </Link>
      {/* <Link to="/mypage" className={styles.nav}>
        <span>mypage</span>
      </Link> */}

      {isLogined ? (
        <div className={styles.nav} onClick={onLogout}>
          <span>Log out</span>
        </div>
      ) : (
        <Link to="/login" className={styles.nav}>
          <span>Log In</span>
        </Link>
      )}
    </header>
  );
}
