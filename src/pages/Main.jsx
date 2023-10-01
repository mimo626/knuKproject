import styled from "styled-components";
import Tab from "../components/Tab";
import Header from "../components/Header";

const Container = styled.div`
    display: flex;
`;

const Content = styled.div`
    width: 100%;
    background-color: #6B6B6B;
`;

const Promotion = styled.div`
    width: 100%;
    height: 720px;
    color: white;
    background-color: #282945;
`;


function Main() {
    return (
        <Container>
            <Header />
            <Content>
                <Promotion>
                    video
                </Promotion>
                <Tab left={'단과대별'} right={'분야별'}/>
                <div>
                    Hot Program
                </div>
                <div>
                    Calender
                </div>
                <Tab left={'학식 식단표'} right={'달구지 시간표'}/>
                <div>
                    Footer
                </div>
            </Content>
        </Container>
    );
}

export default Main;