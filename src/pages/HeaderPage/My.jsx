import Header from "../../components/Header";
import styled from "styled-components";
import poster1 from '../../components/poster1.png';
import poster2 from '../../components/poster2.png';
import poster3 from '../../components/poster3.png';
import { IoIosHeart } from "react-icons/io";
import { BsChatSquareTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";

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
const MyTitleWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
    height: 25rem;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    border-right: 1px solid #D3D3D3;
    align-items: center;
`;
const MyInfromWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 10rem;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    justify-content: center;
`;
const MyInfromWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 25rem;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    justify-content: center;
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
    margin-left: 5rem;
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
    margin-bottom:2rem;
    margin-left:2rem;
`;

function My(){
    return(
        <Page>
            <Header></Header>
            <Content>
                <MYText>My Page</MYText>
                <MYLine></MYLine>
                <MyContent>
                    <MyTitleWrapper>Profile</MyTitleWrapper>
                    <MyInfromWrapper>
                        <MyEmail>닉네임: y***@gmail.com</MyEmail>
                        <EmailBtnContainer>
                        <Link to={'/knuLogin'} style={{ textDecoration: "none" }}><EmailBtn>강남대 이메일인증</EmailBtn></Link>
                        </EmailBtnContainer>
                    </MyInfromWrapper>
                </MyContent>
                <MYLine2></MYLine2>
                <MyContent>
                    <MyTitleWrapper2>좋아요 누른 <br></br>게시물</MyTitleWrapper2>
                    <MyInfromWrapper2>
                        <ProgramContainer>
                            <ProgramImgWrapper>
                                <ProgramImg  src={poster1} alt='포스터' ></ProgramImg>
                            </ProgramImgWrapper>
                            <ProgramLCWrapper>
                                <ProgramLikeWrapper>
                                    <IoIosHeart style={{ paddingLeft:12 , paddingTop:1.3}} size={35} ></IoIosHeart>
                                    <LikeCount>56</LikeCount>
                                </ProgramLikeWrapper>
                                <ProgramComment>
                                    <BsChatSquareTextFill style={{paddingTop:6}} size={30}></BsChatSquareTextFill>
                                    <TextCount>34</TextCount>
                                </ProgramComment>
                            </ProgramLCWrapper>
                            <ProgramTitleWrapper>KT 에이블 스쿨 5기 지역추천제 선발/모집 (~12/8)</ProgramTitleWrapper>
                        </ProgramContainer>
                        <ProgramContainer>
                            <ProgramImgWrapper>
                                <ProgramImg  src={poster2} alt='포스터' ></ProgramImg>
                            </ProgramImgWrapper>
                            <ProgramLCWrapper>
                                <ProgramLikeWrapper>
                                    <IoIosHeart style={{ paddingLeft:12 , paddingTop:1.3}} size={35} ></IoIosHeart>
                                    <LikeCount>102</LikeCount>
                                </ProgramLikeWrapper>
                                <ProgramComment>
                                    <BsChatSquareTextFill style={{paddingTop:6}} size={30}></BsChatSquareTextFill>
                                    <TextCount>45</TextCount>
                                </ProgramComment>
                            </ProgramLCWrapper>
                            <ProgramTitleWrapper>취업콘텐츠 영상 자율강좌 시청 안내</ProgramTitleWrapper>
                        </ProgramContainer>
                        <ProgramContainer>
                            <ProgramImgWrapper>
                                <ProgramImg  src={poster3} alt='포스터' ></ProgramImg>
                            </ProgramImgWrapper>
                            <ProgramLCWrapper>
                                <ProgramLikeWrapper>
                                    <IoIosHeart style={{ paddingLeft:12 , paddingTop:1.3}} size={35} ></IoIosHeart>
                                    <LikeCount>34</LikeCount>
                                </ProgramLikeWrapper>
                                <ProgramComment>
                                    <BsChatSquareTextFill style={{paddingTop:6}} size={30}></BsChatSquareTextFill>
                                    <TextCount>17</TextCount>
                                </ProgramComment>
                            </ProgramLCWrapper>
                            <ProgramTitleWrapper>[11/8] MBTI 사랑으로 통역이 되나요? 더 레인보우 특강 수강생 모집</ProgramTitleWrapper>
                        </ProgramContainer>
                    </MyInfromWrapper2>
                </MyContent>
                <MYLine2></MYLine2>
                <MyContent>
                    <MyTitleWrapper>작성한 댓글</MyTitleWrapper>
                    <MyInfromWrapper>
                        <MyComment>스터디 같이 신청할 사람 모집해요~</MyComment>
                    </MyInfromWrapper>
                </MyContent>
            </Content>
        </Page>
        
    );
    }
    export default My; 