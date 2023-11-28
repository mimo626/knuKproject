import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const EduContainer = styled.div`
display: flex;
flex-direction: column;
width: 17.2rem;
height: 21rem;
box-shadow: 5px 2px 8px 1px #D3D3D3;
border-radius: 1.25rem;
margin-top: 2rem;
`;
const EduBtn = styled.div`
display: flex;
width: 100%;
height: 33.3%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;
const ChildBtn = styled.div`
display: flex;
width: 100%;
height: 33.3%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;
const SpecialBtn = styled.div`
display: flex;
width: 100%;
height: 33.3%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;


function MajorEduClick() {
    return (
        <EduContainer>
            <EduBtn><Link to={'/field/major/교육학과/page/1'} style={{ textDecoration: "none"}}>교육학과</Link></EduBtn>
            <ChildBtn><Link to={'/field/major/유아교육과/page/1'} style={{ textDecoration: "none"}}>유아교육과</Link></ChildBtn>
            <SpecialBtn><Link to={'/field/major/특수교육과/page/1'} style={{ textDecoration: "none"}}>특수교육과</Link></SpecialBtn>
        </EduContainer>
           
    );
}

export default MajorEduClick;