import Header from "../../components/Header";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
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


// PostForm.js


const NoticeCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 엔드포인트에 GET 요청을 보냅니다.
        const response = await axios.get('/posts/save'); // yourEndpoint를 실제 백엔드의 엔드포인트로 변경해야 합니다.

        // 서버에서 받은 데이터를 현재 사용자 상태로 설정합니다.
        setCurrentUser(response.data);

        // 이메일을 writer 상태에 저장
        setWriter(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); // fetchData 함수를 호출하여 데이터를 가져옵니다.
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 useEffect가 한 번만 실행되도록 합니다.


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // API 엔드포인트에 맞게 수정
      await axios.post('/api/v1/posts', {
        title,
        content,
        
      });
      

      // 게시글 작성이 성공하면 필요한 작업 수행
      console.log('게시글이 성공적으로 작성되었습니다.');
      
      // 예를 들어, 작성 후에 게시글 목록 페이지로 이동하거나 다시 불러올 수 있음
      // history.push('/notice'); // react-router를 사용할 경우
    } catch (error) {
      console.error('게시글 작성 중 오류 발생:', error);
    }
  };

  if (!currentUser) {
    return <p>로그인하고 이용해주세요</p>;
  }

  // 현재 사용자 정보를 사용하여 JSX를 반환합니다.
  return (
    <div>
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
        <p>작성자: {writer}</p>
    
        </label>
        <br />
        <label>
          내용:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <br />

        <button type="submit">작성</button>
      </form>
    </div>
  );
};


 


export default NoticeCreate; 