import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BulletinItem.scss";

const DiaryItem = ({ diaries }) => {
  const id = diaries.id;
  const title = diaries.title;
  const date = diaries.date;

  return (
    <Link
      style={{ textDecoration: "none" }}
      to="/"
      state={{ title: title, date: date, id: id }}
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
