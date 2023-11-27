import styled from "styled-components";
import Header from "../components/Header";
import Main1 from "../components/Main1";
import MainCategory from "../components/MainCategory";
import MainSearch from "../components/MainSearch";
import Hotprogram from "../components/Hotprogram";
import MainProvider from "../services/MainProvider";

const Container = styled.div`
    width: 100%;
    background:#fff;
    
`;


function Main() {
    return (
        <MainProvider>
            <Container>
                <Header />
                <Main1></Main1>
                <MainSearch></MainSearch>
                <MainCategory></MainCategory>
                <Hotprogram></Hotprogram>
            </Container>
        </MainProvider>
    );
}

export default Main;