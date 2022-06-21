import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="">헤더</div>
      <Link to="/">
        <button>home</button>
      </Link>
    </header>
  );
}
