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
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [rn, setRn] = useState("");
  const [ad, setAd] = useState("");
  const [univ, setUniv] = useState("");
  const [major, setMajor] = useState("");
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
            setName(artists[i].name);
            setId(artists[i].user_id);
            setPw(artists[i].password);
            setUniv(artists[i].university);
            setMajor(artists[i].major);
            setIsVerified(artists[i].verified);
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
            <input disabled={true} type="text" value={name} />
            <p>ID</p>
            <input disabled={true} type="text" value={id} />
            <p>비밀번호</p>
            <input disabled={true} type="text" value={pw} />
            <p>전화번호</p>
            <input disabled={true} type="text" value={"01022223333"} />
            <p>생년월일</p>
            <input disabled={true} type="text" value={"001108"} />
            <p>대학교</p>
            <input disabled={true} type="text" value={univ} />
            <p>전공</p>
            <input disabled={true} type="text" value={major} />
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
