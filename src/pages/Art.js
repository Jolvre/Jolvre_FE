import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import art from "../assets/noimage.png";
import "./Art.scss";
import ArtWorks from "../TestCases";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { PiWechatLogoLight } from "react-icons/pi";

const Art = () => {
  const location = useLocation();

  const id = location.state.id;
  const name = location.state.name;
  const artist = location.state.artist;
  const me = "aaa"; //sessionStorage.getItem("user_id");

  return (
    <div className="Art">
      <div className="Frame">
        <div className="TitleFrame">
          <div className="ArtName">{name}</div>
          <div className="SellStatus">{"판매 중"}</div>
        </div>
        <div className="ImageFrame">
          <div className="Image">
            <img src={art} />
          </div>
          <nav className="Menu">
            <button className="NeedBubbler">
              <IoPersonCircleOutline size={46} />
              <div className="Bubbler">서울시립대학교</div>
            </button>
            <div className="Name">작가</div>
            <Link
              to={`/arts/${artist}/${name}/aboutart`}
              state={{ artist: artist, name: name, id: id }}
            >
              <div className="Icon">
                <IoInformationCircleOutline size={50} />
              </div>
            </Link>
            <div className="Name">소개</div>
            <Link
              to={`/arts/${artist}/${name}/diary`}
              state={{ artist: artist, name: name, id: id }}
            >
              <div className="Icon">
                <SlNotebook size={33} />
              </div>
            </Link>
            <div className="Name">일기장</div>
            <Link
              to={`/arts/${artist}/${name}/${me}/chat`}
              state={{ artist: artist, name: name, me: me }}
            >
              <div className="Icon">
                <PiWechatLogoLight size={35} />
              </div>
            </Link>
            <div className="Name">채팅</div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Art;
