import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./MyInformation.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputId, setInputId] = useState(""); //Email
  const [inputPw, setInputPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputNickName, setInputNickName] = useState("");
  const [inputAge, setInputAge] = useState(20);
  const [inputCity, setInputCity] = useState("");
  const [inputSchool, setInputSchool] = useState("");

  const saveInputId = (e) => {
    setInputId(e.target.value);
  };
  const saveInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const saveInputName = (e) => {
    setInputName(e.target.value);
  };
  const saveInputNickName = (e) => {
    setInputNickName(e.target.value);
  };
  const saveInputAge = (e) => {
    setInputAge(e.target.value);
  };
  const saveInputCity = (e) => {
    setInputCity(e.target.value);
  };
  const saveInputSchool = (e) => {
    setInputSchool(e.target.value);
  };

  function onClickJoin(e) {
    let temp = 0;
    /*
    for (let i = 0; i < txs.length; i++) {
      if (inputId === txs[i]) {
        temp = 1;
        alert("이미 사용 중인 아이디입니다.");
        break;
      }
    }
    */
    fetch("/api/v1/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputId,
        name: inputName,
        password: inputPw,
        nickname: inputNickName,
        age: inputAge,
        city: inputCity,
        school: inputSchool,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.accessToken) {
          sessionStorage.setItem("accessToken", response.accessToken);
          sessionStorage.setItem("refreshToken", response.refreshToken);
          sessionStorage.setItem("nickname", inputNickName);
          document.location.href = "/login";
        } else {
          alert("다시 로그인해주세요.");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
    e.preventDefault();
  }

  return (
    <div className="Diary">
      <div className="MyInformation">
        <div className="Title">
          <div className="Letter">
            <h1>회원가입</h1>
          </div>
        </div>
        <div className="Line"></div>
        <div className="Content">
          <form onSubmit={onClickJoin}>
            <p>Email</p>
            <input id="id" type="text" value={inputId} onChange={saveInputId} />
            <p>비밀번호</p>
            <input
              id="password"
              type="password"
              value={inputPw}
              onChange={saveInputPw}
            />
            <p>이름</p>
            <input
              id="renumber"
              type="text"
              value={inputName}
              onChange={saveInputName}
            />
            <p>닉네임</p>
            <input
              id="phonenumber"
              type="text"
              value={inputNickName}
              onChange={saveInputNickName}
            />
            <p>나이</p>
            <input
              id="phonenumber"
              type="text"
              value={inputAge}
              onChange={saveInputAge}
            />
            <p>도시</p>
            <input
              id="phonenumber"
              type="text"
              value={inputCity}
              onChange={saveInputCity}
            />
            <p>학교</p>
            <input
              id="phonenumber"
              type="text"
              value={inputSchool}
              onChange={saveInputSchool}
            />
            <button className="submit" type="submit">
              가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
