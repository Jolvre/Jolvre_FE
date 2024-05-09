import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import art from "../assets/noimage.png";
import "./AboutArt.scss";
import ArtWorks from "../TestCases";
import axios from "axios";

const AboutArt = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const exhibitId = location.state.id;

  const [inputTitle, setInputTitle] = useState("");
  const [inputAuthorWord, setInputAuthorWord] = useState("");
  const [inputIntroduction, setInputIntroduction] = useState("");
  const [inputSize, setInputSize] = useState("");
  const [inputProductionMethod, setInputProductionMethod] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputForSale, setInputForSale] = useState(0);
  const [inputThumbnail, setInputThumbnail] = useState(null);
  const [inputImages, setInputImages] = useState(null);

  const artwork = ArtWorks[0];

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
        //const res1 = await axios.get(`/api/v1/exhibit/${exhibitId}`);
        setInputTitle(artwork.title);
        setInputAuthorWord(artwork.authorWord);
        setInputIntroduction(artwork.introduction);
        setInputSize(artwork.size);
        setInputProductionMethod(artwork.productionMethod);
        setInputPrice(artwork.price);
        setInputForSale(artwork.forSale);
        //setImageUrl, 썸네일
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

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
          <div className="Info1">작가, 크기, 제작방식, 판매가</div>
        </div>
        <div className="Line"></div>
      </div>
      <div className="Frame">
        <div className="Line"></div>
        <div className="Content">
          <div className="Info2">작품소개</div>
          <div className="VerticalLine"></div>
          <div className="Info2">작가소개, 작가의 한마디</div>
        </div>
        <div className="Line"></div>
        <div className="Foot">
          <button className="Back" onClick={onClick}>
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutArt;
