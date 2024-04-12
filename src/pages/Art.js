import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import art from "../assets/zhanghao.jpg";
import "./Art.scss";
import ArtWorks from "../TestCases";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { IoChatbubblesOutline } from "react-icons/io5";

const Art = () => {
  const location = useLocation();

  const artId = location.state.id;
  const artName = location.state.name;
  return (
    <div className="Art">
      <div className="ImageFrame">
        <div className="Image">
          <img src={art} />
        </div>
        <nav className="Menu">
          <div className="AboutArtist">
            <IoPersonCircleOutline size={46} />
            <div className="Bubbler">서울시립대학교</div>
          </div>
          <Link to="/aboutart">
            <div>
              <IoInformationCircleOutline size={50} />
            </div>
          </Link>
          <Link to="/diary">
            <div>
              <SlNotebook size={33} />
            </div>
          </Link>
          <div>
            <IoChatbubblesOutline size={35} />
          </div>
        </nav>
      </div>
      <div className="AboutArtist"></div>
    </div>
  );
};

export default Art;
