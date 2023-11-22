import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";


const MajorManage = styled.div`
display: flex;
width: 16rem;
height: 3rem;
padding: 1.875rem 0.625rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #006CBF;
color: #fff;
font-size: 2rem;
font-style: normal;
font-weight: 700;
`;



function Major(propsManage) {
    return (
        <MajorManage onClick={() => propsManage.switch(false)}>경영관리대학</MajorManage>
      
    );
}

export default Major;