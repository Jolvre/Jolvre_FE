import React, { useState } from "react";
import "./SubArtItem.scss";
import { Link } from "react-router-dom";
//import axios from "axios";

const SubArtItem = ({ arts }) => {
  const name = arts.name;
  const id = arts.id;
  const artist = arts.artist;
  /*
  const picturepath =
    "https://cinema-prod.s3.ap-northeast-2.amazonaws.com/movies/" +
    name +
    ".jpg";*/
  const picturepath = "noimage.png";

  return (
    <Link
      to={`/arts/${artist}/${name}`}
      state={{ artist: artist, name: name, id: id }}
    >
      <li className="SubArtItem" style={{ zIndex: 50 }}>
        <div className="image">
          <img src={picturepath} />
        </div>
      </li>
    </Link>
  );
};

export default SubArtItem;
