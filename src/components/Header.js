import "./Header.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import { Notices } from "../TestCases";
import NoticeItem from "./NoticeItem";

const Header = () => {
  const notices = Notices;

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
        <Link to="/mypage/myinformation">
          <div>마이페이지</div>
        </Link>
        <Link to="/login">
          <div>로그인</div>
        </Link>
      </div>
      <button className="Notice">
        <HiOutlineBell size={35} />
        <div className="Bubbler">
          {notices.map((notices) => (
            <NoticeItem notices={notices} key={notices.id} />
          ))}
        </div>
      </button>
    </header>
  );
};

export default Header;
