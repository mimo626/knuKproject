import Header from "../../components/Header";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'; // useHistory와 Link 가져오기



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

const CreatePostButton = styled.button`
    width: 10rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
`;

// PostList.js



const Notice = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API 호출을 통해 게시물 목록을 가져오는 함수
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/notice'); // API 엔드포인트에 맞게 수정
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); // useEffect를 통해 컴포넌트가 처음 마운트될 때만 실행

  const handleCreatePost = () => {
    // 새 게시물을 작성하는 페이지로 이동하는 로직 추가 해야됨
    // 네비게이션에는 react-router-dom과 같은 라우팅 라이브러리를 사용할 수 있습니다.
};

  return (
    <div>
      <h2>게시판 목록</h2>
      <CreatePostButton onClick={handleCreatePost}>게시글 작성</CreatePostButton>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>
            번호 : {post.id},
            Title: {post.title},
            Content: {post.content},
            Writer: {post.writer},
            date : {post.createdDate}</p> {/*수정 날짜도 있음 원하는거 선택하면 됨 수정되면 그 날짜와 시간을 기준으로 업데이트함(modifiedDate)*/}

            {/* 추가적으로 필요한 정보 표시 */}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Notice;