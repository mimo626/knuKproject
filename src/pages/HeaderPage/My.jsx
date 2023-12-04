import Header from "../../components/Header";
import styled from "styled-components";
import { IoIosHeart } from "react-icons/io";
import { BsChatSquareTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Page = styled.div`
    width:100%;
    margin-top: 8rem;

`;
const Content = styled.div`
    width:75rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;
`;

const MYText = styled.div`
    width: 15rem;
    text-align: center;
    font-family: Inter;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
`;

const MYLine = styled.div`
    width: 75rem;
    height: 0.15rem;
    background-color: black;
    flex-shrink: 0;
    margin-top:2rem;
    margin-bottom:2rem;
`;
const MYLine2 = styled.div`
    width: 75rem;
    height: 0.1rem;
    background-color: black;
    flex-shrink: 0;
    margin-top:2rem;
    margin-bottom:2rem;
`;
const MyContent = styled.div`
    display: flex;
    flex-direction: row;
    width:75.5rem;
    margin:0 auto;
`;

const MyTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    border-right: 1px solid #D3D3D3;
    align-items: center;
`;
const MyInfromWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 91%;    
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    justify-content: center;
`;
const MyInfromWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    width: 91%; 
    max-width: 91%;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-left: 1.5rem;
`;
const MyEmail = styled.div`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    margin-bottom:2rem;
    margin-left:2rem;
`;
const EmailBtnContainer = styled.div`
    display: flex;
    width: 10rem;
    height: 3rem;
    padding: 0.2rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    background: #006CBF;
    border-radius: 18.75rem;
    margin-left:2rem;

`;
const EmailBtn = styled.div`
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    &:hover {
        font-weight: 600;
        transition: all 0.3s;
        cursor: pointer;
    }
`;
const ProgramContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 14rem;
    height: 23rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px #B4B4B4;
    gap: 0.5rem;
    align-items: center;
`;

const ProgramImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    width: 100%;
`;

const ProgramImg = styled.img`
    width: 12rem;
    height: 15rem;
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
    width: 100%;
`;

const ProgramLikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width:30%;
    color: #FE4D82;
`;
const LikeCount = styled.div`
    font-size: 1rem;
    font-weight: 500;
    padding-top: 0.3rem;
`;
const ProgramComment = styled.div`
    display: flex;
    flex-direction: row;
    width:70%;
    font-size: 1rem;
    font-weight: 500;
    padding-left: 0.3rem;

`;
const TextCount = styled.div`
    font-size: 1rem;
    font-weight: 500;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
`;
const ProgramTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 20%;
    border-top: 2px solid black;
    font-size: 0.9rem;
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
const MyComment = styled.div`
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    margin-bottom:1rem;
    margin-left:1.5rem;
`;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function My() {
    const [userEmail, setUserEmail] = useState('');
    const [likesData, setLikesData] = useState([]);
    const [commentsData, setCommentsData] = useState([]);

    // 이메일 가리기 함수
    const maskEmail = (email) => {
        const atIndex = email.indexOf('@');
        const domain = email.slice(atIndex);
        const username = email.slice(0, atIndex);
        const maskedUsername = username.substring(0, 2) + '*'.repeat(username.length - 2);
        const maskedEmail = maskedUsername;
        return maskedEmail;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 이메일
                const emailResponse = await axios.get('/user/getEmail');
                const email = emailResponse.data;
                const maskedEmail = maskEmail(email);
                setUserEmail(maskedEmail);

                // 좋아요
                const likedItemsResponse = await axios.post('/user/likes');
                const processedLikedItems = likedItemsResponse.data.map(item => ({
                    ...item,
                    images: item.img.split(';'),
                }));
                setLikesData(processedLikedItems);

                // 댓글
                const commentsResponse = await axios.post('/user/comments');
                const commentsData = commentsResponse.data;
                setCommentsData(commentsData);
            } catch (error) {
                console.error('데이터를 가져오는 도중 오류 발생:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Page>
            <Header></Header>
            <Content>
                <MYText>My Page</MYText>
                <MYLine></MYLine>
                <MyContent>
                    <MyTitleWrapper>Profile</MyTitleWrapper>
                    <MyInfromWrapper>
                        <MyEmail>닉네임: {userEmail}</MyEmail>
                        <EmailBtnContainer>
                            <Link to={'/knuLogin'} style={{textDecoration: "none"}}><EmailBtn>강남대
                                이메일인증</EmailBtn></Link>
                        </EmailBtnContainer>
                    </MyInfromWrapper>
                </MyContent>
                <MYLine2></MYLine2>
                <MyContent>
                    <MyTitleWrapper>좋아요 누른 <br></br>게시물</MyTitleWrapper>
                    <MyInfromWrapper2>
                        {likesData.map(item => (
                            <ProgramContainer key={item.id}>
                                <ProgramImgWrapper>
                                    {item.img && item.img !== '' ? (
                                        <ProgramImg src={item.images[0]} alt={`포스터`} />
                                    ) : (
                                        <img src={require('../../components/knuLogo.png')} alt={`로고`} />
                                    )}
                                </ProgramImgWrapper>
                                <ProgramLCWrapper>
                                    <ProgramLikeWrapper>
                                        <IoIosHeart style={{paddingLeft: 12, paddingTop: 1.3}} size={35}></IoIosHeart>
                                        <LikeCount>{item.likeCount}</LikeCount>
                                    </ProgramLikeWrapper>
                                    <ProgramComment>
                                        <BsChatSquareTextFill style={{paddingTop: 6}} size={30}></BsChatSquareTextFill>
                                        <TextCount>{item.commentCount}</TextCount>
                                    </ProgramComment>
                                </ProgramLCWrapper>
                                <ProgramTitleWrapper>
                                    <Link to={`/field/read/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {item.title}
                                    </Link>
                                </ProgramTitleWrapper>
                            </ProgramContainer>
                        ))}
                    </MyInfromWrapper2>
                </MyContent>
                <MYLine2></MYLine2>
                <MyContent>
                    <MyTitleWrapper>작성한 댓글</MyTitleWrapper>
                    <MyInfromWrapper>
                        {commentsData.map((item, index) => (
                            <div key={index}>
                                {item && item.comment && <p>{item.comment}</p>}
                            </div>
                        ))}
                    </MyInfromWrapper>
                </MyContent>
            </Content>
        </Page>
    );
}
    export default My; 