import styled from "styled-components";
import Tab from "../components/Tab";
import Field from "../components/Field";
import Major from "../components/Major";
import { useState } from "react";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #E9F9FA;
    margin-top: 2rem;
`;


const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;

`;
const CategoryTitle = styled.div`
    color: black;
    font-family: Racing Sans One;
    font-size: 3.75rem;
    font-style: italic; 
    font-weight: 700;
    line-height: 1rem; 
    text-align: center;
    margin-top: 8rem;
    margin-bottom: 6rem;
`;


const Circle = styled.div`
    background-color: #54A9EA;
    border-radius: 5rem;
    width: 3.3rem;
    height: 3.3rem;
    margin: 0 auto;
    margin-top:2rem;
`;

const Line = styled.div`
    width: 0.2rem;
    height: 9.4375rem;
    background-color: #54A9EA;
    flex-shrink: 0;
    margin: 0 auto;
    margin-top: 1.5rem;
`;

function MainCategory() {
    const [tab, setTab] = useState(true)

    return (
        <Page>
            <CategoryTitle>Program Category</CategoryTitle>
            <Content>
                {
                    tab 
                    ? <Major></Major>
                    : <Field></Field>
                }
                <Circle></Circle>
                <Line></Line>
                <Tab left={'단과대별'} right={'분야별'} switch={setTab}/>
            </Content>
        </Page>
    );
}

export default MainCategory;