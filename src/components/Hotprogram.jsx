import styled from "styled-components";
import ProgramContainer from "../components/ProgramContainer";
import { useContext } from "react";
import { MainContext } from "../services/MainProvider";


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
    height: 35.0625rem;
    display: flex;
    flex-shrink: 0;
    margin-top: 1rem;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2.75rem;
    flex-wrap: wrap;
    border: 3px solid black;
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
                </ProgramContainer>
                <ProgramContainer></ProgramContainer>
                <ProgramContainer></ProgramContainer>
            </ProgramWrapper>
        </Page>
    );
}

export default Main;