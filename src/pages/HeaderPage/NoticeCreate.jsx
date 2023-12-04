import Header from "../../components/Header";
import styled from "styled-components";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';  // react-router-dom에서 useHistory import
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



const NoticeCreate = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    writer: '',
  });

  const history = useHistory();

  const handleSave = () => {
    axios.post('/dev/save', newPost)
      .then(response => {
        console.log('새로운 포스트 저장 성공:', response.data);
        // 저장 후 Notice 페이지로 이동
        history.push('/notice');
      })
      .catch(error => {
        console.error('포스트 저장 오류:', error);
      });
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="제목" onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
        <input type="text" placeholder="내용" onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} />
        <input type="text" placeholder="작성자" onChange={(e) => setNewPost({ ...newPost, writer: e.target.value })} />
        <button onClick={handleSave}>
          저장
        </button>
      </div>
    </div>
  );
};


export default NoticeCreate; 