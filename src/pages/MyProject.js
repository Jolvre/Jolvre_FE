import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SubArtItem from "../components/SubArtItem";
import "./MyProject.scss";
import { ArtWorks } from "../TestCases";

const MyProject = () => {
  //const [diaries, setDiaries] = useState(null);

  //let filteredDiaries = [];
  //for (let i = 0; i < TestDiaries.length; i++) {
  //  filteredDiaries.push(TestDiaries[i]);
  //}
  //setDiaries(filteredDiaries);
  const [arts, setArts] = useState(null);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(null);

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const executeCallback = () => {
        savedCallback.current();
      };

      const timerId = setInterval(executeCallback, delay);

      return () => clearInterval(timerId);
    }, []);
  };

  useInterval(() => {
    const fetchData = async () => {
      try {
        let filteredArts = [];

        for (let i = 0; i < 2; i++) {
          filteredArts.push(ArtWorks[i]);
        }
        setArts(filteredArts);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

  return (
    <div className="Diary">
      <div className="MyProject">
        <div className="Title">
          <div className="Letter">
            <h1>내 프로젝트</h1>
          </div>
          <Link
            style={{ textDecoration: "none" }}
            to={`/mypage/myproject/upload`}
          >
            <div className="CreateButton">새로 만들기</div>
          </Link>
        </div>
        <div className="Line"></div>
        <ul className="ArtList">
          {arts && arts.map((arts) => <SubArtItem arts={arts} key={arts.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default MyProject;
