import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PerBulletin.scss";

const UploadCommunity = () => {
  const writer = "나"; //sessionStorage.getItem("myNickName");
  const date = new Date().toISOString();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const saveInputTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const saveInputContent = (e) => {
    setInputContent(e.target.value);
  };

  function onClickUpload(e) {
    fetch("/api/v1/post/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputTitle,
        content: inputContent,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        document.location.href = "/community";
      })
      .catch((error) => {
        console.log(error.response);
      });
    e.preventDefault();
  }

  return (
    <div className="PerDiary">
      <div className="PerBulletin">
        <form onSubmit={onClickUpload}>
          <div className="Title">
            <input
              className="WriteRealTitle"
              type="text"
              value={inputTitle}
              onChange={saveInputTitle}
            ></input>
            <div className="Date">
              작성자: {writer} &nbsp; &nbsp;
              {date.substring(0, 10) + " " + date.substring(11, 16)}
            </div>
          </div>
          <div className="Line"></div>
          <textarea
            className="WriteContent"
            value={inputContent}
            placeholder="글을 입력해주세요."
            onChange={saveInputContent}
          ></textarea>
          <div className="Line"></div>
          <div className="Foot">
            <button className="submit" type="submit">
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadCommunity;
