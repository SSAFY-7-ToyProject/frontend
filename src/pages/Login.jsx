import React, { useEffect, useState } from "react";
import styles from "./css/SignupLogin.module.css";
export default function Login({ setHeaderShow }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    setHeaderShow(false);
    return () => setHeaderShow(true);
  }, []);
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
    console.log(form);
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
        </form>
      </div>
    </div>
  );
}
