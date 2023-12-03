import Header from "../../components/Header";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // react-router-dom에서 useParams import
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




const NoticeModify = () => {
  const { id } = useParams();  // URL에서 id를 받아옴

  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    axios.get(`/dev/api/v1/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('포스트 불러오기 오류:', error);
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`/dev/update/${id}`, updatedPost)
      .then(response => {
        console.log('포스트 업데이트 성공:', response.data);
      })
      .catch(error => {
        console.error('포스트 업데이트 오류:', error);
      });
  };

  return (
    <div>
      <h2>포스트 업데이트 페이지</h2>
      <div>
        <p>현재 포스트 내용:</p>
        <p>{post.title} - {post.content}</p>
      </div>
      <div>
        <input type="text" placeholder="새로운 제목" onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })} />
        <input type="text" placeholder="새로운 내용" onChange={(e) => setUpdatedPost({ ...updatedPost, content: e.target.value })} />
        <button onClick={handleUpdate}>
          업데이트
        </button>
      </div>
    </div>
  );
};




export default NoticeModify; 