import Header from "../../components/Header";
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

const MYText = styled.div`
    width: 10rem;
    text-align: center;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
`;

const MYLine = styled.div`
    width: 75rem;
    height: 0.1rem;
    background-color: black;
    flex-shrink: 0;
    margin-top:2rem;
`;

function My(){
    return(
        <Page>
            <Header></Header>
            <Content>
                <MYText>My Page</MYText>
                <MYLine></MYLine>
            </Content>
        </Page>
        
    );
    }
    export default My; 