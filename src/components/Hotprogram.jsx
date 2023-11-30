import styled from "styled-components";
import { useContext } from "react";
import { MainContext } from "../services/MainProvider";
import poster1 from './poster1.png';
import poster2 from './poster2.png';
import poster3 from './poster3.png';
import { IoIosHeart } from "react-icons/io";
import { BsChatSquareTextFill } from "react-icons/bs";

const Page = styled.div`
<<<<<<< HEAD
    width:100%;
    background-color: #ADC9F7;
    padding-bottom:8rem;
=======
  height: 55rem;
  width:100%;
  background-color: #ADC9F7;
  padding-bottom:8rem;
>>>>>>> 452818e0f3894c3931fa2f3602f09268f07e8ff0
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [topLikes, setTopLikes] = useState([]);

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
                            images: item.img.split(';'), // 이미지 URL을 세미콜론으로 분리하여 배열로 만듦
                        }));

                        setTopLikes(topLikesData);

                        setTopLikes(topLikesData);
                    })
                    .catch(error => {
                        console.error('좋아요 랭링을 가져오는 도중 에러 발생:', error);
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
                    <ProgramContainer key={index}>
                        {item.images && item.images.length > 0 && (
                            <ProgramImgWrapper>
                                <ProgramImg src={item.images[0]} alt={`포스터 ${index + 1}`} />
                            </ProgramImgWrapper>
                        )}
                        <ProgramLCWrapper>
                            <ProgramLikeWrapper>
                                <IoIosHeart style={{ paddingLeft:12 , paddingTop:1.3}} size={35} ></IoIosHeart>
                                <LikeCount>{item.likeCount}</LikeCount>
                            </ProgramLikeWrapper>                            
                        <ProgramComment>
                        <BsChatSquareTextFill style={{paddingTop:6}} size={30}></BsChatSquareTextFill>
                        {/*<TextCount>{item.댓글갯수변수명}</TextCount>*/}
                        </ProgramComment>
                        </ProgramLCWrapper>
                        <ProgramTitleWrapper>{item.title}</ProgramTitleWrapper>
                    </ProgramContainer>
                ))}
            </ProgramWrapper>
            <TextInform>인기 조회수 공지사항</TextInform>
            <ProgramWrapper>
                {topLikes.map((item, index) => (
                    <ProgramContainer key={index}>
                        {item.images && item.images.length > 0 && (
                            <ProgramImgWrapper>
                                <ProgramImg src={item.images[0]} alt={`포스터 ${index + 1}`} />
                            </ProgramImgWrapper>
                        )}
                        <ProgramLCWrapper>
                            <ProgramLikeWrapper>
                                <IoIosHeart style={{ paddingLeft: 12, paddingTop: 1.3 }} size={35} />
                                <LikeCount>{item.likeCount}</LikeCount>
                            </ProgramLikeWrapper>
                        <ProgramComment>
                        <BsChatSquareTextFill style={{paddingTop:6}} size={30}></BsChatSquareTextFill>
                        {/*<TextCount>{item.댓글갯수변수명}</TextCount>*/}
                        </ProgramComment>
                            <ProgramComment>
                                <BsChatSquareTextFill style={{paddingTop:6}} size={30}></BsChatSquareTextFill>
                                <TextCount>{item.commentCount}</TextCount>
                            </ProgramComment>*
                        </ProgramLCWrapper>
                        <ProgramTitleWrapper>{item.title}</ProgramTitleWrapper>
                    </ProgramContainer>
                ))}
            </ProgramWrapper>
        </Page>
    );
}

export default Main;
