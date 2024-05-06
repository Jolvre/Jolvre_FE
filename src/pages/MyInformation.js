import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CommunityItem from "../components/CommunityItem";
import "./MyInformation.scss";
import { Artists } from "../TestCases";

const MyInformation = () => {
  //const [diaries, setDiaries] = useState(null);

  //let filteredDiaries = [];
  //for (let i = 0; i < TestDiaries.length; i++) {
  //  filteredDiaries.push(TestDiaries[i]);
  //}
  //setDiaries(filteredDiaries);
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
        //const res1 = await axios.get("/customers");
        for (let i = 0; i < 4; i++) {
          if (
            artists[i].user_id === "aaa_id" //sessionStorage.getItem("user_id")
          ) {
            setInputName(artists[i].name);
            setInputId(artists[i].user_id);
            setInputPw(artists[i].password);
            setInputNickName(artists[i].nickname);
            setInputAge(artists[i].age);
            setInputCity(artists[i].school);
            setInputSchool(artists[i].school);
            setIsVerified(artists[i].verified); //role?
            break;
          }
        } //나중에 session으로 맞는 내정보 불러오기
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

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
            <p>Email(ID)</p>
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
                    <button className="gotoverify">인증하기</button>
                  </div>
                );
              }
            })()}
            <Link to="/mypage_ud">
              <button className="submit">수정</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
