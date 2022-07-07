import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logIn } from "../store/authSlice.js";
import styles from "./css/SignupLogin.module.css";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("login");
    const form = { email, password };
    dispatch(logIn(form));
    navigate("/post");
  };

  const onTest = (event) => {
    event.preventDefault();
    console.log("login");
    const form = { email: "bbb@bbb.bbb", password: "12345678" };
    dispatch(logIn(form));
    navigate("/post");
  };

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <header className={styles.user__header}>
          <h1 className={styles.user__title}>로그인</h1>
        </header>
        <form className={styles.form}>
          <div className={styles.form__group}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="text"
              className={styles.form__input}
              name="email"
              required
              onChange={onChange}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="password" className={styles.label}>
              password
            </label>
            <input
              type="text"
              className={styles.form__input}
              name="password"
              required
              onChange={onChange}
            />
          </div>
          <button className={styles.btn} onClick={onSubmit}>
            로그인하기
          </button>
          <button className={styles.btn} onClick={onTest}>
            테스트로그인 (email:bbb@bbb.bbb, pw:12345678)
          </button>
        </form>
      </div>
    </div>
  );
}
