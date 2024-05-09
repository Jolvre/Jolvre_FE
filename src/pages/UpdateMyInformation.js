import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./MyInformation.scss";
import { Artists } from "../TestCases";
import axios from "axios";

const UpdateMyInformation = () => {
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

  function onClickUpdate(e) {
    axios
      .patch(
        `/api/v1/user/${inputId}`,
        {
          name: inputName,
          nickname: inputNickName,
          age: inputAge,
          city: inputCity,
          imageUrl: "?",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = "/mypage/myinformation";
        alert("정보가 수정되었습니다.");
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
            <h1>내 정보</h1>
          </div>
        </div>
        <div className="Line"></div>
        <div className="Content">
          <form onSubmit={onClickUpdate}>
            <p>이름</p>
            <input type="text" value={inputName} onChange={saveInputName} />
            <p>닉네임</p>
            <input
              type="text"
              value={inputNickName}
              onChange={saveInputNickName}
            />
            <p>Email (ID)</p>
            <input disabled={true} type="text" value={inputId} />
            <p>비밀번호</p>
            <input disabled={true} type="text" value={inputPw} />
            <p>나이</p>
            <input type="text" value={inputAge} onChange={saveInputAge} />
            <p>도시</p>
            <input type="text" value={inputCity} onChange={saveInputCity} />
            <p>학교</p>
            <input disabled={true} type="text" value={inputSchool} />
            <Link to="/mypage_ud">
              <button className="submit">수정</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyInformation;
