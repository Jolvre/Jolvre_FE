import "./Main.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ArtItem from "../components/ArtItem";
import { ArtWorks } from "../TestCases";
//import axios from "axios";

const PersonalExhibition = () => {
  const category = [
    //장르 조회
  ]; // 나중에 구현
  const [arts, setArts] = useState(null);
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
        let filteredArts = [];
        let filteredRecommend = [];

        for (let i = 0; i < ArtWorks.length; i++) {
          filteredArts.push(ArtWorks[i]);
          if (filteredRecommend.length < 3) {
            filteredRecommend.push(ArtWorks[i]);
          }
        }
        setArts(filteredArts);
        setRecommend(filteredRecommend);
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
      <div className="Recommend">
        <div className="Title">이번 달 추천</div>

        <ul className="ArtList">
          {recommend.map((arts) => (
            <ArtItem arts={arts} key={arts.id} />
          ))}
        </ul>
      </div>
      <ul className="ArtList">
        {arts.map((arts) => (
          <ArtItem arts={arts} key={arts.id} />
        ))}
      </ul>
    </div>
  );
};

export default PersonalExhibition;
