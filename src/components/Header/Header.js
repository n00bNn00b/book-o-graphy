import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="logo.png" alt="" />
        </div>
        <div>
          <h1>Book O' Graphy</h1>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
