import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./MyProject.scss";
import { Link } from "react-router-dom";

const UploadProject = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAuthorWord, setInputAuthorWord] = useState("");
  const [inputIntroduction, setInputIntroduction] = useState("");
  const [inputSize, setInputSize] = useState("");
  const [inputProductionMethod, setInputProductionMethod] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputForSale, setInputForSale] = useState(0);
  const [file, setFile] = useState(null);
  let isForSale = false;

  if (inputForSale == 0) {
    isForSale = false;
  } else if (inputForSale == 1) {
    isForSale = true;
  }

  const saveInputTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const saveInputAuthorWord = (e) => {
    setInputAuthorWord(e.target.value);
  };
  const saveInputIntroduction = (e) => {
    setInputIntroduction(e.target.value);
  };
  const saveInputSize = (e) => {
    setInputSize(e.target.value);
  };
  const saveInputProductionMethod = (e) => {
    setInputProductionMethod(e.target.value);
  };
  const saveInputPrice = (e) => {
    setInputPrice(e.target.value);
  };
  const saveInputForSale = (e) => {
    setInputForSale(e.target.value);
  };

  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append("file", uploadFile);
      setFile(uploadFile);
    }
  };

  function onClickUpload(e) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("title", inputTitle);
    formData.append("authorWord", inputAuthorWord);
    formData.append("introduction", inputIntroduction);
    formData.append("size", inputSize);
    formData.append("productionMethod", inputProductionMethod);
    formData.append("price", +inputPrice);
    formData.append("forSale", isForSale);

    fetch("/api/v1/exhibit", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = "/mypage/myproject";
        alert("영화가 등록되었습니다.");
      })
      .catch((error) => {
        console.log(error.response);
      });
    e.preventDefault();
  }

  return (
    <div className="Diary">
      <div className="MyProject">
        <div className="Content">
          <form onSubmit={onClickUpload}>
            <p>사진</p>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={onChangeImg}
            />
            <div className="Line"></div>
            <div className="Bundle">
              <div>
                <p>이름</p>
                <input
                  id="id"
                  type="text"
                  value={inputTitle}
                  onChange={saveInputTitle}
                />
              </div>
              <div>
                <p>판매 여부</p>
                <input
                  className="Check"
                  id="password"
                  type="checkbox"
                  value={1 - inputForSale}
                  onChange={saveInputForSale}
                />
              </div>
              <div>
                <p>가격</p>
                <input
                  id="renumber"
                  type="text"
                  value={inputPrice}
                  onChange={saveInputPrice}
                />
              </div>
            </div>
            <div className="Bundle">
              <div>
                <p>크기</p>
                <input
                  id="phonenumber"
                  type="text"
                  value={inputSize}
                  onChange={saveInputSize}
                />
              </div>
              <div>
                <p>제작 방식</p>
                <input
                  id="phonenumber"
                  type="text"
                  value={inputProductionMethod}
                  onChange={saveInputProductionMethod}
                />
              </div>
            </div>
            <p>작품 소개</p>
            <textarea
              className="WriteContent"
              value={inputIntroduction}
              onChange={saveInputIntroduction}
            ></textarea>
            <p>작가의 한마디</p>
            <textarea
              className="WriteWord"
              value={inputAuthorWord}
              onChange={saveInputAuthorWord}
              placeholder="이 작품을 볼 관람객들께 드리는 한마디"
            ></textarea>
            <button className="submit" type="submit">
              등록
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadProject;
