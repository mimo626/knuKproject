import Header from "../../components/Header";
import styled from "styled-components";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');

  const history = useHistory();

  const save = () => {
    const data = { title, writer, content };

    axios.post('/api/v1/posts', data)
      .then(() => {
        alert('글이 등록되었습니다.');
        history.push('/notice');  // 페이지 이동
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  return (
    <>
      {/* 게시글 작성 폼 */}
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" id="writer" value={writer} onChange={(e) => setWriter(e.target.value)} />
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      
      <button onClick={save}>Save</button>
      <button onClick={() => history.push('/notice')}>Cancel</button>
    </>
  );
};

export default NoticeCreate; 