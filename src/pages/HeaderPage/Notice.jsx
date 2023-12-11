import Header from "../../components/Header";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'; // useHistory와 Link 가져오기
import { useNavigate } from "react-router-dom";


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
    background-color: #006CBF;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    position:absolute; 
    bottom:2rem;
    right: 2rem;
`;
const NoticeTable = styled.table`
  width:100%;
  text-align: center;
  padding: 0;
  margin-top: 2rem;
  border-bottom: 1px solid black; 
  border-collapse: collapse

`;
const Tr = styled.tr`
border-bottom: 1px solid black; 
background: #FCFCFC;

`;
const Th = styled.th`
border-bottom: 1px solid black; 
padding: 1rem 0.5rem;
border-collapse: collapse
background: #F3F7FF;

`;
const Td = styled.td`
padding: 1rem 0.5rem;
border-bottom: 1px solid #E7E7E7; 
`;
const Notice = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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
    navigate('/notice/create')
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
        <NoticeTable>
          <tbody>
            <Tr>
              <Th style={{width:'5%'}}>번호</Th>
              <Th style={{width:'55%'}}>제목</Th>
              <Th style={{width:'20%'}}>작성자</Th>
              <Th style={{width:'20%'}}>작성일</Th>
            </Tr>
            {posts.map(post => (
                <Tr key={post.id}>
                  <Td style={{color:'gray'}}>{post.id}</Td>
                  <Td style={{textAlign:'left', paddingLeft:20, color:'black'}}><Link to={'/notice/read/' + post.id} style={{ textDecoration: "none" , width:'55%'}}>{post.title}</Link></Td>
                  <Td style={{color:'gray'}}>{post.writer}</Td>
                  <Td style={{color:'gray'}}>{post.createdDate}</Td>
                  {/* 추가적으로 필요한 정보 표시 */}
                </Tr>
            ))}
          </tbody>
        </NoticeTable>
      </Content>
    </Page>
  );
};


export default Notice;