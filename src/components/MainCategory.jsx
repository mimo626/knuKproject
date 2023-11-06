import styled from "styled-components";
import Tab from "../components/Tab";
import knuMap from './knuMap.png';



const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #E9F9FA;
    margin-top: 2rem;
`;

const Line = styled.div`
    width: 0.2rem;
    height: 9.4375rem;
    background-color: #54A9EA;
    flex-shrink: 0;
    margin: 0 auto;
    margin-top: 1.5rem;
`;

const Circle = styled.div`
    background-color: #54A9EA;
    border-radius: 5rem;
    width: 3.3rem;
    height: 3.3rem;
    margin: 0 auto;
    margin-top: 1.5rem;

`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E9F9FA;
    margin-top: 2.5rem;

`;
const Map = styled.img`
    width: 50.25rem;
    height: 35.375rem;
    flex-shrink: 0;
    margin: 0 auto;
    margin-top:2.6rem;
`;


function Main() {
    return (
        <Page>
            <Line></Line>
            <Circle></Circle>
            <Content>
                <Map src={knuMap} alt='강남대 지도'></Map>
                <Tab left={'단과대별'} right={'분야별'}/>
                <div>
                    Hot Program
                </div>
                <div>
                    Footer
                </div>
            </Content>
        </Page>
    );
}

export default Main;