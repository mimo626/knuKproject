import styled from "styled-components";
import Header from "../components/Header";
import Main1 from "../components/Main1";
import MainCategory from "../components/MainCategory";
import MainSearch from "../components/MainSearch";
import Hotprogram from "../components/Hotprogram";



const Container = styled.div`
    width: 100%;
    background-color: #FFF;
`;


function Main() {
    return (
        <Container>
            <Header />
            <Main1></Main1>
            <MainSearch></MainSearch>
            <MainCategory></MainCategory>
            <Hotprogram></Hotprogram>
        </Container>
    );
}

export default Main;