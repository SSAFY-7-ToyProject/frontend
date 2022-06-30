import React from "react";
import styles from "./css/Signup.module.css";

export default function SignUp() {
  return (
    <div className={styles.signup}>
      <div className={styles.user}>
        <header className={styles.user__header}>
          <h1 className={styles.user__title}>회원 가입하기</h1>
        </header>

        <form className={styles.form}>
          <div className={styles.form__group}>
            <label htmlFor="username" className={styles.label}>
              이름
            </label>
            <input type="text" className={styles.form__input} />
          </div>

          <div className={styles.form__group}>
            <label htmlFor="phone" className={styles.label}>
              이메일
            </label>
            <input type="email" className={styles.form__input} />
            <small className={styles.error}>Error message</small>
          </div>

          <div className={styles.form__group}>
            <label htmlFor="phone" className={styles.label}>
              비밀번호
            </label>
            <input type="password" className={styles.form__input} />
            <small className={styles.error}>Error message</small>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="phone" className={styles.label}>
              비밀번호 확인
            </label>
            <input type="password" className={styles.form__input} />
            <small className={styles.error}>Error message</small>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="phone" className={styles.label}>
              생년월일
            </label>
            <small className={styles.error}>Error message</small>
            <input
              type="text"
              placeholder="ex) 970101"
              className={styles.form__input}
            />
            <small className={styles.error}>Error message</small>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="phone" className={styles.label}>
              전화번호
            </label>
            <input
              type="text"
              placeholder="ex) 010-1234-1234"
              className={styles.form__input}
            />
            <small className={styles.error}>Error message</small>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="gender" className={styles.label}>
              성별
            </label>
            <input type="radio" name="gender" value="apple" /> 남자
            <input type="radio" name="gender" value="banana" /> 여자
          </div>

          <button className={styles.btn} type="submit">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
