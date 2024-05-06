import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import queryString from "query-string";
import { IoSend } from "react-icons/io5";

import "./Chat.scss";

const SOCKET_SERVER_URL = "http://your-socket-server-url";
// url은 ws://localhost:8080/ws/chat이 될 예정

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const me = location.state.me;
  const name = location.state.name;
  const artist = location.state.artist;
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // 방 있는지 검사(이메일 포스트해주면 방 아이디 받아옴)
  // 방 아이디 받아옴
  // socketseverurl에 말씀해주신 추가 endpoint(/pub/chat/{roomId})로 socket io 작성

  const socket = io(SOCKET_SERVER_URL);
  useEffect(() => {
    //const { name, room } = queryString.parse(window.location.search)
    // 컴포넌트가 마운트될 때 소켓 연결
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // 컴포넌트가 언마운트될 때 소켓 연결 해제
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      socket.emit("message", inputMessage);
      setInputMessage("");
    }
  };

  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className="Chat">
      <div className="Frame">
        <div className="Title">
          <div className="Who">
            <p>{artist}</p>
            {name} / {"가격"}
          </div>
          <button className="Back" onClick={onClick}>
            돌아가기
          </button>
        </div>
        <div className="PrevMessages">
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <div className="SendMessage">
          <form onSubmit={handleMessageSubmit}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="메시지를 입력하세요."
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

export default Chat;
