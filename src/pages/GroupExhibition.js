import "./Main.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import GroupItem from "../components/GroupItem";
import { GroupExhibitions } from "../TestCases";
//import axios from "axios";

const GroupExhibition = () => {
  const category = [
    //장르 조회
  ]; // 나중에 구현
  const [groups, setGroups] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [categoryItem, setCategoryItem] = useState(category[0]);

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

  const onChange = (id) => {
    setCategoryItem(category[id]);
  };

  useInterval(() => {
    const fetchData = async () => {
      try {
        /*
        const response = await axios.get("/movies");
        let filteredTxs = [];
        for (let i = 0; i < response.data.movies.length; i++) {
          if (categoryItem.state === null)
            filteredTxs.push(response.data.movies[i]);
          else if (
            response.data.movies[i].genre === categoryItem.state ||
            response.data.movies[i].rating === categoryItem.state
          )
            filteredTxs.push(response.data.movies[i]);
        }
        setTxs(filteredTxs);
        */
        let filteredGroups = [];
        let filteredRecommend = [];
        for (let i = 0; i < GroupExhibitions.length; i++) {
          filteredGroups.push(GroupExhibitions[i]);
          if (filteredRecommend.length < 3) {
            filteredRecommend.push(GroupExhibitions[i]);
          }
        }
        setGroups(filteredGroups);
        setRecommend(filteredRecommend);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

  if (!groups) {
    return null;
  }

  return (
    <div className="Main">
      <div className="Recommend">
        <div className="Title">이번 달 추천</div>

        <ul className="ArtList">
          {recommend.map((groups) => (
            <GroupItem arts={groups} key={groups.id} />
          ))}
        </ul>
      </div>
      <ul className="ArtList">
        {groups.map((groups) => (
          <GroupItem arts={groups} key={groups.id} />
        ))}
      </ul>
    </div>
  );
};

export default GroupExhibition;
