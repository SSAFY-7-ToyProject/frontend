import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="">헤더</div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/login">
        <button>login</button>
      </Link>
      <Link to="/signup">
        <button>signup</button>
      </Link>
      <Link to="/mypage">
        <button>mypage</button>
      </Link>
    </header>
  );
}
