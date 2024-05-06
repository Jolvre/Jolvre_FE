import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CommunityItem from "../components/CommunityItem";
import "./Bulletin.scss";
import { Posts } from "../TestCases";

const Community = () => {
  const posts = Posts;

  /*
  const [posts, setPosts] = useState(null);

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
        const response = await axios.get("/api/v1/post");
        let filteredPosts = [];
        for (let i = 0; i < response.posts.length; i++) {
          filteredPosts.push(response.posts[i]);
        }
        setPosts(filteredPosts);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, 500);

  if (!posts) {
    return null;
  }
  */

  return (
    <div className="Diary">
      <div className="Bulletin">
        <div className="Title">
          <div className="Letter">
            <h1>커뮤니티</h1>
          </div>
          <Link style={{ textDecoration: "none" }} to={`/community/upload`}>
            <div className="CreateButton">글쓰기</div>
          </Link>
        </div>

        <div className="Line"></div>
        <div className="StartContent">
          <div className="info4">제목</div>
          <div className="info5">작성자</div>
          <div className="info3">등록일</div>
        </div>
        <div className="Line"></div>
        <div className="Content">
          {posts.map((posts) => (
            <CommunityItem posts={posts} key={posts.postId} />
          ))}
        </div>
        <div className="Line"></div>
      </div>
    </div>
  );
};

export default Community;
