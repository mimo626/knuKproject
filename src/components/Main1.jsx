import styled from "styled-components";

const Page = styled.div`
    height: 35.5625rem;
    width:100%;
    padding-top:10rem;

`;
const Content = styled.div`
    width:75.5rem;
    height: 35.5625rem;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;

const Main1Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:25.5rem;
    margin-top: 10rem;
    flex-shrink: 0;
    margin: 0 auto;    
`;
const Circle = styled.div`
    background: linear-gradient(to right, #006CBF, #fff);
    width: 20rem;
    height: 20rem;
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
    text-shadow: 7px 7px black;
`;

const Text = styled.div`
    color: #54A9EA;
    font-family: Oleo Script;
    font-size: 2.5rem;    
    font-style: italic; 
    font-weight: 800; 
    margin-top: 1rem;
`;
const MainBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width:23.5rem;
    flex-shrink: 0;
    padding-top: 2.5rem;
    margin: 0 auto;
`;
const Promotion = styled.img`
    width: 50rem;
    height: 35rem;
    border-radius: 4.8125rem; 
    margin-top:9rem;
    margin-bottom:1.6rem;
    margin: 0 auto;

`;

function Main1() {

    return (
        <Page>
            <Content>
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
                    </MainBtnWrapper>
                </Main1Wrapper>
                <Promotion src="img/knu_view.webp" />
            </Content>
        </Page>
    );
}

export default Main1;