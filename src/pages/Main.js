import "./Main.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ArtItem from "../components/ArtItem";
import GroupItem from "../components/GroupItem";

import { ArtWorks, GroupExhibitions } from "../TestCases";
//import axios from "axios";

const Main = () => {
  const category = [
    //장르 조회
  ]; // 나중에 구현
  const [arts, setArts] = useState(null);
  const [groups, setGroups] = useState(null);

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
        let filteredArts = [];
        let filteredGroups = [];
        for (let i = 0; i < 3; i++) {
          filteredArts.push(ArtWorks[i]);
          filteredGroups.push(GroupExhibitions[i]);
        }
        setArts(filteredArts);
        setGroups(filteredGroups);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

  if (!arts) {
    return null;
  }

  return (
    <div className="Main">
      <div className="Banner">배너</div>
      <div className="Title">단체 전시관</div>
      <ul className="ArtList">
        {groups.map((groups) => (
          <GroupItem arts={groups} key={groups.id} />
        ))}
      </ul>
      <div className="Title">개인 전시관</div>
      <ul className="ArtList">
        {arts.map((arts) => (
          <ArtItem arts={arts} key={arts.id} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
