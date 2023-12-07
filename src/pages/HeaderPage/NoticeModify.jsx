import Header from "../../components/Header";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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





const VieNoticeModifywPostPage = () => {
  const { postId } = useParams();
  const history = useHistory();

  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // postId를 사용하여 해당 게시글 정보를 가져오는 로직
    axios.get(`/api/v1/posts/${postId}`)
      .then((response) => {
        const postData = response.data;
        setPost(postData);
        setTitle(postData.title);
        setContent(postData.content);
      })
      .catch((error) => {
        console.error(error);
        // 에러 처리 로직 추가
      });
  }, [postId]);

  const update = () => {
    const data = { title, content };

    axios.put(`/api/v1/posts/${postId}`, data)
      .then(() => {
        alert('글이 수정되었습니다.');
        history.push('/notice');  // 페이지 이동
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  return (
    <>
      {/* 게시글 내용 및 수정 버튼 등을 표시하는 내용 */}
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />

      <button onClick={update}>Update</button>
      <button onClick={() => history.push('/notice')}>Back</button>
    </>
  );
};



export default NoticeModify; 