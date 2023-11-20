import styled from "styled-components";

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

`;
const ProgramLikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 10%;
    border-bottom: 2px solid black;
    border-width: 80%;

`;
const ProgramTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 20%;

`;


function Main() {
    return (
        <ProgramContainer>
            <ProgramImgWrapper>
                <ProgramImg></ProgramImg>
            </ProgramImgWrapper>
            <ProgramLikeWrapper></ProgramLikeWrapper>
            <ProgramTitleWrapper></ProgramTitleWrapper>
        </ProgramContainer>
    );
}

export default Main;