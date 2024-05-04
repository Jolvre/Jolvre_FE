import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PerBulletin.scss";
import { TestDiaries } from "../TestCases";

const UploadCommunity = () => {
  const writer = "나"; //sessionStorage.getItem("nickname");
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
    fetch("/api/post/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        createdDate: date,
        lastModifiedDate: date,
        id: 0,
        user: {
          createdDate: "2024-05-04T08:22:31.677Z",
          lastModifiedDate: "2024-05-04T08:22:31.677Z",
          id: 0,
          password: "string",
          name: "string",
          nickname: "string",
          age: 0,
          city: "string",
          email: "string",
          imageUrl: "string",
          role: "GUEST",
          school: "string",
          socialType: "KAKAO",
          socialId: "string",
          refreshToken: "string",
        },
        comments: [],
        content: inputContent,
        title: inputTitle,
        uploadDate: {
          hour: 0,
          minute: 0,
          second: 0,
          nano: 0,
        },
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
              작성자: {writer} &nbsp; &nbsp;{date}
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
