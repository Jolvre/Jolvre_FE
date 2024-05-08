import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BulletinItem.scss";

const CommentItem = ({ comments }) => {
  const commentId = comments.commentId;
  const content = comments.content;
  const userName = comments.userName;
  const createdDate = comments.createdDate;

  return (
    <div className="BulletinItem" style={{ zIndex: 50 }}>
      <div className="info4">{content}</div>
      <div className="info5">{createdDate}</div>
      <div className="info3">{userName}</div>
    </div>
  );
};

export default CommentItem;
