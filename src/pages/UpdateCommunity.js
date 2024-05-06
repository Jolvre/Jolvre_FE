import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PerBulletin.scss";
import axios from "axios";

const UpdateCommunity = () => {
  const location = useLocation();

  const postId = location.state.postId; // 클릭한 글 id

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

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(null);

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const executeCallback = () => {
        savedCallback.current();
      };

      const timerId = setInterval(executeCallback, delay);

      return () => clearInterval(timerId);
    }, []);
  };

  useInterval(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/post/${postId}`);
        setInputTitle(response.title);
        setInputContent(response.content);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

  function onClickUpdate(e) {
    axios
      .patch(`/api/v1/post/${postId}`, {
        title: inputTitle,
        content: inputContent,
      })
      .then((res) => {
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = `/community/${postId}`;
        alert("게시글이 수정되었습니다.");
      })
      .catch((error) => {
        console.log(error.response);
      });
    e.preventDefault();
  }

  return (
    <div className="PerDiary">
      <div className="PerBulletin">
        <form onSubmit={onClickUpdate}>
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
            onChange={saveInputContent}
          ></textarea>
          <div className="Line"></div>
          <div className="Foot">
            <button className="submit" type="submit">
              수정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCommunity;
