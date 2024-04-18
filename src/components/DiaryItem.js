import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BulletinItem.scss";

const DiaryItem = ({ diaries }) => {
  const id = diaries.id;
  const title = diaries.title;
  const date = diaries.date;
  const artist = diaries.artist;
  const name = diaries.name;

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/arts/${artist}/${name}/diary/${id}`}
      state={{ name: name, artist: artist, title: title, date: date, id: id }}
    >
      <div className="BulletinItem" style={{ zIndex: 50 }}>
        <div className="info1">{id}</div>
        <div className="info2">{title}</div>
        <div className="info3">{date}</div>
      </div>
    </Link>
  );
};

export default DiaryItem;
