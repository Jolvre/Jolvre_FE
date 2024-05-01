import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SubGroupItem from "../components/SubGroupItem";
import "./MyProject.scss";
import { GroupExhibitions } from "../TestCases";

const MyGroup = () => {
  //const [diaries, setDiaries] = useState(null);

  //let filteredDiaries = [];
  //for (let i = 0; i < TestDiaries.length; i++) {
  //  filteredDiaries.push(TestDiaries[i]);
  //}
  //setDiaries(filteredDiaries);
  const [groups, setGroups] = useState(null);

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
        let filteredGroups = [];

        for (let i = 0; i < 2; i++) {
          filteredGroups.push(GroupExhibitions[i]);
        }
        setGroups(filteredGroups);
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
            <h1>내 단체 전시관</h1>
          </div>
          <Link style={{ textDecoration: "none" }} to={`/community/create`}>
            <div className="CreateButton">새로 만들기</div>
          </Link>
        </div>
        <div className="Line"></div>
        <ul className="ArtList">
          {groups &&
            groups.map((arts) => <SubGroupItem arts={arts} key={arts.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default MyGroup;
