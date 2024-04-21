import React, { useState } from "react";
import "./ArtItem.scss";
import { Link } from "react-router-dom";
//import axios from "axios";

const GroupItem = ({ arts }) => {
  const name = arts.name;
  const id = arts.id;

  return (
    <Link to={`/groups/${name}`} state={{ name: name, id: id }}>
      <li className="ArtItem" style={{ zIndex: 50 }}>
        <div className="image">{name}</div>
      </li>
    </Link>
  );
};

export default GroupItem;
