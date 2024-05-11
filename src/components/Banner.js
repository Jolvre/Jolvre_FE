// swiper 삭제하기
import React, { useState, useEffect } from "react";

import banner1 from "../assets/10412734.jpg";
import banner2 from "../assets/7452709.jpg";
import banner3 from "../assets/7413395.jpg";
import "./Banner.scss";

const Banner = () => {
  const [select, setSelect] = useState(0);
  const onClick0 = () => {
    setSelect(0);
  };
  const onClick1 = () => {
    setSelect(1);
  };
  const onClick2 = () => {
    setSelect(2);
  };

  const [intervalId, setIntervalId] = useState(null);

  const autoMoveSlide = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }

    setIntervalId(
      setInterval(() => {
        setSelect((select + 1) % 3);
      }, 5000)
    );
  };

  useEffect(() => {
    autoMoveSlide();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="Container" style={{ overflow: "hidden" }}>
        <div
          className="Banner"
          style={{
            transform:
              select === 0
                ? "none"
                : select === 1
                  ? "translate(-100vw)"
                  : "translate(-200vw)",
          }}
        >
          <div className="Item">
            <img src={banner1} />
          </div>
          <div className="Item">
            <img src={banner2} />
          </div>
          <div className="Item">
            <img src={banner3} />
          </div>
        </div>
        <div className="Buttons">
          <button
            className="gotodif"
            onClick={onClick0}
            style={{
              backgroundColor: select === 0 ? "#bdbdbd" : "#585858",
            }}
          ></button>
          <button
            className="gotodif"
            onClick={onClick1}
            style={{
              backgroundColor: select === 1 ? "#bdbdbd" : "#585858",
            }}
          ></button>
          <button
            className="gotodif"
            onClick={onClick2}
            style={{
              backgroundColor: select === 2 ? "#bdbdbd" : "#585858",
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
