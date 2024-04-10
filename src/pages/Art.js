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
          <div>
            <IoPersonCircleOutline size={50} />
          </div>
          <div>
            <IoInformationCircleOutline size={50} />
          </div>
          <div>
            <SlNotebook size={33} />
          </div>
          <div>
            <IoChatbubblesOutline size={35} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Art;
