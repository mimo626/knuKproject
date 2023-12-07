import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import styled from "styled-components";
import { IoIosHeart } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const Page = styled.div`
    width:100%;
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    background: #E9F9FA;
    padding-top: 3rem;

`;
const MajorTitle = styled.div`
    font-family: Inter;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; 
    margin: 0 auto;
    padding-bottom: 2rem;

`;
const Line = styled.div`
    width: 75rem;
    height: 0.15rem;
    background-color: black;
    flex-shrink: 0;
    margin: 0 auto;
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 75rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 4rem 9rem;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top:5rem;
  padding-bottom:5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 33rem;
  height: 23rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #FFF;
  margin: 0 auto;
  box-shadow: 0px 4px 4px 0px #B4B4B4;
  gap: 0.5rem;

`;

const ImgWrapper = styled.img`
  width: 45%;
  flex-shrink: 0;
  border-radius: 0.625rem;
  margin: 0 auto;
  gap: 0.5rem;
  margin: 0.5rem 0.5rem;
`;
const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  flex-shrink: 0;
  margin: 0 auto;
  word-break:keep-all;  
`;
const Title = styled.table`
  height: 4rem;
  font-size: 1.3rem;
  font-weight: 600;
  padding-right:1.2rem;
  margin-top:0.5rem;
  margin-bottom:0.5rem;


`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:0.5rem;
  margin-bottom:0.5rem;
`;
const T = styled.table`
  font-size: 1.1rem;
  font-weight: 500;
  word-break:break-word;
  padding-right:1.2rem;
  text-decoration: none;
  color:gray;  
  `;

const handleHeartClick = async (noticeId) => {
  try {
    await axios.post('/like/click', {
      noticeId: noticeId,
    });
    location.reload();
  } catch (error) {
    alert(error.response.data);
    console.error('에러가 발생했습니다:', error);
  }
};

function FieldMajor() {
  const [data, setData] = useState([]);
  const { major } = useParams();
  const { page } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/notice/requestPage', {
          major: major,
          type: '',
          keyword: '',
          page: page,
          perPage: 6,
        });

        const processedData = response.data.data.map(item => ({
          ...item,
          images: item.img.split(';'),
        }));

        setData(processedData);
      } catch (error) {
        console.error('에러가 발생했습니다:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      <Header />
      {data.length > 0 && <MajorTitle>{data[0].major}</MajorTitle>}
      <Line />
      <div>
        <ContentWrapper>
          {data.map((item, index) => (
            <Link to={'/field/read/' + item.dbid} style={{ textDecoration: "none" }} key={item.dbid}>
              <Content>
                {item.img && item.img !== '' ? (
                  <ImgWrapper src={item.images[0]} alt={`포스터`}></ImgWrapper>
                ) : (
                  // 이미지가 없는 경우 로고 표시
                  <ImgWrapper src={require('../../components/knuLogoB.png')} alt={`로고 ${index + 1}`}></ImgWrapper>
                )}
                <TableWrapper>
                  <Title style={{ color: 'black' }}>{item.title}</Title>
                  <T>작성자: {item.writer}</T>
                  <Wrapper>
                    <IoIosHeart
                      style={{ color: '#FE4D82', paddingRight: 3, cursor: 'pointer' }} size={35}
                      onClick={async () => { await handleHeartClick(item.dbid); }} />
                    <T style={{ paddingTop: 2, color: '#FE4D82' }}>{item.likeCount}</T>
                    <IoEye style={{ color: '#006CBF', paddingRight: 3 }} size={35}></IoEye>
                    <T style={{ paddingTop: 3, color: '#006CBF' }}>{item.view}</T>
                  </Wrapper>
                  <T>{item.regdate}</T>
                </TableWrapper>
              </Content>
            </Link>
          ))}
        </ContentWrapper>
      </div>
    </Page>
  );

}

export default FieldMajor;