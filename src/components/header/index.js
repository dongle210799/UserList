import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="title">User list</div>
      <div className="search">
        <input type="text"></input>
        <button>search</button>
      </div>
    </div>
  );
}
