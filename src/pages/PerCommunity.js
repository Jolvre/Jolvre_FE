import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PerBulletin.scss";
import CommentItem from "../components/CommentItem";
import { IoSend } from "react-icons/io5";
import { Posts, Comments } from "../TestCases";

const PerCommunity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.state.postId; // 클릭한 글 id
  const myNickName = "aaa"; //sessionStorage.getItem("myNickName");
  const [inputComment, setInputComment] = useState("");

  const posts = Posts;
  const comments = Comments;

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
  const [comments, setComments] = useState(null);

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
        const response = await axios.get(`/api/v1/comment/${postId}`);
        let filteredComments = [];
        for (let i = 0; i < response.comments.length; i++) {
          filteredComments.push(response.comments[i]);
        }
        setComments(filteredComments);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

  if (!comments) {
    return null;
  }
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

  function onClickCommentUpload(e) {
    fetch(`/api/v1/comment/${postId}/upload`, {
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
        <div className="Title">
          <div className="RealTitle">{inputTitle}</div>
          <div className="Date">
            작성자: {inputUserName} &nbsp; &nbsp;
            {inputLastModifiedDate.substring(0, 10) +
              " " +
              inputLastModifiedDate.substring(11, 16)}
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
        <div className="SubTitle">댓글 {comments.length}</div>
        <div className="Line" style={{ backgroundColor: "#6e6e6e" }}></div>
        <div className="CommentContent">
          {comments.map((comments) => (
            <CommentItem comments={comments} key={comments.commentId} />
          ))}
        </div>
        <div className="SendComment">
          <form onSubmit={onClickCommentUpload}>
            <input
              type="text"
              value={inputComment}
              onChange={(e) => setInputComment(e.target.value)}
              placeholder="댓글을 입력하세요."
            />
            <button type="submit">
              <IoSend size={30} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PerCommunity;
