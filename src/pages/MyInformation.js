import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./MyInformation.scss";
import { Artists } from "../TestCases";
import axios from "axios";

const MyInformation = () => {
  //const [diaries, setDiaries] = useState(null);

  //let filteredDiaries = [];
  //for (let i = 0; i < TestDiaries.length; i++) {
  //  filteredDiaries.push(TestDiaries[i]);
  //}
  //setDiaries(filteredDiaries);
  const accessToken = localStorage.getItem("accessToken");

  const artists = Artists;
  const [inputId, setInputId] = useState(""); //Email
  const [inputPw, setInputPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputNickName, setInputNickName] = useState("");
  const [inputAge, setInputAge] = useState(20);
  const [inputCity, setInputCity] = useState("");
  const [inputSchool, setInputSchool] = useState("");
  const [isVerifed, setIsVerified] = useState(false);

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
        /*
        const res1 = await axios.get("/api/v1/user", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        */
        setInputName(artists[0].name);
        setInputId(artists[0].user_id);
        setInputPw(artists[0].password);
        setInputNickName(artists[0].nickname);
        setInputAge(artists[0].age);
        setInputCity(artists[0].school);
        setInputSchool(artists[0].school);
        setIsVerified(artists[0].verified); //role?
        //setImageUrl
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

  function onClickVerify(e) {
    if (
      window.confirm(
        inputSchool + "의 메일인 " + inputId + "로 학교 인증을 하시겠습니까?"
      )
    ) {
      fetch("/api/v1/auth/student/verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputId,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          document.location.href = "/mypage/myinformation";
          alert("학교 인증에 성공했습니다.");
        })
        .catch((error) => {
          alert("학교 인증에 실패했습니다. 다시 시도해주세요.");
          console.log(error.response);
        });
    } else {
      e.preventDefault();
    }
  }

  return (
    <div className="Diary">
      <div className="MyInformation">
        <div className="Title">
          <div className="Letter">
            <h1>내 정보</h1>
          </div>
        </div>
        <div className="Line"></div>
        <div className="Content">
          <form>
            <p>이름</p>
            <input disabled={true} type="text" value={inputName} />
            <p>닉네임</p>
            <input disabled={true} type="text" value={inputNickName} />
            <p>Email (ID)</p>
            <input disabled={true} type="text" value={inputId} />
            <p>비밀번호</p>
            <input disabled={true} type="text" value={inputPw} />
            <p>나이</p>
            <input disabled={true} type="text" value={inputAge} />
            <p>도시</p>
            <input disabled={true} type="text" value={inputCity} />
            <p>학교</p>
            <input disabled={true} type="text" value={inputSchool} />
            <p>학생 인증 여부</p>
            {(() => {
              if (isVerifed === true) {
                return <div className="verified">예</div>;
              } else {
                return (
                  <div className="nonverified">
                    아니오
                    <button className="gotoverify" onClick={onClickVerify}>
                      인증하기
                    </button>
                  </div>
                );
              }
            })()}
            <Link to="/mypage/myinformation/update">
              <button className="submit">수정</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
