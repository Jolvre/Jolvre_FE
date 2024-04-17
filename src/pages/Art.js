import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import art from "../assets/noimage.png";
import "./Art.scss";
import ArtWorks from "../TestCases";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
//import { IoChatbubblesOutline } from "react-icons/io5";
import { PiWechatLogoLight } from "react-icons/pi";

const Art = () => {
  const location = useLocation();

  const id = location.state.id;
  const name = location.state.name;
  const artist = location.state.artist;

  return (
    <div className="Art">
      <div className="ImageFrame">
        <div className="Image">
          <img src={art} />
        </div>
        <nav className="Menu">
          <div className="NeedBubbler">
            <IoPersonCircleOutline size={46} />
            <div className="Bubbler">서울시립대학교</div>
          </div>
          <Link
            to={`/arts/${artist}/${name}/aboutart`}
            state={{ artist: artist, name: name, id: id }}
          >
            <div>
              <IoInformationCircleOutline size={50} />
            </div>
          </Link>
          <Link
            to={`/arts/${artist}/${name}/diary`}
            state={{ artist: artist, name: name, id: id }}
          >
            <div>
              <SlNotebook size={33} />
            </div>
          </Link>
          <div className="NeedBubbler">
            <PiWechatLogoLight size={43} />
            <div className="Bubbler">{"판매상태"}</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Art;
