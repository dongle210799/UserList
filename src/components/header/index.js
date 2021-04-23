import React, { useState } from "react";
import "./header.css";
export default function Header() {
  const [value, setValue] = useState("");
  const handleChangeSeacrh = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="header">
      <div className="title">User list</div>
      <div className="search">
        <input
          type="text"
          value={value}
          placeholder="seacrh by name "
          onChange={handleChangeSeacrh}
        ></input>
        <button>search</button>
      </div>
    </div>
  );
}
