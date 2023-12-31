import Header from "../../components/Header";
import Intro1 from "../../components/intro1.png";
import Intro2 from "../../components/intro2.png";
import styled from "styled-components";

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

const IntroText = styled.div`
    width: 27rem;
    text-align: center;
    font-family: Inter;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
`;

const IntroLine = styled.div`
    width: 75rem;
    height: 0.15rem;
    background-color: black;
    flex-shrink: 0;
    margin-top:2rem;
    margin-bottom:2rem;
`;
const ImgWrapper = styled.div`
    width:75.5rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;
`;
const Img1 = styled.img`
    width:75.5rem;

`;
const Img2 = styled.img`
    width:75.5rem;

`;

function Intro(){
    return(
        <Page>
            <Header></Header>
            <Content>
                <IntroText>KNU Replica Intro</IntroText>
                <IntroLine></IntroLine>
                <ImgWrapper>
                    <Img1 src={Intro1}></Img1>
                    <Img2 src={Intro2}></Img2>
                </ImgWrapper>
            </Content>
        </Page>
        
    );
    }
    export default Intro; 