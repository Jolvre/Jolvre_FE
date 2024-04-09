import "./Footer.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import instagram from "../assets/icon_instagram.png";
import facebook from "../assets/icon_facebook.png";
import youtube from "../assets/icon_youtube.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="ShowMenu">
        <button>이용약관</button>
        <button>개인정보처리방침</button>
        <button>로그아웃</button>
      </div>
      <div className="Info">
        <div className="Company">
          홍보 문의 | jolvre.uos.ac.kr<br></br>
          기술 지원 | jolvrehelp.uos.ac.kr
        </div>
        <div className="SocialMedia">
          SOCIAL
          <div className="Image">
            <a
              href="https://www.instagram.com/uos_official_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} />
            </a>
            <a
              href="https://www.facebook.com/UniversityOfSeoul/?locale=ko_KR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} />
            </a>
            <a
              href="https://www.youtube.com/@universityofseoul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} />
            </a>
          </div>
        </div>
      </div>
      <p>COPYRIGHT © Jolvre. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;
