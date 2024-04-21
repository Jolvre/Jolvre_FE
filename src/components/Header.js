import "./Header.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  return (
    <header className="Header">
      <div className="ShowMenu">
        <Link to="/">
          <div className="SiteName">Jolvre 졸브르</div>
        </Link>
        <Link to="/groups">
          <div>단체 전시관</div>
        </Link>
        <Link to="/arts">
          <div>개인 전시관</div>
        </Link>
        <Link to="/community">
          <div>커뮤니티</div>
        </Link>
        <Link to="/FAQ">
          <div>FAQ</div>
        </Link>
        <Link to="/">
          <div>마이페이지</div>
        </Link>
        <Link to="/login">
          <div>로그인</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
