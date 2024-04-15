import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import art from "../assets/noimage.png";
import "./AboutArt.scss";
import ArtWorks from "../TestCases";

const AboutArt = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const name = location.state.name;

  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className="AboutArt">
      <div className="Frame">
        <div className="Line"></div>
        <div className="Content">
          <div className="Image">
            <img src={art} />
          </div>
          <div className="VerticalLine"></div>
          <div className="Info1">{name}작가 크기 제작방식 판매가</div>
        </div>
        <div className="Line"></div>
      </div>
      <div className="Frame">
        <div className="Line"></div>
        <div className="Content">
          <div className="Info2">작품소개</div>
          <div className="VerticalLine"></div>
          <div className="Info2">작가소개,작가의 한마디</div>
        </div>
        <div className="Line"></div>
        <button className="Back" onClick={onClick}>
          돌아가기
        </button>
      </div>
    </div>
  );
};

export default AboutArt;
