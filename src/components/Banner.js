// swiper 삭제하기
import React, { useState } from "react";

import banner1 from "../assets/7413395.jpg";
import banner2 from "../assets/7452709.jpg";
import banner3 from "../assets/10412734.jpg";
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
          <button className="gotodif" onClick={onClick0}></button>
          <button className="gotodif" onClick={onClick1}></button>
          <button className="gotodif" onClick={onClick2}></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
