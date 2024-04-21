import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CommunityItem from "../components/CommunityItem";
import "./Bulletin.scss";
import { TestDiaries } from "../TestCases";

const Community = () => {
  //const [diaries, setDiaries] = useState(null);

  //let filteredDiaries = [];
  //for (let i = 0; i < TestDiaries.length; i++) {
  //  filteredDiaries.push(TestDiaries[i]);
  //}
  //setDiaries(filteredDiaries);
  const diaries = TestDiaries;

  return (
    <div className="Diary">
      <div className="Bulletin">
        <div className="Title">
          <div className="Letter">
            <h1>커뮤니티</h1>
          </div>
          <Link style={{ textDecoration: "none" }} to={`/community/create`}>
            <div className="CreateButton">글쓰기</div>
          </Link>
        </div>

        <div className="Line"></div>
        <div className="StartContent">
          <div className="info4">제목</div>
          <div className="info5">작성자</div>
          <div className="info3">등록일</div>
        </div>
        <div className="Line"></div>
        <div className="Content">
          {diaries.map((diaries) => (
            <CommunityItem diaries={diaries} key={diaries.id} />
          ))}
        </div>
        <div className="Line"></div>
      </div>
    </div>
  );
};

export default Community;
