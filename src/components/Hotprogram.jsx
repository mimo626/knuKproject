import styled from "styled-components";
import { useContext } from "react";
import { MainContext } from "../services/MainProvider";
import poster1 from './poster1.png';
import poster2 from './poster2.png';
import poster3 from './poster3.png';
import { IoIosHeart } from "react-icons/io";
import { BsChatSquareTextFill } from "react-icons/bs";

const Page = styled.div`
    width:100%;
    background-color: #ADC9F7;
    padding-bottom:8rem;
    height: 55rem;

`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 12rem;
  margin:0 auto;
  padding-bottom: 2rem;
  height: 30%;
`;
const TextHot = styled.div`
  color:#fff;
  font-family: Racing Sans One;
  font-size: 3.75rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1rem;
  text-align: center;
  margin-top: 6.5rem;
`;
const TextInform = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  text-align: center;
  margin-top: 3.5rem;
`;
const ProgramWrapper = styled.div`
  width:70%;
  height: 35.0625rem;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  margin-top: 1rem;
  margin:0 auto;
`;

const ProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.25rem;
  height: 35.0625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #FFF;
  margin: 0 auto;
  box-shadow: 0px 4px 4px 0px #B4B4B4;
  gap: 0.5rem;

`;

const ProgramImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
`;

const ProgramImg = styled.img`
  width: 19.5rem;
  height: 23.1875rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #B4B4B4;
  margin: 0 auto;
  margin-top: 0.8rem;
`;
const ProgramLCWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 10%;
  border-width: 80%;
`;

const ProgramLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width:30%;
  color: #FE4D82;
`;
const LikeCount = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding-top: 0.3rem;
  padding-left: 0.3rem;
`;
const ProgramComment = styled.div`
  display: flex;
  flex-direction: row;
  width:70%;
  font-size: 1.2rem;
  font-weight: 500;
`;
const TextCount = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
`;
const ProgramTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20%;
  border-top: 2px solid black;
  font-size: 1.2rem;
  font-weight: 600;
  padding-top: 0.5rem;
  &:hover {
    background: black;
    opacity:0.8;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Link 컴포넌트 import

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

const Main = () => {
    const [topLikes, setTopLikes] = useState([]);
    const [topViews, setTopViews] = useState([]);

    useEffect(() => {
        axios.get('/user/getDepartment')
            .then(response => {
                const department = response.data;

                axios.post('/notice/toplike', {
                    major: department,
                    topsize: 3
                })
                    .then(response => {
                        const topLikesData = response.data.map(item => ({
                            ...item,
                            images: item.img.split(';'),
                        }));

                        setTopLikes(topLikesData);
                    })
                    .catch(error => {
                        console.error('좋아요 랭킹을 가져오는 도중 에러 발생:', error);
                    });

                axios.post('/notice/topView', { topsize: 3 })
                    .then(response => {
                        const topViewsData = response.data.map(item => ({
                            ...item,
                            images: item.img.split(';'),
                        }));

                        setTopViews(topViewsData);
                    })
                    .catch(error => {
                        console.error('인기 조회수를 가져오는 도중 에러 발생:', error);
                    });
            })
            .catch(error => {
                console.error('학부 정보를 가져오는 도중 에러 발생:', error);
            });
    }, []);

    return (
        <Page>
            <TextWrapper>
                <TextHot>Hot Program</TextHot>
                <TextInform>인기 좋아요 공지사항</TextInform>
            </TextWrapper>
            <ProgramWrapper>
                {topLikes.map((item, index) => (
                        <ProgramContainer>
                            {item.img && item.img !== '' ? (
                                <ProgramImgWrapper>
                                    <ProgramImg src={item.images[0]} alt={`포스터`} />
                                </ProgramImgWrapper>
                            ) : (
                                // 이미지가 없는 경우 로고 표시
                                <ProgramImgWrapper>
                                    <ProgramImg src={require('../components/knuLogo.png')} alt={`로고 ${index + 1}`} />
                                </ProgramImgWrapper>
                            )}
                            <ProgramLCWrapper>
                                <ProgramLikeWrapper>
                                    <IoIosHeart
                                        style={{ paddingLeft: 12, paddingTop: 1.3, cursor: 'pointer' }} size={35}
                                        onClick={async () => {await handleHeartClick(item.dbid);}}
                                    />
                                    <LikeCount>{item.likeCount}</LikeCount>
                                </ProgramLikeWrapper>
                                <ProgramComment>
                                    <BsChatSquareTextFill style={{ paddingTop: 6 }} size={30} />
                                    {/*<TextCount>{item.댓글갯수변수명}</TextCount>*/}
                                </ProgramComment>
                            </ProgramLCWrapper>
                            <ProgramTitleWrapper>
                                <Link to={`/field/read/${item.dbid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {item.title}
                                </Link>
                            </ProgramTitleWrapper>
                        </ProgramContainer>
                ))}
            </ProgramWrapper>
            <TextInform>인기 조회수 공지사항</TextInform>
            <ProgramWrapper>
                {topViews.map((item, index) => (
                        <ProgramContainer>
                            {item.img && item.img !== '' ? (
                                <ProgramImgWrapper>
                                    <ProgramImg src={item.images[0]} alt={`포스터`} />
                                </ProgramImgWrapper>
                            ) : (
                                // 이미지가 없는 경우 로고 표시
                                <ProgramImgWrapper>
                                    <ProgramImg src={require('../components/knuLogo.png')} alt={`로고 ${index + 1}`} />
                                </ProgramImgWrapper>
                            )}
                            <ProgramLCWrapper>
                                <ProgramLikeWrapper>
                                    <IoIosHeart
                                        style={{ paddingLeft: 12, paddingTop: 1.3, cursor: 'pointer' }} size={35}
                                        onClick={async () => {await handleHeartClick(item.dbid);}}
                                    />
                                    <LikeCount>{item.likeCount}</LikeCount>
                                </ProgramLikeWrapper>
                                <ProgramComment>
                                    <BsChatSquareTextFill style={{ paddingTop: 6 }} size={30} />
                                    {/*<TextCount>{item.댓글갯수변수명}</TextCount>*/}
                                </ProgramComment>
                            </ProgramLCWrapper>
                            <ProgramTitleWrapper>
                                <Link to={`/field/read/${item.dbid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {item.title}
                                </Link>
                            </ProgramTitleWrapper>
                        </ProgramContainer>
                    ))}
            </ProgramWrapper>
        </Page>
    );
}

export default Main;