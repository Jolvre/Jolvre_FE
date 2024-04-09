import React, { useState } from "react";
import "./ArtItem.scss";
import { Link } from "react-router-dom";
//import axios from "axios";

const ArtItem = ({ arts }) => {
  const name = arts.name;
  const id = arts.id;
  const artist = arts.artist;
  /*
  const picturepath =
    "https://cinema-prod.s3.ap-northeast-2.amazonaws.com/movies/" +
    name +
    ".jpg";*/
  const picturepath = "zhanghao.jpg";

  return (
    <>
      <li className="ArtItem" style={{ zIndex: 50 }}>
        <Link to={`/arts/${artist}/${name}`} state={{ name: name, id: id }}>
          <div className="image">
            <img src={picturepath} />
          </div>
        </Link>
      </li>
    </>
  );
};

export default ArtItem;
