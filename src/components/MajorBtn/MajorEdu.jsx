import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";


const MajorEdu = styled.div`
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



function Major(propsEdu) {
    return (
        <MajorEdu onClick={() => propsEdu.switch(false)}>사범대학</MajorEdu>
      
    );
}

export default Major;