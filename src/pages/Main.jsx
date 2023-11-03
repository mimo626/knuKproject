import styled from "styled-components";
import Tab from "../components/Tab";
import Header from "../components/Header";
import SignupBtn from "../components/SignupBtn";
import LoginBtn from "../components/LoginBtn";


const Container = styled.div`
    width: 100%;
    background-color: #E9F9FA;
`;

const Page = styled.div`
]   height: 35.5625rem;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    margin: 130px 425px 0px 425px;
`;
const Main1Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:23.5rem;
    flex-shrink: 0;
`;
const Circle = styled.div`
    background-color: #006CBF;
    width: 16rem;
    height: 16rem;
    flex-shrink: 0;
    border-radius: 18.75rem;
`;
const KNUText1 = styled.div`
    color: #FFF;
    text-align: right;
    font-family: Oleo Script;
    font-size: 4.375rem;
    font-style: italic; 
    font-weight: 1000; 
    margin-top:5.12rem;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    color: #54A9EA;
    font-family: Oleo Script;
    font-size: 2.25rem;    
    font-style: italic; 
    font-weight: 600; 
    margin-top: 1.5rem;
`;
const MainBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width:23.5rem;
    flex-shrink: 0;
    margin-top: 3.5rem;
`;
const Promotion = styled.img`
    width: 38.7rem;
    height: 29rem;
    border-radius: 4.8125rem; 
    margin-top:4.9rem;
    margin-bottom:1.6rem;
`;

const Content = styled.div`
    background-color: #006CBF;
`;


function Main() {
    return (
        <Container>
            <Header />
            <Page>
                <Main1Wrapper>
                    <Circle>
                        <KNUText1>KNU</KNUText1>
                    </Circle>
                    <Text>
                        This site that<br /> 
                        provides information <br /> 
                        desired by<br /> 
                        KNU students
                    </Text>
                    <MainBtnWrapper>
                        <SignupBtn/>
                        <LoginBtn/>
                    </MainBtnWrapper>
                </Main1Wrapper>
                <Promotion src="img/knu_view.webp" />
            </Page>
            <Content>
                <Tab left={'단과대별'} right={'분야별'}/>
                <div>
                    Hot Program
                </div>
                <div>
                    Footer
                </div>
            </Content>
        </Container>
    );
}

export default Main;