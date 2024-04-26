import "./Navbar.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <header className="Navbar">
      <div className="ShowMenu">
        <div className="Title">마이페이지</div>
        <div className="Line"></div>
        <Link to="/mypage/myinformation">
          <div>내 정보</div>
        </Link>
        <Link to="/mypage/myproject">
          <div>내 프로젝트</div>
        </Link>
        <Link to="/community">
          <div>초대장 만들기</div>
        </Link>
        <Link to="/FAQ">
          <div>단체 전시관</div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
