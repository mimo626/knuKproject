import styled from "styled-components";
import { useContext } from "react";
import { MainContext } from "../services/MainProvider";
import poster1 from './poster1.png';
import poster2 from './poster2.png';
import poster3 from './poster3.png';
import { IoIosHeart } from "react-icons/io";
import { BsChatSquareTextFill } from "react-icons/bs";

const Page = styled.div`
    height: 55rem;
    width:100%;
    background-color: #ADC9F7;
    padding-bottom:8rem;
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

function Main(props) {
    const notice = useContext(MainContext);
    return (
        <Page>
            <TextWrapper>
                <TextHot>Hot Program</TextHot>
                <TextInform>인기 있는 비교과 프로그램을 확인해보세요!</TextInform>
            </TextWrapper>
            <ProgramWrapper>
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
                            <LikeCount>120</LikeCount>
                        </ProgramLikeWrapper>
                        <ProgramComment>
                            <BsChatSquareTextFill style={{paddingTop:6}} size={30}></BsChatSquareTextFill>
                            <TextCount>56</TextCount>
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
                            <LikeCount>22</LikeCount>
                        </ProgramLikeWrapper>
                        <ProgramComment>
                            <BsChatSquareTextFill style={{paddingTop:6}} size={30}></BsChatSquareTextFill>
                            <TextCount>13</TextCount>
                        </ProgramComment>
                    </ProgramLCWrapper>
                    <ProgramTitleWrapper>[11/8] MBTI 사랑으로 통역이 되나요? 더 레인보우 특강 수강생 모집</ProgramTitleWrapper>
                </ProgramContainer>

            </ProgramWrapper>
        </Page>
    );
}

export default Main;