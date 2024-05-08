import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BulletinItem.scss";

const CommentItem = ({ comments }) => {
  const commentId = comments.commentId;
  const content = comments.content;
  const userName = comments.userName;
  const createdDate = comments.createdDate;

  return (
    <div className="CommentItem" style={{ zIndex: 50 }}>
      <div className="info1">{userName}</div>
      <div className="info2">{content}</div>
      <div className="info3">
        {createdDate.substring(0, 10) + " " + createdDate.substring(11, 16)}
      </div>
    </div>
  );
};

export default CommentItem;
