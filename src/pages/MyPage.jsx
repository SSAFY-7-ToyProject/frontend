import React from "react";

export default function MyPage() {
  return (
    <div>
      마이페이지
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>이름</td>
            <td>김싸피</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>test@aaa.aaa</td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              passsword <button> 변경</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
