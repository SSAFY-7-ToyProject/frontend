import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./css/header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice.js";
import { NavLink } from "react-router-dom";

export default function Header({ isLogined }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isDiary = location.pathname.split("/").length === 3 ? true : false;
  const dispatch = useDispatch();

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
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      {/* <NavLink to="/" className={styles.nav}>
        <span>home</span>
      </NavLink> */}
      {/* <NavLink to="/login" className={styles.nav}>
        <span>login</span>
      </NavLink> */}
      {/* <NavLink to="/signup" className={styles.nav}>
        <span>signup</span>
      </NavLink> */}
      <NavLink
        to="/post"
        className={({ isActive }) =>
          isActive ? `${styles.nav} ${styles.active} ` : `${styles.nav}`
        }
      >
        <span>All</span>
      </NavLink>
      <NavLink
        to="/mydiary"
        className={({ isActive }) =>
          isActive ? `${styles.nav} ${styles.active} ` : `${styles.nav}`
        }
      >
        <span>My Diary</span>
      </NavLink>
      <NavLink
        to="/write"
        className={({ isActive }) =>
          isActive ? `${styles.nav} ${styles.active} ` : `${styles.nav}`
        }
      >
        <span>Write</span>
      </NavLink>
      {/* <NavLink to="/mypage" className={styles.nav}>
        <span>mypage</span>
      </NavLink> */}

      {isLogined ? (
        <div className={styles.nav} onClick={onLogout}>
          <span>Log out</span>
        </div>
      ) : (
        <NavLink to="/login" className={styles.nav}>
          <span>Log In</span>
        </NavLink>
      )}
    </header>
  );
}
