import React from "react";

export default function SignUp() {
  return (
    <div>
      회원가입페이지
      <form action="">
        <div>
          <label htmlFor="email">email: </label>
          <input type="text" id="email" />
          <button>중복확인</button>
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="usename">usename: </label>
          <input type="text" id="usename" />
        </div>
        <div>
          <label htmlFor="telephone">전화번호: </label>
          <select name="telephone" id="telephone">
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
          </select>
          <input type="text" />
          - <input type="text" />
        </div>
        <button>회원가입</button>
      </form>
    </div>
  );
}
