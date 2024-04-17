import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BulletinItem.scss";

const DiaryItem = ({ diaries }) => {
  const id = diaries.id;
  const title = diaries.title;
  const date = diaries.date;

  return (
    <Link to="/" state={{ title: title, date: date, id: id }}>
      <div className="BulletinItem" style={{ zIndex: 50 }}>
        {id} {title} {date}
      </div>
    </Link>
  );
};

export default DiaryItem;
