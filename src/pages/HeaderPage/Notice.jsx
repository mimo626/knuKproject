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
`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 5rem;
    background:#F2F2F2;
    padding: 2rem 2rem;
    position:relative; 
`;
const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0 auto;
    width: 70rem;
`;
const Line2 = styled.div`
    height: 0.1rem;
    background-color: #d3d3d3;
    flex-shrink: 0;
`;

const CreatePostButton = styled.button`
    width: 10rem;
    height: 3rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    position:absolute; 
    bottom:2rem;
    right: 2rem;
`;

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
    <Page>
      <Header/>
      <Content>
        <NoticeText>공지사항</NoticeText>
        <NoticeLine/>
        <TitleWrapper>
          <Title>게시글 목록</Title>
          <Link to={'/noticeCreate'} style={{ textDecoration: "none"}}><CreatePostButton onClick={handleCreatePost}>게시글 작성</CreatePostButton></Link>
        </TitleWrapper>
        <Line2/>
        <div>
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
      </Content>
    </Page>
    
  );
};


export default Notice;