import styled from "styled-components";

const Page = styled.div`
    height: 55rem;
    width:99%;
    background-color: #E9F9FA;
    margin: 0 auto;
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
    color: black;
    font-family: Racing Sans One;
    font-size: 3.75rem;
    font-style: italic; 
    font-weight: 700;
    line-height: 1rem; 
    text-align: center;
    margin-top: 6.5rem;
`;
const TextInform = styled.div`
    color: #949494;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem; 
    text-align: center;
    margin-top: 3.5rem;
`;
const PosterWrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    gap: 4.0625rem 2.1875rem;
    flex-wrap: wrap;
    height: 50%;
    width: 70%;
    border-top: 2.5px solid black;
    border-bottom: 2.5px solid black;
    margin:0 auto;
`;

function Main() {
    return (
        <Page>
            <TextWrapper>
                <TextHot>Hot Program</TextHot>
                <TextInform>인기 있는 비교과 프로그램을 확인해보세요!</TextInform>
            </TextWrapper>
            <PosterWrapper>
            </PosterWrapper>
        </Page>
    );
}

export default Main;