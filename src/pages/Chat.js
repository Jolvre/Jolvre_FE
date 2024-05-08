import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import queryString from "query-string";
import { IoSend } from "react-icons/io5";
import * as StompJs from "@stomp/stompjs";

import "./Chat.scss";

const SOCKET_SERVER_URL = "ws://localhost:8080/ws/chat";
// url은 ws://localhost:8080/ws/chat이 될 예정

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const me = location.state.me;
  const name = location.state.name;
  const artist = location.state.artist;

  const param = useParams();
  const chatRoomId = "7a0430fd-5d94-4d09-80f7-2243461a3217";
  const accessToken = JSON.stringify(window.localStorage.getItem("accessToken"));

  let [client, changeClient] = useState(null);
  const [chat, setChat] = useState(""); // 입력된 chat을 받을 변수
  const [chatList, setChatList] = useState([]); // 채팅 기록


  // const msgBox = chatList.map((item, idx) => {
  //   if (Number(item.sender)!== userId) {
  //     return (
  //       <div key={idx} className={styles.otherchat}>
  //         <div className={styles.otherimg}>
  //           <img src={testImg} alt="" />
  //         </div>
  //         <div className={styles.othermsg}>
  //           <span>{item.data}</span>
  //         </div>
  //         <span className={styles.otherdate}>{item.date}</span>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div key={idx} className={styles.mychat}>
  //         <div className={styles.mymsg}>
  //           <span>{item.data}</span>
  //         </div>
  //         <span className={styles.mydate}>{item.date}</span>
  //       </div>
  //     );
  //   }
  // });




  const connect = () => {
    // 소켓 연결
    try {
      const clientdata = new StompJs.Client({
        brokerURL: "ws://localhost:8080/ws/chat",
        connectHeaders: {
          Authorization: window.localStorage.getItem("accessToken")
        },
        debug: function (str) {
          console.log(str);
        },
        reconnectDelay: 5000, // 자동 재 연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      // 구독
      clientdata.onConnect = function () {
        clientdata.subscribe("/sub/chat/" + chatRoomId, callback);
      };

      clientdata.activate(); // 클라이언트 활성화
      changeClient(clientdata); // 클라이언트 갱신
    } catch (err) {
      console.log(err);
    }
  };

  const disConnect = () => {
    // 연결 끊기
    if (client === null) {
      return;
    }
    client.deactivate();
  };

  // 콜백함수 => ChatList 저장하기
  const callback = function (message) {
    if (message.body) {
      let msg = JSON.parse(message.body);
      console.log(msg);
      setChatList((chats) => [...chats, msg]);
    }
  };

  const sendChat = () => {
    if (chat === "") {
      return;
    }

    client.publish({
      destination: "/pub/chat/" + chatRoomId,
      body: JSON.stringify({
        message: chat,
      }),
    });

    setChat("");
  };

  useEffect(() => {
    // 최초 렌더링 시 , 웹소켓에 연결
    // 우리는 사용자가 방에 입장하자마자 연결 시켜주어야 하기 때문에,,
    connect();

    return () => disConnect();
  }, []);

  const onChangeChat = (e) => {
    setChat(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // 방 있는지 검사(이메일 포스트해주면 방 아이디 받아옴)
  // 방 아이디 받아옴
  // socketseverurl에 말씀해주신 추가 endpoint(/pub/chat/{roomId})로 socket io 작성

  // const socket = io(SOCKET_SERVER_URL);
  // useEffect(() => {
  //   //const { name, room } = queryString.parse(window.location.search)
  //   // 컴포넌트가 마운트될 때 소켓 연결
  //   socket.on("message", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   // 컴포넌트가 언마운트될 때 소켓 연결 해제
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [socket]);

  // const handleMessageSubmit = (e) => {
  //   e.preventDefault();
  //   if (inputMessage.trim() !== "") {
  //     socket.emit("message", inputMessage);
  //     setInputMessage("");
  //   }
  // };

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
          {chatList.map((msg, index) => (
            <div key={index}>{msg.message}</div>
          ))}
        </div>
        <div className="SendMessage">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={chat}
              onChange={onChangeChat}
              placeholder="메시지를 입력하세요."
              onKeyDown={(ev) => {
                if (ev.keyCode === 13) {
                  sendChat();
                }
              }}
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
