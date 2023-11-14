import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    background-color: #FFF;
`;

const MenuWrapper = styled.div`
    width: 37.5rem;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top:4.5rem;
`;

const Menu = styled.div`
    width: 50%;
    text-align: center;
    padding: 1.25rem 1rem;
    border: 3px solid #B3E1B7;
    background: #FFF;
    color: #B3E1B7;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 1000;
    line-height: 100%;
    &:hover {
        background: #B3E1B7;
        color: #FFF;
        transition: all 0.3s;
        cursor: pointer;
    }
`;

function Tab(props) {
    return (
        <Container>
            <MenuWrapper>
                <Menu onClick={() => props.switch(true)}>{props.left}</Menu>
                <Menu onClick={() => props.switch(false)}>{props.right}</Menu>
            </MenuWrapper>
        </Container>
    );
}

export default Tab;