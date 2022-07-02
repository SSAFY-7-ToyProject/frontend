import React, { useMemo, useState, useCallback, useEffect } from "react";
import styles from "./css/SignupLogin.module.css";
import validate from "../util/validate.js";

const NoticeMessage = React.memo(({ info, className }) => {
  const classNames = [className, info.isError ? styles.error : ""]
    .join(" ")
    .trim();
  return <span className={classNames}>{info.message}</span>;
});

export default function SignUp({ setHeaderShow }) {
  const [username, setUsername] = useState({ isError: true });
  const [email, setEmail] = useState({ isError: true });
  const [password, setPassword] = useState({ isError: true });
  const [password2, setPassword2] = useState({ isError: true });
  const [phone, setPhone] = useState({ isError: true });
  const [birth, setBirth] = useState({ isError: true });
  const [gender, setGender] = useState({ isError: true });
  const [error, setError] = useState({
    isError: true,
    message: "",
  });
  useEffect(() => {
    setHeaderShow(false);
    return () => setHeaderShow(true);
  }, []);
  const onChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;
    switch (name) {
      case "username":
        return setUsername({ value, message: "", isError: false });
      case "email":
        if (!validate(name, value)) {
          setEmail({
            value,
            message: "올바른 이메일 형식으로 작성해주세요",
            isError: true,
          });
        } else {
          setEmail({
            value,
            message: "올바른 이메일 형식입니다.",
            isError: false,
          });
        }
        return;
      case "password":
        console.log("password", name, value);
        if (!validate(name, value)) {
          setPassword({
            value,
            isError: true,
            message: "비밀번호는 8글자 이상이어야 합니다.",
          });
        } else {
          setPassword({
            value,
            message: "올바른 비밀번호 길이입니다.",
            isError: false,
          });
        }
        return;
      case "password2":
        if (password.value === value) {
          setPassword2({
            value,
            message: "비밀번호가 일치합니다.",
            isError: false,
          });
        } else {
          setPassword2({
            value,
            message: "비밀번호가 일치하지 않습니다.",
            isError: true,
          });
        }

        return;
      case "birth":
        if (!validate(name, value)) {
          setBirth({
            value,
            message: "생년월일이 양식과 일치하지 않습니다.",
            isError: true,
          });
        } else {
          setBirth({ value, message: "올바른 생년월일.", isError: false });
        }
        return;
      case "phone":
        if (!validate(name, value)) {
          setPhone({
            value,
            message: "올바르지 않은 전화번호 양식",
            isError: true,
          });
        } else {
          setPhone({ value, message: "사용 가능한 전화번호", isError: false });
        }
        return;
      case "gender":
        console.log(value);
        return setGender({ value, message: "", isError: false });
    }
  };

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const form = [username, email, password, password2, birth, phone, gender];

      const hasError = form.some((item) => {
        return item.isError;
      });

      if (!hasError) {
        setError({ isError: false, message: "" });
        const res = {
          email: email.value,
          password: password.value,
          name: username.value,
          birth: {
            birthYear: birth.value.substr(0, 2),
            birthMonth: birth.value.substr(2, 2),
            birthDay: birth.value.substr(4, 2),
          },
          gender: gender.value,
          phoneNumber: phone.value,
        };
        console.log("입력 완료 : ", res);
      } else {
        console.log("입력 부족");
        setError({
          isError: true,
          message: "모든 항목을 올바르게 기입해주세요.",
        });
      }
    },
    [username, email, password, password2, birth, phone, gender]
  );

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <header className={styles.user__header}>
          <h1 className={styles.user__title}>회원 가입하기</h1>
        </header>

        <form className={styles.form}>
          <div className={styles.form__group}>
            <label htmlFor="username" className={styles.label}>
              이름
            </label>
            <input
              type="text"
              className={styles.form__input}
              onChange={onChange}
              name="username"
              required
            />
          </div>

          <div className={styles.form__group}>
            <label htmlFor="email" className={styles.label}>
              이메일
            </label>
            <input
              type="email"
              className={styles.form__input}
              onChange={onChange}
              name="email"
              required
            />

            <small className={styles.info}>
              <NoticeMessage info={email} className={styles.info} />
            </small>
          </div>

          <div className={styles.form__group}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <input
              type="password"
              className={styles.form__input}
              onChange={onChange}
              name="password"
              required
            />
            <small className={styles.info}>
              <NoticeMessage info={password} className={styles.info} />
            </small>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="password2" className={styles.label}>
              비밀번호 확인
            </label>
            <input
              type="password"
              className={styles.form__input}
              onChange={onChange}
              name="password2"
              required
            />
            <small className={styles.info}>
              <NoticeMessage info={password2} className={styles.info} />
            </small>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="phone" className={styles.label}>
              생년월일
            </label>

            <input
              type="text"
              placeholder="ex) 970101"
              className={styles.form__input}
              onChange={onChange}
              name="birth"
              required
            />
            <small className={styles.info}>
              <NoticeMessage info={birth} className={styles.info} />
            </small>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="phone" className={styles.label}>
              전화번호
            </label>
            <input
              type="text"
              placeholder="ex) 010-1234-1234"
              className={styles.form__input}
              onChange={onChange}
              name="phone"
              required
            />
            <small className={styles.info}>
              <NoticeMessage info={phone} className={styles.info} />
            </small>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="gender" className={styles.label}>
              성별
            </label>
            <input
              type="radio"
              name="gender"
              value="MALE"
              onChange={onChange}
              required
            />{" "}
            남자
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              onChange={onChange}
            />
            여자
          </div>

          <div className={styles.form__group}>
            <small className={styles.info}>
              <NoticeMessage info={error} className={styles.info} />
            </small>
            <button className={styles.btn} type="submit" onClick={onSubmit}>
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
