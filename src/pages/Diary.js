import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DiaryItem from "../components/DiaryItem";
import "./Bulletin.scss";
import { TestDiaries } from "../TestCases";

const Diary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state.id;
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
    <div className="Diary">
      <div className="Bulletin">
        <div className="Title">
          <h1>{name}의 일기장</h1>
        </div>
        <div className="Line"></div>
        <div className="StartContent">
          <div className="info1">번호</div>
          <div className="info2">제목</div>
          <div className="info3">등록일</div>
        </div>
        <div className="Line"></div>
        <div className="Content">
          {diaries.map((diaries) => (
            <DiaryItem diaries={diaries} key={diaries.id} />
          ))}
        </div>
        <div className="Line"></div>
        <button className="Back" onClick={onClick}>
          돌아가기
        </button>
      </div>
    </div>
  );
};

export default Diary;
