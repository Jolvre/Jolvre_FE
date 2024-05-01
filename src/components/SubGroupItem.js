import React, { useState } from "react";
import "./SubArtItem.scss";
import { Link } from "react-router-dom";
//import axios from "axios";

const SubGroupItem = ({ arts }) => {
  const name = arts.name;
  const id = arts.id;

  return (
    <Link to={`/groups/${name}`} state={{ name: name, id: id }}>
      <li className="SubArtItem" style={{ zIndex: 50 }}>
        <div className="image">{name}</div>
      </li>
    </Link>
  );
};
export default SubGroupItem;
