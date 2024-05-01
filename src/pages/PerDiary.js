import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PerBulletin.scss";
import { TestDiaries } from "../TestCases";

const PerDiary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state.id; //diary id
  const title = location.state.title;
  const date = location.state.date;
  const name = location.state.name;

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
        <div className="SubTitle">
          {name}의 일기장 / {title}
        </div>
        <div className="Title">
          <div className="RealTitle">{title}</div>
          <div className="Date">{date}</div>
        </div>

        <div className="Line"></div>
        <div className="Content">백에서 내용 불러오기</div>
        <div className="Line"></div>
        <div className="Foot">
          <button className="Back" onClick={onClick}>
            목록
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerDiary;
