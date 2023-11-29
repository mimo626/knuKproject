import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const GlobalContainer = styled.div`
display: flex;
flex-direction: column;
width: 17.2rem;
height: 21rem;
box-shadow: 5px 2px 8px 1px #D3D3D3;
border-radius: 1.25rem;
margin-top: 2rem;
`;
const GlobalBtn = styled.div`
display: flex;
width: 100%;
height: 5.25rem;
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
const MusicBtn = styled.div`
display: flex;
width: 100%;
height: 5.25rem;
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
const ChristianBtn = styled.div`
display: flex;
width: 100%;
height: 5.25rem;
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
const ContentBtn = styled.div`
display: flex;
width: 100%;
height: 5.25rem;
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

function MajorGlobalClick() {
    return (
        <GlobalContainer>
            <Link to={'/field/major/글로벌문화학부/page/1'} style={{ textDecoration: "none"}}><GlobalBtn>글로벌학부</GlobalBtn></Link>
            <Link to={'/field/major/음악학과/page/1'} style={{ textDecoration: "none"}}><MusicBtn>음악학과</MusicBtn></Link>
            <Link to={'/field/major/기독교학과/page/1'} style={{ textDecoration: "none"}}><ChristianBtn>기독교학과</ChristianBtn></Link>
            <Link to={'/field/major/글로벌문화학부/page/1'} style={{ textDecoration: "none"}}><ContentBtn>한영문화콘텐츠학과</ContentBtn></Link>
        </GlobalContainer>
           
    );
}

export default MajorGlobalClick;