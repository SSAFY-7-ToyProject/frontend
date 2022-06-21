import React from "react";

export default function Login() {
  return (
    <div>
      로그인페이지
      <form action="">
        <div>
          <label htmlFor="email">email: </label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input type="password" />
        </div>
        <button>로그인</button>
      </form>
    </div>
  );
}
