import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PerBulletin.scss";
import { TestDiaries } from "../TestCases";

const PerCommunity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state.id; //내가쓴글들 id
  const title = location.state.title;
  const date = location.state.date;
  const writer = location.state.artist;

  //const [diaries, setDiaries] = useState(null);

  //let filteredDiaries = [];
  //for (let i = 0; i < TestDiaries.length; i++) {
  //  filteredDiaries.push(TestDiaries[i]);
  //}
  //setDiaries(filteredDiaries);
  const diaries = TestDiaries;

  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className="PerDiary">
      <div className="PerBulletin">
        <div className="Title">
          <div className="RealTitle">{title}</div>
          <div className="Date">
            작성자: {writer} &nbsp; &nbsp;{date}
          </div>
        </div>
        <div className="Line"></div>
        <div className="Content">백에서 내용 불러오기</div>
        <div className="Line"></div>
        <div className="Foot">
          <button className="Back" onClick={onClick}>
            목록
          </button>
        </div>
        <div className="SubTitle">댓글</div>
        <div className="Line" style={{ backgroundColor: "#6e6e6e" }}></div>
      </div>
    </div>
  );
};

export default PerCommunity;
