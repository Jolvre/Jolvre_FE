import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PerBulletin.scss";
import { Posts } from "../TestCases";

const PerCommunity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.state.postId; // 클릭한 글 id
  const myNickName = "aaa"; //sessionStorage.getItem("myNickName");

  const posts = Posts;

  const inputTitle = posts[0].title;
  const inputContent = posts[0].content;
  const inputUserName = posts[0].userName;
  const inputLastModifiedDate = posts[0].last_modified_date;

  /*
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [inputCreatedDate, setInputCreatedDate] = useState("");
  const [inputLastModifiedDate, setInputastModifiedDate] = useState("");

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
        setInputUserName(response.userName);
        setInputastModifiedDate(response.last_modified_Date);
        setInputCreatedDate(response.createdDate);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);
  */

  const onClick = () => {
    navigate(-1);
  };

  function onClickDelete(e) {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      //true는 확인버튼을 눌렀을 때 코드 작성
      axios
        .delete(`/api/v1/post/${postId}`, {
          data: {
            postId: postId,
          },
        })
        .then((res) => {
          document.location.href = "/community";
          alert("게시글이 삭제되었습니다.");
        })
        .catch((error) => {});
    } else {
    }
    e.preventDefault();
  }

  return (
    <div className="PerDiary">
      <div className="PerBulletin">
        <div className="Title">
          <div className="RealTitle">{inputTitle}</div>
          <div className="Date">
            작성자: {inputUserName} &nbsp; &nbsp;{inputLastModifiedDate}
          </div>
        </div>
        <div className="Line"></div>
        <div className="Content">{inputContent}</div>
        <div className="Line"></div>
        <div className="Foot">
          {(() => {
            if (myNickName === inputUserName) {
              return (
                <>
                  <Link
                    to={`/community/${postId}/update`}
                    state={{ postId: postId }}
                  >
                    <button
                      className="Back"
                      style={{ backgroundColor: "#bf9e27" }}
                    >
                      수정
                    </button>
                  </Link>
                  <button
                    className="Back"
                    onClick={onClickDelete}
                    style={{ backgroundColor: "#610b0b" }}
                  >
                    삭제
                  </button>
                </>
              );
            }
          })()}
          <button className="Back" onClick={onClick}>
            목록
          </button>
        </div>
        <div className="SubTitle">댓글</div>
        <div className="Line" style={{ backgroundColor: "#6e6e6e" }}></div>
      </div>
    </div>
  );
};

export default PerCommunity;
