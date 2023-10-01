import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 800px;
    background-color: #D6F0EA;
`;

const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const Menu = styled.div`
    width: 50%;
    padding: 30px;
    text-align: center;
    background-color: #D6F0EA;
    &:hover {
        background-color: #A7BEB8;
        transition: all 0.3s;
        cursor: pointer;
    }
`;

function Tab(props) {
    const [tab, setTab] = useState(true)

    return (
        <Container>
            <MenuWrapper>
                <Menu onClick={() => setTab(true)}>{props.left}</Menu>
                <Menu onClick={() => setTab(false)}>{props.right}</Menu>
            </MenuWrapper>
            <div>
                {
                    tab ? props.left : props.right
                }
            </div>
        </Container>
    );
}

export default Tab;