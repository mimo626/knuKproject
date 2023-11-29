import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const WelfareContainer = styled.div`
display: flex;
flex-direction: column;
width: 17.2rem;
height: 21rem;
box-shadow: 5px 2px 8px 1px #D3D3D3;
border-radius: 1.25rem;
margin-top: 2rem;
`;
const SocietyBtn = styled.div`
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
const WelfareBtn = styled.div`
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
const SilverBtn = styled.div`
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


function MajorWelfareClick() {
    return (
        <WelfareContainer>
            <SocietyBtn><Link to={'/field/major/사회복지학부/page/1'} style={{ textDecoration: "none"}}>사회복지학부</Link></SocietyBtn>
            <WelfareBtn><Link to={'/field/major/스포츠복지전공/page/1'} style={{ textDecoration: "none"}}>스포츠복지전공</Link></WelfareBtn>
            <SilverBtn><Link to={'/field/major/실버산업학과/page/1'} style={{ textDecoration: "none"}}>실버산업학과</Link></SilverBtn>
        </WelfareContainer>
           
    );
}

export default MajorWelfareClick;