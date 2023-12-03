import Header from "../../components/Header";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // react-router-dom에서 Link import
import axios from 'axios';

const Page = styled.div`
    width:100%;
    margin-top: 8rem;

`;
const Content = styled.div`
    width:75.5rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;
`;

const NoticeText = styled.div`
    width: 15rem;
    text-align: center;
    font-family: Inter;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
`;

const NoticeLine = styled.div`
    width: 75rem;
    height: 0.15rem;
    background-color: black;
    flex-shrink: 0;
    margin-top:2rem;
    margin-bottom:2rem;
`;




const Notice = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/dev/notice')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('포스트 불러오기 오류:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/notice/${post.id}`}>{post.title} - {post.content}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">글 작성하기</Link>
    </div>
  );
};




    export default Notice; 